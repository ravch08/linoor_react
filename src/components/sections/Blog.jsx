import React from "react";
import { blogItems } from "../utils/data";
import { BlogItem } from "../utils/helper";

const Blog = () => {
	const blogItemsList = [...blogItems.slice(0, 3)];

	const blogItemsList2 = blogItemsList?.map((blogItem) => (
		<BlogItem
			key={blogItem.id}
			name={blogItem.name}
			date={blogItem.date}
			title={blogItem.title}
			imgSrc={blogItem.imgSrc}
			comments={blogItem.comments}
		/>
	));

	return (
		<section id="blog" aria-labelledby="Blog">
			<div className="container">
				<div className="heading text-center">
					<h2>
						Latest News & <strong>Articles</strong> <br /> from the Blog{" "}
					</h2>
				</div>

				<div className="blog-wrapper">{blogItemsList2}</div>
			</div>
		</section>
	);
};

export default Blog;
