import React from "react";
import { Link } from "react-router-dom";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { Banner1, Banner2, BannerBG, BannerBG576, BannerBG768 } from "../utils/helper";

const Banner = () => {
	return (
		<section id="banner" aria-labelledby="Slider">
			<div className="shapes">
				<div className="shape-1"></div>
				<div className="shape-2"></div>
				<div className="shape-3"></div>
				<div className="shape-4"></div>
			</div>

			<Swiper
				loop={true}
				speed={1000}
				effect="fade"
				keyboard={true}
				spaceBetween={80}
				slidesPerView={1}
				grabCursor={true}
				centeredSlides={true}
				modules={[Autoplay, EffectFade]}
				id="swiper-banner"
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
			>
				<SwiperSlide>
					<div className="banner-content">
						<h1>
							We Deliver the <br /> <strong>Quality</strong> SEO Links.
						</h1>
						<p>
							We’re committed to providing customers exceptional service offering employees the best
							training. <br />
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ut numquam culpa
							pariatur similique quaerat?
						</p>
						<button className="btn-gradient">DISCOVER MORE</button>
					</div>
					<picture>
						<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={BannerBG768} />
						<source media="(max-width: 767px)" srcSet={BannerBG576} />
						<img loading="lazy" src={BannerBG} className="slider-bg" alt="slider-bg" />
						<img loading="lazy" src={Banner1} className="slider-img" alt="slider-image" />
					</picture>
				</SwiperSlide>

				<SwiperSlide>
					<div className="banner-content">
						<h1>
							We Deliver the <br /> <strong>Quality</strong> SEO Links.
						</h1>
						<p>
							We’re committed to providing customers exceptional service offering employees the best
							training.
							<br />
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda ut numquam culpa
							pariatur similique quaerat?
						</p>
						<Link to="#!" className="btn-gradient">
							DISCOVER MORE
						</Link>
					</div>
					<picture>
						<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={BannerBG768} />
						<source media="(max-width: 767px)" srcSet={BannerBG576} />
						<img loading="lazy" src={BannerBG} className="slider-bg" alt="slider bg" />
						<img loading="lazy" src={Banner2} className="slider-img" alt="slider image" />
					</picture>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Banner;
