import { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import {
	About,
	BlogPage,
	Contact,
	Footer,
	Header,
	Home,
	Portfolio,
	ServicePage,
} from "./components/utils/helper";

import "./styles/main.css";

const Wrapper = ({ children }) => {
	const location = useLocation();
	useLayoutEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [location.pathname]);

	return children;
};

function App() {
	return (
		<BrowserRouter>
			<Wrapper>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/servicepage" element={<ServicePage />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/blogpage" element={<BlogPage />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</Wrapper>
		</BrowserRouter>
	);
}

export default App;
