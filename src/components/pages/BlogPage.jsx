import React from "react";

import { blogItems } from "../layout/Data";
import { BlogItem } from "../layout/helper";
import Blog from "../sections/Blog";

const BlogPage = () => {
	const blogPageItems = blogItems.map((blogItem) => (
		<BlogItem
			key={blogItem.id}
			name={blogItem.name}
			date={blogItem.date}
			comments={blogItem.comments}
			title={blogItem.title}
			imgSrc={blogItem.imgSrc}
		/>
	));

	return (
		<main>
			<Blog blogs={blogPageItems} />
		</main>
	);
};

export default BlogPage;
