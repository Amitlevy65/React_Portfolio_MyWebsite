import React from 'react'
import './testimonials.css'
// import avatar1 from '../../assets/'
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    // avatar: avatar1,
    name: 'Ron Haviv',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    // avatar: avatar1,
    name: 'Ron Haviv',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      className="container testimonials__container">
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                {/* <img src={avatar}/> */}
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials