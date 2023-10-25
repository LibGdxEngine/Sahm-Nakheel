const User = require("../models/user");
const Notification = require("../models/Notifications");
const _ = require("lodash");
const formidable = require("formidable");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const { errorHandler } = require("../helpers/dbErrorHandler");
const mongoose = require("mongoose");
const { sendEmailWithNodemailer } = require("../helpers/email");
const { v4: uuidv4 } = require("uuid");
const crypto = require("crypto");

exports.searchUser = (req, res) => {
  const query = req.body.query;
  if (!query) {
    return res.status(400).json({
      error: "لم تقم بارسال أي بيانات ليتم البحث من خلالها",
    });
  }
  User.find({
    $or: [
      { email: { $regex: query, $options: "i" } },
      { phone: { $regex: query, $options: "i" } },
      { username: { $regex: query, $options: "i" } },
    ],
  }).exec((err, users) => {
    if (err || !users) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.json({ users });
  });
};
function buildChargeRequest() {
  const uuid = uuidv4();
  const inputString =
    "770000015886" +
    uuid.toString() +
    "123456" +
    "PAYATFAWRY" +
    "15.00" +
    "b3ab571f-a2c8-4e91-8464-276134adf160";
  // Create a SHA-256 hash
  const sha256Hash = crypto.createHash("sha256");

  // Update the hash with your input
  sha256Hash.update(inputString);

  // Get the hexadecimal representation of the hash
  const hashedString = sha256Hash.digest("hex");

  const currentDate = new Date();

  // Calculate the timestamp for tomorrow
  const tomorrowTimestamp = currentDate.getTime() + 24 * 60 * 60 * 1000; // Add 24 hours in milliseconds

  const PaymentData = {
    merchantCode: "770000015886",
    customerName: "Ahmed Fathy",
    customerMobile: "01019867911",
    customerEmail: "ahmed.fathy1445@gmail.com",
    customerProfileId: "123456",
    merchantRefNum: uuid.toString(),
    amount: "15.00",
    paymentExpiry: `${tomorrowTimestamp}`,
    currencyCode: "EGP",
    language: "en-gb",
    chargeItems: [
      {
        itemId: "6b5fdea340e31b3b0339d4d4ae5",
        description: "Nakhla 1",
        price: 15,
        quantity: 1,
        imageUrl: "https://developer.fawrystaging.com/photos/45566.jpg",
      },
    ],
    signature: hashedString,
    paymentMethod: "PAYATFAWRY",
    description: "Example Description",
  };
  return PaymentData;
}
exports.initateCheckout = async (req, res) => {

  const PaymentData = {
    merchantCode: req.body.merchantCode,
    merchantRefNumber: req.body.merchantRefNumber,
    signature: req.body.signature
  };

  fetch(`https://atfawry.fawrystaging.com/ECommerceWeb/Fawry/payments/status/v2?merchantCode=${PaymentData.merchantCode}&merchantRefNumber=${PaymentData.merchantRefNumber}&signature=${PaymentData.signature}
  `, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then(async (response) => {
      console.log(JSON.stringify(response.toString()));
      const data = await response.json();
      return res.json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({ error: err });
    });
};

exports.sendNotification = (req, res) => {
  const message = req.body.message;
  const senderUsername = req.body.username;
  const link = req.body.link;
  const newNotification = new Notification({ message, link, read: false });
  User.findOneAndUpdate(
    { username: senderUsername },
    {
      $push: {
        notifications: newNotification,
      },
    },
    { new: true }
  ).exec((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    } else {
      return res.json({ message: "تم ارسال الإشعار" });
    }
  });
};

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  return res.json(req.profile);
};

exports.readNotification = (req, res) => {
  const notificationId = req.body.notificationId;

  Notification.findByIdAndUpdate(
    { _id: notificationId },
    { read: true },
    { new: true }
  ).exec((err, data) => {
    if (err || !data) {
      console.log(err);
      return res.status(400).json({
        error: "Error getting notifications",
      });
    }
    res.json({ message: "تم قراءة الإشعار" });
  });
};

