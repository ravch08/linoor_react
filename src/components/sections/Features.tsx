import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";
import { getFeatureItems } from "../../services/api";
import { FeatureItem } from "../utils/helper";

export const featureSchema = z.object({
	id: number().optional(),
	imgSrc: string().url(),
	feature: string().min(5, { message: "Atleast 5 characters are required!" }),
	description: string().min(5, { message: "Atleast 5 characters are required!" }),
});

export type FeatureProps = z.infer<typeof featureSchema>;

const Features = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["featureItems"],
		queryFn: getFeatureItems,
	});

	return (
		<section id="features" aria-labelledby="Features">
			<div className="container">
				<div className="heading text-center">
					<h2>
						Checkout Our <strong>Company</strong> <br /> Features Below
					</h2>
				</div>

				<div className="feature-list">
					{isLoading ? <h2>Loading...</h2> : null}
					{data?.map((featureItem: FeatureProps) => (
						<FeatureItem
							key={featureItem.id}
							imgSrc={featureItem.imgSrc}
							feature={featureItem.feature}
							description={featureItem.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
