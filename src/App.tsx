import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import {
	About,
	BlogPage,
	Contact,
	Home,
	Layout,
	Page404,
	Portfolio,
	ServicePage,
} from "./components/utils/helper";
import { bannersLoader } from "./services/loaders";
import "./styles/main.css";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 1000,
		},
	},
});

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<Home />} loader={bannersLoader} />
			<Route path="about" element={<About />} />
			<Route path="services" element={<ServicePage />} />
			<Route path="portfolio" element={<Portfolio />} />
			<Route path="blogs" element={<BlogPage />} />
			<Route path="contact" element={<Contact />} />
			<Route path="*" element={<Page404 />} />
		</Route>
	)
);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;
