import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { bannerItems } from "../utils/data";
import { BannerItem } from "../utils/helper";

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
				{bannerItems.map((bannerItem) => (
					<SwiperSlide key={bannerItem.id}>
						<BannerItem
							title1={bannerItem.title1}
							title2={bannerItem.title2}
							title3={bannerItem.title3}
							imgSrc={bannerItem.imgSrc}
							imgSrcBG={bannerItem.imgSrcBG}
							imgSrc576={bannerItem.imgSrc576}
							imgSrc768={bannerItem.imgSrc768}
							description={bannerItem.description}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Banner;
