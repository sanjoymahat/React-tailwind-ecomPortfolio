import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";

import pimg from "../../assets/img/g/gf1.webp";
import pimg1 from "../../assets/img/g/gf2.webp";
import pimg2 from "../../assets/img/g/gf4.webp";
import pimg3 from "../../assets/img/g/gf5.webp";
import pimg4 from "../../assets/img/g/gf6.webp";
import pimg5 from "../../assets/img/g/gf7.webp";
import pimg6 from "../../assets/img/m/m1.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductsData = [
  { id: 1, img: pimg, title: "Women Ethnic", color: "Red", rating: 4.5 },
  { id: 2, img: pimg1, title: "Women Ethnic", color: "Red", rating: 4.5 },
  { id: 3, img: pimg2, title: "Women Ethnic", color: "Red", rating: 4.5 },
  { id: 4, img: pimg3, title: "Women Ethnic", color: "Red", rating: 4.5 },
  { id: 5, img: pimg4, title: "Women Ethnic", color: "Red", rating: 4.5 },
  { id: 6, img: pimg5, title: "Women Ethnic", color: "Red", rating: 4.5 },
  { id: 7, img: pimg6, title: "Men Ethnic", color: "Red", rating: 4.5 },
];

const Product = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section data-aos="fade-up"  className="mt-14 mb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div data-aos="fade-up"  className="text-center mb-10 max-w-md mx-auto">
          <p data-aos="fade-up"  className="text-sm text-primary">Top Selling Products</p>
          <h2 data-aos="fade-up"  className="text-3xl font-semibold text-gray-800 dark:text-white">
            Popular Products
          </h2>
          <p data-aos="fade-up"  className="text-xs text-gray-400 mt-1">
            Handpicked styles for you
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {ProductsData.map((item) => (
            <div key={item.id} className="px-2">
              <div className="
                bg-white dark:bg-gray-800
                rounded-xl p-3
                border border-gray-100 dark:border-gray-700
                hover:shadow-lg transition
                cursor-pointer group
              ">
                {/* Image */}
                <div data-aos="fade-up"  className="aspect-[3/4] bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>

                {/* Content */}
                <div data-aos="fade-up"  className="mt-3 space-y-2">
                  <h3 data-aos="fade-up"  className="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      {item.color}
                    </span>

                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400 w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {item.rating}
                      </span>
                    </div>
                  </div>

                  <button data-aos="fade-up"  className="
                    mt-2 w-full
                    text-xs sm:text-sm
                    bg-primary text-white
                    py-1.5 rounded-full
                    hover:bg-secondary transition
                  ">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* View All */}
        <div className="flex justify-center">
          <button className="
            mt-10
            bg-primary text-white
            px-6 py-2 rounded-full
            hover:bg-secondary transition
            mb-4
          ">
            View All Products
          </button>
        </div>

      </div>
    </section>
  );
};

export default Product;
