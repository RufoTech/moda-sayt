import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import {Navigation, Autoplay } from 'swiper/modules';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

import 'swiper/css';

const Feedback:React.FC = () => {
  return (

    
    <div className="feedback">
           <div className="text-faq py-4"><h1 className='text-center roboto-slab'>Feedback Corner</h1></div>

        <div className="container">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        navigation={{
            nextEl: '.custom-next', 
            prevEl: '.custom-prev', 
          }} modules={[Navigation,Autoplay]}
        className="mySwiper"
      >

           <SwiperSlide><div className="faq  py-4">
           <div className="faqs">
           <FaQuoteLeft  className='feedbackimg'/>
            <h3 className='roboto-slab py-3'>Emily Wilson</h3>
            <p>The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!</p>
           </div>
           </div></SwiperSlide>
           <SwiperSlide><div className="faq  py-4">
           <div className="faqs">
           <FaQuoteLeft  className='feedbackimg'/>
            <h3 className='roboto-slab py-3'>Sarah Thompson</h3>
            <p>I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!</p>
           </div>
           </div></SwiperSlide>
           <SwiperSlide><div className="faq  py-4">
           <div className="faqs">
           <FaQuoteLeft  className='feedbackimg'/>
            <h3 className='roboto-slab py-3'>Sarah Thompson</h3>
            <p>I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!</p>
           </div>
           </div></SwiperSlide>
           <SwiperSlide><div className="faq  py-4">
           <div className="faqs">
           <FaQuoteLeft  className='feedbackimg'/>
            <h3 className='roboto-slab py-3'>Olivia Martinez</h3>
            <p>I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!</p>
           </div>
           </div></SwiperSlide>

            
           </Swiper>
           <div className="button-swip d-flex justify-content-center">
            <button className='custom-next right-button'><FaAngleLeft /></button>
            <button className='custom-prev left-button'><FaAngleRight/>
            </button>
           </div>

            </div>
        </div>
        
  )
}

export default Feedback