exports.getMyNotifications = (req, res) => {
  const userId = req.body.userId;
  const notificationsLimit = 10; // Set the desired limit here

  User.findById({ _id: userId })
    .populate({ path: "notifications", options: { limit: notificationsLimit } })
    .exec((err, data) => {
      if (err || !data) {
        console.log(err);
        return res.status(400).json({
          error: "Error getting notifications",
        });
      }
      res.json(data.notifications);
    });
};

const sendNotificationTo = async (
  receiverId,
  notificationMessage,
  link = "/",
  req
) => {
  try {
    // Save notification object to receiver collection
    const newNotification = new Notification({
      receiver: JSON.stringify(receiverId),
      message: notificationMessage,
      link,
      read: false,
    });
    await newNotification.save();

    // Add the notification to the user's notifications array
    const updatedUser = await User.findByIdAndUpdate(
      receiverId,
      {
        $push: {
          notifications: newNotification,
        },
      },
      { new: true }
    );

    // Send notification if receiver is online
    const socket = req.userSocketMap.get(JSON.stringify(receiverId));
    if (socket) {
      socket.emit("newNotification", {
        message: notificationMessage,
        link,
        createdAt: newNotification.createdAt,
        read: false,
      });
    } else {
      // console.log(`User with ID ${receiverId} not connected`);
    }

    return updatedUser;
  } catch (err) {
    console.error(
      `Error sending notification to user with ID ${receiverId}:`,
      err
    );
  }
};

exports.publicProfile = (req, res) => {
  let username = req.params.username;
  let user;
  //       "username _id questions gender sentRequests recievedRequests userStatus confirmed role favourites"
  User.findOne({ username })
    .select("username _id questions gender userStatus confirmed role")
    // .populate("recievedRequests", "sender status createdAt")
    // .populate({
    //   path: "recievedRequests",
    //   populate: { path: "sender", select: "username" },
    // })
    // .populate("sentRequests", "reciever status createdAt")
    // .populate({
    //   path: "sentRequests",
    //   populate: { path: "reciever", select: "username" },
    // })
    .exec((err, userFromDB) => {
      if (err || !userFromDB) {
        return res.status(400).json({
          error: "User not found",
        });
      }
      user = userFromDB;
      //delete father's phone number from each user
      if (user.gender === "woman") {
        const excludedNumbers = ["15"]; // list of numbers to exclude

        for (let j = 0; j < 48; j++) {
          const key = j.toString();
          if (excludedNumbers.includes(key)) {
            user.questions.delete(key);
          }
        }
      }
      user.hashed_password = undefined;
      user.phone = undefined;
      user.name = undefined;
      user.idPhoto1 = undefined;
      user.idPhoto2 = undefined;
      user.idNumber = undefined;
      user.sentRequests = undefined;
      user.favourites = undefined;
      user.recievedRequests = undefined;

      res.json({
        user,
      });
    });
};

exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtension = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be uploaded",
      });
    }

    let user = req.profile;
    // user's existing role and email before update
    let existingRole = user.role;
    let existingEmail = user.email;

    if (fields && fields.username && fields.username.length > 12) {
      return res.status(400).json({
        error: "Username should be less than 12 characters long",
      });
    }

    if (fields.username) {
      fields.username = slugify(fields.username).toLowerCase();
    }

    if (fields.password && fields.password.length < 6) {
      return res.status(400).json({
        error: "Password should be min 6 characters long",
      });
    }

    fields.questions = JSON.parse(fields.questions);

    user = _.extend(user, fields);

    // user's existing role and email - dont update - keep it same
    user.role = existingRole;
    user.email = existingEmail;

    if (files.photo) {
      if (files.photo.size > 10000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb",
        });
      }
      user.photo.data = fs.readFileSync(files.photo.filepath);
      user.photo.contentType = files.photo.type;
    }

    user.save((err, result) => {
      if (err) {
        console.log("profile udpate error", err);
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      user.hashed_password = undefined;

      user.salt = undefined;
      user.photo = undefined;
      user.questions = undefined;
      user.phone = undefined;
      user.idPhoto1 = undefined;
      user.idPhoto2 = undefined;
      res.json(user);
    });
  });
};

exports.photo = (req, res) => {
  const username = req.params.username.toLowerCase();
  User.findOne({ username })
    .select("photo")
    .exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({ error: "User not found" });
      }
      if (user.photo.data) {
        res.set("Content-Type", user.photo.type);
        return res.send(user.photo.data);
      }
    });
};
