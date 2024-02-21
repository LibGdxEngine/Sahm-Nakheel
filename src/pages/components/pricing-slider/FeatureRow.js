import Image from "next/image";
import bullet from "../../../../public/images/Bullet.svg";
const FeatureRow = ({
  text,
  classes = "",
  imageWidth = 28,
  imageHeight = 18,
}) => {
  return (
    <>
      <div className={`w-full  flex items-center justify-start mb-0`}>
        <Image
          src={bullet}
          width={imageWidth}
          height={imageHeight}
          alt=""
          className="me-3"
        />
        <div className={`text-navyBlue text-xs font-semibold my-2  ${classes}`}>
          {text}
        </div>
      </div>
    </>
  );
};

export default FeatureRow;
