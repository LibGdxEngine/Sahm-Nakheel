import React, {useState, useEffect, useRef} from "react";
import Slider from "react-slick";
import Image from "next/image";
import image1 from "../../../../public/images/ImagePlaceHolder2.png"
import image2 from "../../../../public/images/ImagePlaceHolder3.png"
import image3 from "../../../../public/images/ImagePlaceHolder4.png"
import nextArrow from "../../../../public/images/next_arrow.svg";
import HoveredText from "@/pages/components/utils/HoveredText";

import {useTranslation} from "next-i18next";

function Gallery() {
    const {t, i18n} = useTranslation();
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    function HiddenNextArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={'m-0 p-0'}
                style={{...style, display: "none", background: "red"}}
                onClick={onClick}
            />
        );
    }

    function HiddenPrevArrow(props) {
        const {className, style, onClick} = props;
        return (
            <div
                className={'m-0 p-0'}
                style={{...style, display: "none", background: "green"}}
                onClick={onClick}
            />
        );
    }

    const next = () => {
        sliderRef1.slickNext();
    };
    const previous = () => {
        sliderRef1.slickPrev();
    };

    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'w-full h-fit p-0 m-0',
        nextArrow: <HiddenNextArrow/>,
        prevArrow: <HiddenPrevArrow/>,

    };
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        className: 'w-full h-40',
        nextArrow: <HiddenNextArrow/>,
        prevArrow: <HiddenPrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    className: 'w-full h-28',

                }
            }
        ]
    };

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const ImageWithOverlay = ({src, alt}) => {
        return (
            <div className="relative mx-2" style={{cursor: "pointer"}}>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 blur-sm"></div>
                <Image src={src} alt={alt} className="block w-full h-48 sm:h-28" width={272} height={158}/>
            </div>
        );
    };

    const BigGalleryImage = ({src, alt}) => {
        return <div className={`image-container`}>
            <Image src={src} alt={``} className={`w-[100vw] h-[100vh] object-cover`}/>
        </div>
    }

    const imagesList = [image1, image2, image3, image1, image2, image3]
    return (
        <div className="w-full px-0 flex flex-col items-center justify-center">

            <br id="gallery"/>
            <HoveredText text={`Gallery`} className={`mx-10`}/>
            <div className={`w-full px-0 relative`}>
                <Slider {...settings1} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                    {imagesList.map((image) => {
                        return <div key={image.toString()}>
                            <BigGalleryImage src={image} alt={''}/>
                        </div>
                    })}
                </Slider>
                <div onClick={previous} style={{cursor: "pointer"}}
                     className={`w-10 h-10 rounded-full absolute bg-white top-[50%] left-[10%]
                      text-4xl text-center pt-0.5 pe-0.5 font-thin
                      shadow shadow-green-400 text-lightGreen
                      `}>
                    <Image className={`mb-1 me-0.5 rotate-180`} src={nextArrow} alt={``} width={18} height={18}/>
                </div>
                <div onClick={next} style={{cursor: "pointer"}}
                     className={`w-10 h-10 rounded-full absolute bg-white top-[50%] right-[10%]
                      text-4xl text-center font-thin
                        shadow shadow-green-400 text-lightGreen 
                      `}>
                    <Image className={`mb-0.5 ms-0.5`} src={nextArrow} alt={``} width={18} height={18}/>
                </div>
                <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 -translate-y-1/2
                bg-black bg-opacity-50 p-4 text-white max-w-[80%] text-center md:hidden
              ">
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem ex nostrum officiis provident quis reiciendis, repudiandae suscipit! Accusantium adipisci aspernatur cum, et facilis iure necessitatibus neque quasi qui quos ratione.
                </div>
            </div>

            <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                {...settings2}
            >
                {imagesList.map((image) => {
                    return <div key={image.toString()}>
                        <ImageWithOverlay src={image} alt={``}/>
                    </div>
                })}
            </Slider>
        </div>
    );
}

export default Gallery;
