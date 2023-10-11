import { useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
	const [price, setPrice] = useState(false);

	const showPricing = () => setPrice(!price);

	const displayPricing = !price ? "active" : "hide";
	const displayClass = `pricing-monthly ${displayPricing}`;

	const hideClass =
		displayClass === "pricing-monthly active" ? "pricing-yearly hide" : "pricing-yearly active";
	const roundClass =
		displayClass === "pricing-monthly hide" ? "slider-round show-yearly" : "slider-round";

	return (
		<section id="pricing" aria-labelledby="Pricing Plans">
			<div className="container">
				<div className="heading text-center">
					<h2>
						Choose <strong>Pricing Plans</strong> <br /> Which Suits Your Needs{" "}
					</h2>
				</div>

				<ul className="pricing-switch">
					<li>
						<Link to="#!">Monthly</Link>
					</li>
					<li>
						<label className="switch" onClick={showPricing}>
							<span className={roundClass}></span>
						</label>
					</li>
					<li>
						<Link to="#!">Yearly</Link>
					</li>
				</ul>

				<div className="pricing-content">
					<div className={displayClass}>
						<div className="pricing-item">
							<h3>$20.00</h3>
							<span>BASIC PACK</span>
							<hr />
							<ul className="pricing-list">
								<li>Extra features</li>
								<li>Lifetime free support</li>
								<li>Upgrade Options</li>
								<li>Full Access</li>
							</ul>
							<Link to="#!" className="btn-gradient">
								CHOOSE A PLAN
							</Link>
							<p>NO HIDDEN CHARGES</p>
						</div>

						<div className="pricing-item">
							<h3>$30.00</h3>
							<span>MEDIUM PACK</span>
							<hr />
							<ul className="pricing-list">
								<li>Extra features</li>
								<li>Lifetime free support</li>
								<li>Upgrade Options</li>
								<li>Full Access</li>
							</ul>
							<Link to="#!" className="btn-gradient">
								CHOOSE A PLAN
							</Link>
							<p>NO HIDDEN CHARGES</p>
						</div>

						<div className="pricing-item">
							<h3>$40.00</h3>
							<span>PREMIUM PACK</span>
							<hr />
							<ul className="pricing-list">
								<li>Extra features</li>
								<li>Lifetime free support</li>
								<li>Upgrade Options</li>
								<li>Full Access</li>
							</ul>
							<Link to="#!" className="btn-gradient">
								CHOOSE A PLAN
							</Link>
							<p>NO HIDDEN CHARGES</p>
						</div>
					</div>

					<div className={hideClass}>
						<div className="pricing-item">
							<h3>$99.00</h3>
							<span>BASIC PACK</span>
							<hr />
							<ul className="pricing-list">
								<li>Extra features</li>
								<li>Lifetime free support</li>
								<li>Upgrade Options</li>
								<li>Full Access</li>
							</ul>
							<Link to="#!" className="btn-gradient">
								CHOOSE A PLAN
							</Link>
							<p>NO HIDDEN CHARGES</p>
						</div>

						<div className="pricing-item">
							<h3>$199.00</h3>
							<span>MEDIUM PACK</span>
							<hr />
							<ul className="pricing-list">
								<li>Extra features</li>
								<li>Lifetime free support</li>
								<li>Upgrade Options</li>
								<li>Full Access</li>
							</ul>
							<Link to="#!" className="btn-gradient">
								CHOOSE A PLAN
							</Link>
							<p>NO HIDDEN CHARGES</p>
						</div>

						<div className="pricing-item">
							<h3>$299.00</h3>
							<span>PREMIUM PACK</span>
							<hr />
							<ul className="pricing-list">
								<li>Extra features</li>
								<li>Lifetime free support</li>
								<li>Upgrade Options</li>
								<li>Full Access</li>
							</ul>
							<Link to="#!" className="btn-gradient">
								CHOOSE A PLAN
							</Link>
							<p>NO HIDDEN CHARGES</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
