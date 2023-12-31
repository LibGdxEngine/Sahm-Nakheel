import Image from "next/image";
import contactUs from "../../public/images/svgs/Contact Us.svg";
import map from "../../public/images/svgs/Map.svg";
import smallMap from "../../public/images/svgs/smallMap.svg";
import vector4 from "../../public/images/svgs/Vector (1).svg";
import vector3 from "../../public/images/svgs/Vector (2).svg";
import vector2 from "../../public/images/svgs/Vector (3).svg";
import vector1 from "../../public/images/svgs/Vector 1.svg";
const ContactUs = () => {
  return (
    <div>
      <br />
      <br />
      <div
        id="contactus"
        className="flex h-full sm:flex-col-reverse  items-center justify-between w-full lg:flex-col relative"
      >
        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center relative">
          <Image
            src={vector1}
            width={698}
            height={631}
            alt=""
            className="absolute left-[-25%] top-[-25%] z-0 xs:top-[20%] sm:hidden"
          />
          <Image
            src={vector1}
            width={698}
            height={631}
            alt=""
            className="absolute left-[10%] top-[-25%] z-0 sm:top-[10%] hidden sm:block"
          />
          <Image
            src={contactUs}
            width={496}
            height={205}
            alt=""
            className="absolute left-[-10%] top-[5%] sm:left-[0%] sm:hidden"
          />
          <h1 className="w-full text-7xl text-primary font-normal sm:text-3xl sm:mt-0 sm:font-extrabold">
            Contact Us
          </h1>
          <h1 className="w-full text-2xl text-primary font-thin mt-4 sm:text-sm sm:w-full sm:mt-4">
            Get in touch, with easy ways to reach
          </h1>
          <div className="w-3/4 text-xs h-full mt-4 flex flex-col items-center self-start  lg:self-center z-1 relative">
            <div className=" container mx-auto mt-4">
              <input
                id="text-input"
                type="text"
                className="border border-white rounded-2xl mb-5 px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500 placeholder-green-500 placeholder-opacity-90"
                placeholder="Name"
              />
              <input
                id="text-input"
                type="text"
                className="border border-white rounded-2xl mb-5 px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500 placeholder-green-500 placeholder-opacity-90"
                placeholder="Email"
              />
              <input
                id="text-input"
                type="text"
                className="border border-white rounded-2xl h-32 px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500 placeholder-green-500 placeholder-opacity-90"
                placeholder="Query"
              />

              <div className="flex w-full items-center justify-between mt-8 ">
                <h1 className="w-2/3 text-sm text-primary font-normal sm:text-left sm:w-1/2 xs:text-xs">
                  You will recieve a response within 48 hours from our team.
                </h1>
                <div
                  className={`w- 1/3 flex items-center bg-dark text-light p-1.5 px-6 pt-2 pb-2 
                  rounded-full text-xs font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-2 
                  xs:p-0 xs:px-3 xs:py-2 md:text-sm
                  `}
                  style={{ cursor: "pointer" }}
                >
                  Send Message
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
        </div>

        <div
          onClick={() => {
            const mapLink = "https://maps.app.goo.gl/dhkMPvvWv7nCJ5cEA";
            window.open(mapLink, "_blank");
          }}
          style={{ cursor: "pointer" }}
          className="w-1/2 h-full md:w-full mb-20 sm:w-full "
        >
          <Image
            priority={true}
            width={899}
            height={591}
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            src={smallMap}
            alt="Sahm Nakheel"
            className="w-full h-auto lg:hidden md:inline-block md:w-full hidden sm:block"
          />
          <Image
            priority={true}
            width={899}
            height={591}
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
            src={map}
            alt="Sahm Nakheel"
            className="w-full h-auto lg:hidden  md:w-full md:hidden"
          />
        </div>
      </div>

      <div className="w-full flex items-center justify-around md:flex-col sm:items-start sm:bg-mintyGreen sm:py-6 sm:rounded-3xl">
        <div className="w-full flex items-center justify-center md:justify-start md:px-12 ">
          <Image
            src={vector2}
            width={23}
            height={23}
            alt="phone"
            className="mx-2"
          />
          <h1 className="text-darkGreen text-lg font-normal ms-5 md:text-sm md:mt-3">
            ( +20 ) 011 511 511 26
          </h1>
        </div>
        <div className="w-full flex items-center justify-center md:justify-start md:px-12 ">
          <Image
            src={vector3}
            width={23}
            height={23}
            alt="phone"
            className="mx-2"
          />
          <h1 className="w-full text-darkGreen text-lg font-normal ms-6 md:text-sm md:mt-3">
            35 Al Gahez, Al Hadiqah Al-Dawleyah, Nasr City, Cairo.
          </h1>
        </div>
        <div className="w-full flex items-center justify-center md:justify-start md:px-12">
          <Image
            src={vector4}
            width={23}
            height={23}
            alt="phone"
            className="mx-2"
          />
          <h1 className="text-darkGreen text-lg font-normal ms-5 md:text-sm md:mt-3">
            info@sahmnakheel.com
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
