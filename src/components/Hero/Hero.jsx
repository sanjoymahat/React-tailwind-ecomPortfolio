import React from "react";
import imghr from "../../assets/img/imgs9.png";
import imghr1 from "../../assets/img/img5a.png";
import imghr2 from "../../assets/img/sl3.png";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imghrList = [
  {
    id: 1,
    img: imghr,
    timeheader: "NEW COLLECTION 2026",
    title: "Upto 70% off",
    title2: "on all men's wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: imghr1,
    timeheader: "NEW COLLECTION 2026",
    title: "Upto 30% off",
    title2: "on all men's wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: imghr2,
    timeheader: "NEW COLLECTION 2026",
    title: "Upto 50% off",
    title2: "on all men's wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex items-center duration-200 dark:bg-gray-950 dark:text-white mb-4 py-10">

      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-0" />

      {/* hero section */}
      <div className="container mx-auto px-8 sm:px-10 lg:px-12 relative z-10 w-full">
        <Slider {...settings}>
          {imghrList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">

                {/* text content */}
                <div className="flex flex-col justify-center gap-6 pt-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1 mx-auto sm:mx-0 px-5 max-w-xl">
                  <span data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-sm font-semibold tracking-widest uppercase text-primary">
                    {data.timeheader}
                  </span>

                  <h1 data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true" className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {data.title}
                    </span>
                    <br />
                    {data.title2}
                  </h1>

                  <p data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true" className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                    {data.description}
                  </p>

                  <div data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true" className="flex justify-center sm:justify-start gap-4 pt-2">
                    <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 duration-300">
                      Shop Now
                    </button>

                    <button className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white duration-300">
                      View Collection
                    </button>
                  </div>
                </div>

                {/* image content */}
                <div className="order-1 sm:order-2 flex justify-center items-center">
                  <div data-aos="zoom-in" data-aos-once="true" data-aos-duration="500" className="relative z-10">
                    <img src={data.img} alt="Hero" className="w-[300px] h-[300px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto" />

                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
