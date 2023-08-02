import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Sponsor1 } from "../layout/helper";

const Sponsors = () => {
	return (
		<section id="sponsers" aria-labelledby="Sponsers">
			<div className="container">
				<Swiper
					loop={true}
					speed={1000}
					keyboard={true}
					spaceBetween={80}
					grabCursor={true}
					slidesPerView={5}
					modules={[Autoplay]}
					centeredSlides={false}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
				>
					<SwiperSlide>
						<img loading="lazy" src={Sponsor1} width="120" alt="envato" />
					</SwiperSlide>
					<SwiperSlide>
						<img loading="lazy" src={Sponsor1} width="120" alt="envato" />
					</SwiperSlide>
					<SwiperSlide>
						<img loading="lazy" src={Sponsor1} width="120" alt="envato" />
					</SwiperSlide>
					<SwiperSlide>
						<img loading="lazy" src={Sponsor1} width="120" alt="envato" />
					</SwiperSlide>
					<SwiperSlide>
						<img loading="lazy" src={Sponsor1} width="120" alt="envato" />
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Sponsors;
