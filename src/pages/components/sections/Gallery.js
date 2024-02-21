import React, {useState, useEffect, useRef} from "react";
import Slider from "react-slick";
import Image from "next/image";
import image1 from "../../../../public/images/ImagePlaceHolder2.png"
import image2 from "../../../../public/images/ImagePlaceHolder3.png"
import image3 from "../../../../public/images/ImagePlaceHolder4.png"
import HoveredText from "@/pages/components/utils/HoveredText";
import useWindowSize from '../hooks/useWindowSize';
import {useTranslation} from "next-i18next";

function Gallery() {
    const {t, i18n} = useTranslation();
    const [screenSize, setScreenSize] = useState(null);
    const {width} = useWindowSize();
    let [numberOfSlides, setNumberOfSlides] = useState();
    useEffect(() => {
        const breakpoints = {
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
        };

        // Determine screen size based on window width
        if (width < breakpoints.sm) {
            setScreenSize('sm');
        } else if (width < breakpoints.md) {
            setScreenSize('md');
        } else if (width < breakpoints.lg) {
            setScreenSize('lg');
        } else {
            setScreenSize('xl');
        }
        if (screenSize === 'md' || screenSize === 'sm') {
            setNumberOfSlides(3);
        } else {
            setNumberOfSlides(5);
        }
    }, [width]);


    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: 'w-[85vw] '
    };
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: numberOfSlides,
        slidesToScroll: numberOfSlides,
        className: 'w-[85vw] h-40 '
    };


    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    const ImageWithOverlay = ({src, alt}) => {
        return (
            <div className="relative mx-2" style={{cursor: "pointer"}}>
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40 blur-sm"></div>
                <Image src={src} alt={alt} className="block w-full h-48" width={272} height={158}/>

            </div>
        );
    };

    return (
        <div className="flex flex-col items-center justify-center w-fit">

            <br id="gallery"/>
            <HoveredText text={`Gallery`} className={`mx-10`}/>

            <Slider {...settings1} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>

                <div>
                    <Image src={image2} alt={``} layout={`responsive`} objectFit={'cover'}/>
                </div>
                <div>
                    <Image src={image3} alt={``} layout={`responsive`} objectFit={'cover'}/>
                </div>
                <div>
                    <Image src={image1} alt={``} layout={`responsive`} objectFit={'cover'}/>
                </div>
                <div>
                    <Image src={image2} alt={``} layout={`responsive`} objectFit={'cover'}/>
                </div>
                <div>
                    <Image src={image3} alt={``} layout={`responsive`} objectFit={'cover'}/>
                </div>
                <div>
                    <Image src={image1} alt={``} layout={`responsive`} objectFit={'cover'}/>
                </div>
            </Slider>
            <Slider
                asNavFor={nav1}
                ref={slider => (sliderRef2 = slider)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                {...settings2}
            >
                <div>
                    {ImageWithOverlay(image1, '')}
                </div>
                <div>
                    {ImageWithOverlay(image2, '')}
                </div>
                <div>
                    {ImageWithOverlay(image3, '')}
                </div>
                <div>
                    {ImageWithOverlay(image1, '')}
                </div>
                <div>
                    {ImageWithOverlay(image2, '')}
                </div>
                <div>
                    {ImageWithOverlay(image3, '')}
                </div>


            </Slider>
        </div>
    );
}

export default Gallery;
