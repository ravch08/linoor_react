import React from "react";
import { Link } from "react-router-dom";
import { FooterBar, FooterItem, LogoLight, ScrollToTop } from "../utils/helper";

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
						<FooterItem />
					</div>

					<ScrollToTop />
				</div>
			</footer>

			<FooterBar />
		</React.Fragment>
	);
};

export default Footer;
