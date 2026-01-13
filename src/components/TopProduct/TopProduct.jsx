import React, { useEffect } from "react";
import { FaStar } from "react-icons/fa6";

import pimg from "../../assets/img/m/m11.png";
import pimg1 from "../../assets/img/m/m12.png";
import pimg2 from "../../assets/img/m/m14.png";
import pimg3 from "../../assets/img/m/m15.png";

import AOS from "aos";
import "aos/dist/aos.css";

const ProductsData = [
  { id: 1, img: pimg, title: "Women Ethnic", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 2, img: pimg1, title: "Women Ethnic", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 3, img: pimg2, title: "Women Ethnic", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { id: 4, img: pimg3, title: "Women Ethnic", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
];

const TopProduct = () => {

  // ✅ AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section className="relative py-24 bg-gray-50 dark:bg-gray-900 overflow-x-hidden">

      {/* TOP DIVIDER */}
      <div className="absolute top-0 left-0 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
      </div>

      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-left mb-20">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl font-bold text-gray-800 dark:text-white"
          >
            Popular Products
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xs text-gray-400 mt-1"
          >
            Handpicked styles for you
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center ">
          {ProductsData.map((data, index) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group top-0 max-w-[400px] shadow-lg w-full rounded-2xl bg-white dark:bg-gray-600 shadow-lg hover:bg-black/80 dark:hover:bg-primary hover:text-white duration-300 overflow-hidden cursor-pointer z-2"
            >
              {/* Image */}
              <div className="h-[200px] flex items-center justify-center bg-gray-50 dark:bg-gray-700">
                <img
                  src={data.img}
                  alt={data.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-110 duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center space-y-2">
                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="w-4 h-4 text-yellow-400 group-hover:text-black/90 "
                    />
                  ))}
                </div>

                <h3 className="text-lg font-semibold truncate">
                  {data.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-300 line-clamp-2">
                  {data.description}
                </p>

                <div className="pt-4 flex justify-center">
                  <button className="bg-primary text-white text-sm px-6 py-2 rounded-full hover:scale-105 duration-300 group-hover:bg-white group-hover:text-primary">
                    Order Now
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* BOTTOM DIVIDER */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
      </div>

    </section>
  );
};

export default TopProduct;
