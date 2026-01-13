import React from 'react'
import Slider from "react-slick";
import img from "../../assets/img/m/m1.jpg";
import img1 from "../../assets/img/m/m2.jpg";
import img2 from "../../assets/img/m/m7.jpg";
import img3 from "../../assets/img/m/m8.jpg";
import img4 from "../../assets/img/m/m9.jpg";





import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO, Company",
    img: img,
    testimonial: "This is an amazing product! It has significantly improved our workflow and productivity."
  }
  , {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Manager",
    img: img1,
    testimonial: "I highly recommend this service. The team is professional and the results are outstanding."
  },
  {
    id: 3,
    name: "Mike Johnson",
    position: "Developer",
    img: img2,
    testimonial: "A game-changer in our industry. The features and support are top-notch."
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Designer",
    img: img3,
    testimonial: "The user experience is fantastic. It has made my job so much easier and more enjoyable."
  },
  {
    id: 5,
    name: "Ema Davis",
    position: " developer ",
    img: img4,
    testimonial: "The user experience is fantastic. It has made my job so much easier and more enjoyable."


  }
]

const Testimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
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
    <div className="py-12 px-4">
      <div className='container mx-auto'>
        {/* Header Section */}
        <div className="text-center mb-10 max-w-md mx-auto">
          <p data-aos="fade-up" className="text-2xl font-semibold text-primary">What Our Customers Say</p>
          <h2 data-aos="fade-up" className="text-3xl font-semibold text-gray-800 dark:text-white">
            Testimonials
          </h2>
          <p data-aos="fade-up" className="text-2xs text-gray-400 mt-2 gap-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, accusamus rem nulla voluptate, nemo laborum autem possimus provident fugiat veniam beatae nam illum obcaecati consectetur? Iure a, illo harum adipisci, ex hic libero fugit maiores deserunt sunt, aperiam ullam cumque.
          </p>
        </div>
        {/* Testimonial Cards Section */}
        <div>
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div key={data.id} data-aos="fade-up"  className=" gap-4 shadow-lg py-8 px-5 mx-4 rounded-xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:gride-cols-4 place-items-center relative " >
                <div className="bg-primary/30 dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <img src={data.img} alt={data.name} data-aos="fade-up"  className="w-20 h-20 rounded-full mr-4" />
                  </div>
                  <div className='flex felx-col items-center gap-4'>
                    <div data-aos="fade-up"  className='space-y-3'>
                      <p data-aos="fade-up" className="text-sm text-gray-600 dark:text-gray-300 italic">"{data.testimonial}"</p>
                      <h1 data-aos="fade-up" className="font-semibold text-gray-800 dark:text-white">{data.name}</h1>
                      <p data-aos="fade-up"  className="text-xs text-gray-500 dark:text-gray-400">{data.position}</p>

                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-10">,,</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial