import { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";
import { LogoDark, Sidebar } from "../utils/helper";

const Header = () => {
	const [isSticky, setIsSticky] = useState("");

	const stickyFn = () => {
		const stickyClass = window.scrollY >= 150 ? "sticky" : "";
		setIsSticky(stickyClass);
	};

	useEffect(() => {
		window.addEventListener("scroll", stickyFn);
		return () => window.removeEventListener("scroll", stickyFn);
	});

	const sticky = `${isSticky}`;

	return (
		<header className={sticky}>
			<div className="container-fluid">
				<div className="header-wrapper">
					<div className="navigation">
						<Link to="/" className="nav-brand">
							<img loading="lazy" src={LogoDark} alt="Linoor Logo" />
						</Link>

						<nav aria-labelledby="Primary Navigation">
							<ul className="nav-list">
								<li className="nav-item">
									<NavLink to="/" className="nav-link">
										Home
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/about" className="nav-link">
										About Us
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink to="/services" className="nav-link">
										Services
									</NavLink>
									<ul className="dropdown-menu">
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
								<li className="nav-item">
									<NavLink to="/portfolio" className="nav-link">
										Portfolio
									</NavLink>
									<ul className="dropdown-menu">
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
								<li className="nav-item">
									<NavLink to="/blogs" className="nav-link">
										Blog
									</NavLink>
									<ul className="dropdown-menu">
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
								<li className="nav-item">
									<NavLink to="/contact" className="nav-link">
										Contact
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>

					<div className="menu">
						<Link to="#!" className="search">
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 512 512">
								<path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
							</svg>
						</Link>

						<Sidebar />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
