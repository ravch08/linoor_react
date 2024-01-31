import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { array, number, string, z } from "zod";
import { getFooterItems } from "../../services/api";

const footerTextSchema = z.object({
	id: number().optional(),
	content: string().min(5, { message: "Atleast 5 characters are required!" }),
});

export const footerSchema = z.object({
	id: number().optional(),
	link: string(),
	title: string(),
	text: array(footerTextSchema),
});

export type FooterTextProps = z.infer<typeof footerTextSchema>;
export type FooterProps = z.infer<typeof footerSchema>;

const FooterItem = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["footerItems"],
		queryFn: getFooterItems,
	});

	return (
		<>
			{isLoading ? <h2>Loading...</h2> : null}
			{data?.map((footerItem: FooterProps) => (
				<div className="footer-items" key={footerItem.id}>
					<h2>{footerItem.title}</h2>
					<ul className="ftr-nav-list">
						{footerItem.text?.map((item: FooterTextProps) => (
							<li className="ftr-items" key={item.id}>
								<Link to={footerItem.link} className="ftr-links">
									{item.content}
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</>
	);
};

export default FooterItem;
