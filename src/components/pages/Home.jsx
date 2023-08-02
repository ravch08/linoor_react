import React from "react";

import { Banner, Blog, Counter, Features, Newsletter, Pricing, Projects, Services, Sponsors, Testimonials } from "../layout/helper";

const Home = () => {
	return (
		<main>
			<Banner />
			<Features />
			<Services />
			<Projects />
			<Pricing />
			<Counter />
			<Sponsors />
			<Testimonials />
			<Blog />
			<Newsletter />
		</main>
	);
};

export default Home;
