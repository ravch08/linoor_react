import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { testimonialItems } from "../layout/Data";
import { TestimonialItem } from "../layout/helper";

const Testimonials = () => {
	const testimonialItemsList = testimonialItems.map((testimonialItem) => (
		<SwiperSlide key={testimonialItem.id}>
			<TestimonialItem
				name={testimonialItem.name}
				quote={testimonialItem.quote}
				imgSrc={testimonialItem.imgSrc}
				designation={testimonialItem.designation}
			/>
		</SwiperSlide>
	));

	return (
		<section id="testimonials" aria-labelledby="What clients say about us">
			<div className="container-semifluid">
				<div className="heading text-center">
					<h2>
						What our <strong>Clients</strong> <br /> say About the Work{" "}
					</h2>
				</div>

				<Swiper
					loop={true}
					speed={1500}
					spaceBetween={40}
					grabCursor={true}
					slidesPerView={"auto"}
					centeredSlides={false}
					modules={[Autoplay]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
				>
					{testimonialItemsList}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
