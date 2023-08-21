import React from "react";
import { Link } from "react-router-dom";

import { Service1, Service2 } from "../utils/helper";

const Services = () => {
	return (
		<section id="services" aria-labelledby="Services">
			<div className="container">
				<div className="service-wrapper">
					<figure>
						<img loading="lazy" src={Service1} alt="about-eight-1-1" />
					</figure>

					<div className="service-content">
						<h2>
							Powerful <strong>Tools</strong> for <br /> Your Customers
						</h2>
						<h3>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur.
						</h3>

						<ul className="service-list">
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 512 512">
									<path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
								</svg>
								Refresing to get such a personal touch.
							</li>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 512 512">
									<path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
								</svg>
								Duis aute irure dolor in reprehenderit in voluptate.
							</li>
							<li>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 512 512">
									<path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
								</svg>
								Velit esse cillum dolore eu fugiat nulla pariatur.
							</li>
						</ul>
					</div>
				</div>

				<div className="service-wrapper">
					<div className="service-content">
						<h2>
							Control <strong>Everything</strong> from One Solution
						</h2>
						<p>
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. fur hat and fur boa who sat upright, raising a heavy fur muff that
							covered.
						</p>

						<div className="service-progressbar">
							<label htmlFor="file">Marketing</label>
							<progress value="70" max="100">
								{" "}
								70%{" "}
							</progress>

							<label htmlFor="file">SEO Optimization</label>
							<progress value="89" max="100">
								{" "}
								89%{" "}
							</progress>
						</div>

						<Link to="#!" className="btn-gradient">
							GET STARTED
						</Link>
					</div>

					<figure>
						<img loading="lazy" src={Service2} alt="about-nine-1-1" />
					</figure>
				</div>
			</div>
		</section>
	);
};

export default Services;
