import React from "react";
import banner1 from "../../assets/img/m/p8.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck, GiOfficeChair } from "react-icons/gi";

const Banner = () => {
  return (
    <section data-aos="fade-up"  className="bg-gray-50 dark:bg-gray-900 px-4 py-16">
      <div className="container mx-auto">

        <div data-aos="fade-up"  className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* IMAGE CARD */}
          <div className="flex justify-center">
            <div data-aos="fade-up" 
              className="
                group w-full max-w-[280px] h-[380px]
                rounded-3xl bg-primary dark:bg-gray-800
                overflow-hidden transition-all duration-300
                shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] 
              "
            >
              <img
                src={banner1}
                alt="Banner"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div data-aos="fade-up"  className="flex flex-col gap-6">
            <h1 data-aos="fade-up"  className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white leading-tight">
              Winter Sale <span className="text-primary">Up to 50% Off</span>
            </h1>

            <p data-aos="fade-up"  className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
              Discover premium quality products crafted with care. Enjoy stylish
              designs, smooth delivery, and a seamless shopping experience.
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">

              <Feature data-aos="fade-up"   icon={<GrSecure />} text="Quality Products" />
              <Feature data-aos="fade-up"   icon={<IoFastFood />} text="Fast Delivery" />
              <Feature data-aos="fade-up"   icon={<GiFoodTruck />} text="Easy Payments" />
              <Feature data-aos="fade-up"   icon={<GiOfficeChair />} text="Best Offers" />

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const Feature = ({ icon, text }) => (
  <div className="flex items-center gap-4">
    <div
      className="
        h-11 w-11 flex items-center justify-center
        rounded-full bg-primary/10 text-primary
        shadow-sm
      "
    >
      {icon}
    </div>
    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
      {text}
    </p>
  </div>
);

export default Banner;
