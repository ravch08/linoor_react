import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";

import { getBannerItems } from "../../services/api";
import { BannerItem } from "../utils/helper";

export const bannerSchema = z.object({
	id: number().optional(),
	title1: string().min(5, { message: "Atleast 5 characters are required!" }),
	title2: string().min(5, { message: "Atleast 5 characters are required!" }),
	title3: string().min(5, { message: "Atleast 5 characters are required!" }),
	imgSrc: string().url(),
	imgSrcBG: string().url(),
	imgSrc576: string().url(),
	imgSrc768: string().url(),
	description: string().min(5, { message: "Atleast 5 characters are required!" }),
});

export type BannerProps = z.infer<typeof bannerSchema>;

const Banner = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["bannerItems"],
		queryFn: getBannerItems,
	});

	console.log(data);

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
				{isLoading ? <h2>Loading...</h2> : null}
				{data?.map((bannerItem: BannerProps) => (
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
