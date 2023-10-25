import Image from "next/image";
import { useState } from "react";
import nextBtn from "../../public/images/svgs/galleryNextBtn.svg";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id="imageContainer" className="relative w-full h-full ">
      <Image
        width={1000}
        height={1000}
        alt=""
        src={images[currentIndex].url}
        alt={images[currentIndex].caption}
        className="h-[100%] w-[100%]"
      />
      <div className="absolute bottom-[20%] left-[10%] w-4/5 bg-black bg-opacity-50 flex justify-between p-4 sm:hidden">
        <p className="text-white text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="absolute bottom-[50%] left-[10%] w-4/5  flex justify-between p-4 sm:w-full sm:left-0 sm:bottom-[30%]">
        <button onClick={goToNext} className="w-auto ">
          <Image
            className=" text-white p-2 rounded-md hover:bg-opacity-75 rotate-180"
            src={nextBtn}
            width={60}
            height={60}
            alt="img"
          />
        </button>

        <button
          onClick={goToPrevious}
          style={{ cursor: "pointer" }}
          className="w-auto"
        >
          <Image
            className=" text-white p-2 rounded-md hover:bg-opacity-75"
            src={nextBtn}
            width={60}
            height={60}
            alt="img"
          />
        </button>
      </div>

      <div className="absolute bottom-[-30%] left-0 w-full flex justify-center space-x-2 p-4 lg:hidden">
        {images.map((image, index) => (
          <Image
            width={1000}
            height={1000}
            key={index}
            src={image.url}
            alt={image.caption}
            className={`h-40 w-64 border-2 border-white cursor-pointer ${
              index === currentIndex ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  const images = [
    { url: "/images/svgs/imagePlaceHolder-svg.png", caption: "Image 1" },

    {
      url: "/images/svgs/ImagePlaceHolder2.png",
      caption: "Image 2",
    },
    {
      url: "/images/svgs/ImagePlaceHolder3.png",
      caption: "Image 2",
    },
    {
      url: "/images/svgs/ImagePlaceHolder4.png",
      caption: "Image 2",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center mt-36">
      <div className="w-full relative flex items-center justify-center">
        <p className="text-primary font-thin sm:text-3xl sm:mt-0 sm:font-extrabold">
          Gallery
        </p>
        <h1 className="text-8xl font-thin text-primary opacity-5 absolute top-[-150%] sm:hidden">
          Gallery
        </h1>
      </div>
      <Carousel images={images} />
    </div>
  );
};

export default Gallery;
