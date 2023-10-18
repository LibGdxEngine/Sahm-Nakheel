import Image from "next/image";
import { useState, useEffect } from "react";
import scrollBtn from "../public/images/svgs/scrollBtn.svg";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={`${
        isVisible ? "block" : "hidden"
      } fixed bottom-8 right-8 z-50 p-3 bg-greenCard bg-opacity-10 text-white rounded-full hover:bg-greenCard transition-all duration-300 ease-in-out cursor-pointer`}
    >
      <Image src={scrollBtn} width={35} height={35} alt="scroll" />
    </div>
  );
};

export default ScrollToTopButton;
