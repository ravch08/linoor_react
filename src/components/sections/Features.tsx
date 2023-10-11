import { featureItems } from "../utils/data";
import { FeatureItem } from "../utils/helper";

const Features = () => {
	const featureItemsList = featureItems.map((featureItem) => (
		<FeatureItem
			key={featureItem.id}
			svgFile={featureItem.svgFile}
			feature={featureItem.feature}
			description={featureItem.description}
		/>
	));

	return (
		<section id="features" aria-labelledby="Features">
			<div className="container">
				<div className="heading text-center">
					<h2>
						Checkout Our <strong>Company</strong> <br /> Features Below
					</h2>
				</div>

				<div className="feature-list"> {featureItemsList} </div>
			</div>
		</section>
	);
};

export default Features;
