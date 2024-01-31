import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";
import { getTestimonialItems } from "../../services/api";
import { TestimonialItem } from "../utils/helper";

export const testimonialSchema = z.object({
	id: number().optional(),
	imgSrc: string().url(),
	name: string().min(5, { message: "Atleast 5 characters are required!" }),
	designation: string().min(5, { message: "Atleast 5 characters are required!" }),
	quote: string().min(5, { message: "Atleast 5 characters are required!" }),
});

export type TestimonialProps = z.infer<typeof testimonialSchema>;

const Testimonials = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["testimonialItems"],
		queryFn: getTestimonialItems,
	});

	return (
		<section id="testimonials" aria-labelledby="What clients say about us">
			<div className="container-semifluid">
				<div className="heading text-center">
					<h2>
						What our <strong>Clients</strong> <br /> say About the Work
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
					{isLoading ? <h2>Loading...</h2> : null}
					{data?.map((testimonialItem: TestimonialProps) => (
						<SwiperSlide key={testimonialItem.id}>
							<TestimonialItem
								name={testimonialItem.name}
								quote={testimonialItem.quote}
								imgSrc={testimonialItem.imgSrc}
								designation={testimonialItem.designation}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonials;
