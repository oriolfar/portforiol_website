import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
      <section id="testimonials">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <Swiper
            className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{clickable: true}}
        >
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={AVTR1} alt="Avatar One"/>
            </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__reviwe">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              beatae consequatur cupiditate dolorum enim in laboriosam maxime
              minima possimus quaerat quas, qui quis recusandae, ullam
              voluptates. Accumpore temporibus unde vero
              voluptatum. Distinctio doloremque ex ipsam libero magni nemo nisi
              saepe tempore?
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={AVTR2} alt="Avatar One"/>
            </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__reviwe">
              voluptates. Accusamus fugit odio vitae. Adipisci consequuntur
              culpa dolor ipsa ipsum, labore minus molestiae natus omnis
              praesentium provident saepe, sit, tempore temporibus unde vero
              voluptatum. Distinctio doloremque ex ipsam libero magni nemo nisi
              saepe tempore?
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={AVTR3} alt="Avatar One"/>
            </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__reviwe">
              Tempore temporibus unde vero
              voluptatum. Distinctio doloremque ex ipsam libero magni nemo nisi
              saepe tempore?
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={AVTR4} alt="Avatar One"/>
            </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__reviwe">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              beatae consequatur cupiditate dolorum enim in laboriosam maxime
              minima possimus quaerat quas, qui quis recusandae, ullam
              voluptates. Accusamus fugit odio vitae. Adipisci consequuntur
              culpa dolor ipsa ipsum, labore minus molestiae natus omnis
              praesentium provident saepe, sit.
              saepe tempore?
            </small>
          </SwiperSlide>

        </Swiper>
      </section>
  );
};

export default Testimonials;
