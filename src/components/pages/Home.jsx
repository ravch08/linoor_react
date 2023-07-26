import React from 'react';

import { Banner, Features, Services, Projects, Pricing, Counter, Sponsors, Testimonials, Blog, Newsletter } from "../layout/helper";

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