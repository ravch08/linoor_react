import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LogoLight, SocialIcons } from "./helper";

const Sidebar = () => {
	const [isSidebar, setIsSidebar] = useState(false);

	const sidebarClass = isSidebar ? `open sidebar` : `sidebar`;
	const overlayClass = isSidebar ? `open sidebar-overlay` : `sidebar-overlay`;

	const openSidebarHandler = () => {
		setIsSidebar(true);
	};
	const closeSidebarHandler = () => {
		setIsSidebar(false);
	};

	return (
		<React.Fragment>
			<div className="hamburger-menu" onClick={openSidebarHandler}>
				<div className="line"></div>
				<div className="line"></div>
				<div className="line"></div>
			</div>

			<div className={sidebarClass}>
				<div className={overlayClass} onClick={closeSidebarHandler}></div>

				<div className="sidebar-wrapper">
					<div className="d-flex">
						<Link to="/" className="nav-brand">
							<img loading="lazy" src={LogoLight} width="120" alt="Linoor logo light" />
						</Link>
						<Link to="#!" className="btn-close" onClick={closeSidebarHandler}>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 352 512">
								<path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
							</svg>
						</Link>
					</div>

					<nav aria-labelledby="Secondary Navigation">
						<ul className="nav-list">
							<li className="sidebar-item">
								<Link to="/" className="sidebar-link">
									Home
								</Link>
							</li>
							<li className="sidebar-item">
								<Link to="/about" className="sidebar-link">
									About Us
								</Link>
							</li>
							<li className="sidebar-item">
								<Link to="/servicepage" className="sidebar-link">
									Services
									<figure className="dropdown">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 256 512">
											<path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
										</svg>
									</figure>
								</Link>
								<ul className="dropdown-sidemenu">
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Website Development
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											App Development
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											UI/UX Design
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											SEO & Content Writing
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Graphic Design
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Digital Marketing
										</Link>
									</li>
								</ul>
							</li>
							<li className="sidebar-item">
								<Link to="/portfolio" className="sidebar-link">
									Portfolio
									<figure className="dropdown">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 256 512">
											<path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
										</svg>
									</figure>
								</Link>
								<ul className="dropdown-sidemenu">
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Portfolio 1
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Portfolio 2
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Portfolio 3
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Portfolio 4
										</Link>
									</li>
								</ul>
							</li>
							<li className="sidebar-item">
								<Link to="/blogpage" className="sidebar-link">
									Blog
									<figure className="dropdown">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 256 512">
											<path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
										</svg>
									</figure>
								</Link>
								<ul className="dropdown-sidemenu">
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Shop
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Product Detail
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Cart
										</Link>
									</li>
									<li className="dropdown-item">
										<Link to="#!" className="dropdown-link">
											Checkout
										</Link>
									</li>
								</ul>
							</li>
							<li className="sidebar-item">
								<Link to="/contact" className="sidebar-link">
									Contact
								</Link>
							</li>
						</ul>
					</nav>

					<div className="sidebar-info">
						<p>Linoor is a premium Template for Digital Agencies, Start Ups, Small Business and a wide range of other agencies.</p>
						<Link to="#!" className="contact-link">
							needhelp@linoor.com
						</Link>
						<Link to="#!" className="contact-link">
							888 999 0000
						</Link>
					</div>

					<SocialIcons />
				</div>
			</div>
		</React.Fragment>
	);
};

export default Sidebar;
