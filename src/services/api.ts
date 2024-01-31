export async function getBannerItems() {
	try {
		const response = await fetch(`http://localhost:3000/bannerItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		throw new Error("Could not fetch Items!");
	}
}

export async function getBlogItems() {
	try {
		const response = await fetch(`http://localhost:3000/blogItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		throw new Error("Could not fetch Items!");
	}
}

export async function getTestimonialItems() {
	try {
		const response = await fetch(`http://localhost:3000/testimonialItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		throw new Error("Could not fetch Items!");
	}
}

export async function getFeatureItems() {
	try {
		const response = await fetch(`http://localhost:3000/featureItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		throw new Error("Could not fetch Items!");
	}
}

export async function getProjectItems() {
	try {
		const response = await fetch(`http://localhost:3000/projectItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		throw new Error("Could not fetch Items!");
	}
}

export async function getFooterItems() {
	try {
		const response = await fetch(`http://localhost:3000/footerItems`);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		throw new Error("Could not fetch Items!");
	}
}
