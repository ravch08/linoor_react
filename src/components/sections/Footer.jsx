import React from "react";
import { Link } from "react-router-dom";

import { FooterBar, LogoLight, ScrollToTop } from "../layout/helper";

const Footer = () => {
	return (
		<React.Fragment>
			<footer>
				<div className="container">
					<div className="footer-wrapper">
						<div className="footer-items">
							<Link to="/" className="ftr-logo">
								<img loading="lazy" src={LogoLight} width="150" alt="logo light" />
							</Link>
							<Link to="#!" className="contact-link">
								needhelp@linoor.com
							</Link>
							<Link to="#!" className="contact-link">
								888 999 0000
							</Link>
							<p>
								855 road, Broklyn street <br /> New York 600{" "}
							</p>
						</div>

						<div className="footer-items">
							<h2>Explore</h2>
							<ul className="ftr-nav-list">
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										About Us
									</Link>
								</li>
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										Meet Our Team
									</Link>
								</li>
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										Our Portfolio
									</Link>
								</li>
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										Latest News{" "}
									</Link>
								</li>
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										Contact Us
									</Link>
								</li>
							</ul>
						</div>

						<div className="footer-items">
							<h2>Services</h2>
							<ul className="ftr-nav-list">
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										Modern Desinging
									</Link>
								</li>
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										Marketing Strategy
									</Link>
								</li>
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										UI/UX Desinging
									</Link>
								</li>
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										App Development
									</Link>
								</li>
							</ul>
						</div>

						<div className="footer-items">
							<h2>Useful Links</h2>
							<ul className="ftr-nav-list">
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										Support
									</Link>
								</li>
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										Privacy Policy
									</Link>
								</li>
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										Terms of Use
									</Link>
								</li>
								<li className="ftr-items">
									<Link to="#!" className="ftr-links">
										Help
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<ScrollToTop />
				</div>
			</footer>

			<FooterBar />
		</React.Fragment>
	);
};

export default Footer;
