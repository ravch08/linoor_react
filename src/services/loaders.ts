import { queryClient } from "../App";
import {
	getBannerItems,
	getBlogItems,
	getFeatureItems,
	getFooterItems,
	getProjectItems,
	getTestimonialItems,
} from "./api";

export function bannersLoader() {
	return queryClient.fetchQuery({
		queryKey: ["bannerItems"],
		queryFn: getBannerItems,
	});
}
export function blogsLoader() {
	return queryClient.fetchQuery({
		queryKey: ["blogItems"],
		queryFn: getBlogItems,
	});
}

export function testimonialsLoader() {
	return queryClient.fetchQuery({
		queryKey: ["testimonialItems"],
		queryFn: getTestimonialItems,
	});
}

export function featuresLoader() {
	return queryClient.fetchQuery({
		queryKey: ["featureItems"],
		queryFn: getFeatureItems,
	});
}

export function projectsLoader() {
	return queryClient.fetchQuery({
		queryKey: ["projectItems"],
		queryFn: getProjectItems,
	});
}

export function footerLoader() {
	return queryClient.fetchQuery({
		queryKey: ["footerItems"],
		queryFn: getFooterItems,
	});
}
