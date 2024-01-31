import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";
import { getBlogItems } from "../../services/api";
import BlogItem from "../layout/BlogItem";

export const blogSchema = z.object({
	id: number().optional(),
	comments: string(),
	imgSrc: string().url(),
	date: string(),
	name: string().min(5, { message: "Atleast 5 characters are required!" }),
	title: string().min(5, { message: "Atleast 5 characters are required!" }),
});

export type BlogsProps = z.infer<typeof blogSchema>;

const Blog = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["blogItems"],
		queryFn: getBlogItems,
	});

	return (
		<section id="blog" aria-labelledby="Blog">
			<div className="container">
				<div className="heading text-center">
					<h2>
						Latest News & <strong>Articles</strong> <br /> from the Blog
					</h2>
				</div>

				<div className="blog-wrapper">
					{isLoading ? <h2>Loading...</h2> : null}
					{data?.slice(0, 3).map((blogItem: BlogsProps) => (
						<BlogItem
							key={blogItem.id}
							name={blogItem.name}
							date={blogItem.date}
							title={blogItem.title}
							imgSrc={blogItem.imgSrc}
							comments={blogItem.comments}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Blog;
