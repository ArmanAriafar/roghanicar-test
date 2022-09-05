//! Required
import { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

//! Comps
import Product from "../Product";

//! Comp
const Slider = ({ data }) => {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);

    if (screenWidth > 0) {
        return (
            <Swiper
                direction={screenWidth <= 1023 ? "vertical" : screenWidth >= 1024 && "horizontal"}
                style={{
                    "--swiper-theme-color": "#f97316",
                }}
                slidesPerView={3}
                spaceBetween={20}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                modules={screenWidth >= 1024 ? [Pagination, Autoplay] : [Autoplay]}
                className="min-h-[32.5rem] w-fit !p-0 !px-4 lg:min-h-fit lg:w-full lg:!pt-8 lg:!pb-12"
            >
                {data.map((i, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Product name={i.name} image={i.image} price={i.price} />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        );
    }
};
export default Slider;
