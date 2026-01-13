import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/product';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TopProduct from './components/TopProduct/TopProduct';
import Banner from './components/banner/banner';
import SubScribe from './components/SubScribe/SubScribe';
import Testimonial from './components/Testimonials/Testimonial';
import Footer from './components/Footer/Footer';


const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
      <TopProduct />
      <Banner />
      <SubScribe />
      <Products />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App



