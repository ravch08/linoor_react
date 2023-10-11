import { BannerProps } from "../../types/types";

const BannerItem = (props: BannerProps) => {
	return (
		<div className="banner-item">
			<div className="banner-content">
				<h1>
					<span>{props.title1}</span> <br /> <strong>{props.title2} </strong>
					<span>{props.title3}</span>
				</h1>
				<p>{props.description}</p>
				<button className="btn-gradient">DISCOVER MORE</button>
			</div>
			<picture>
				<source media="(min-width: 768px) and (max-width: 1024px)" srcSet={props.imgSrc768} />
				<source media="(max-width: 767px)" srcSet={props.imgSrc576} />
				<img loading="lazy" src={props.imgSrcBG} className="slider-bg" alt="slider-bg" />
				<img loading="lazy" src={props.imgSrc} className="slider-img" alt="slider-image" />
			</picture>
		</div>
	);
};

export default BannerItem;
