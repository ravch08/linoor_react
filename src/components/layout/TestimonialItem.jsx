import PropTypes from "prop-types";
import React from "react";

const TestimonialItem = (props) => {
	return (
		<div className="testimonial-item">
			<div className="swiper-author">
				<figure>
					<img loading="lazy" src={props.imgSrc} alt={props.name} />
				</figure>

				<div className="author">
					<h3>{props.name}</h3>
					<small>{props.designation}</small>
				</div>
			</div>

			<svg xmlns="http://www.w3.org/2000/svg" className="quote" width="50" viewBox="0 0 512 512">
				<path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" />
			</svg>

			<blockquote>{props.quote}</blockquote>
		</div>
	);
};

TestimonialItem.prototype = {
	name: PropTypes.string.isRequired,
	quote: PropTypes.string.isRequired,
	imgSrc: PropTypes.string.isRequired,
	designation: PropTypes.string.isRequired,
};

export default TestimonialItem;
