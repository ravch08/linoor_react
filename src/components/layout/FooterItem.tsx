import { Link } from "react-router-dom";
import { footerItems } from "../utils/data";

const FooterItem = () => {
	return footerItems.map((footerItem) => (
		<div className="footer-items" key={footerItem.id}>
			<h2>{footerItem.title}</h2>
			<ul className="ftr-nav-list">
				{footerItem.text.map((item) => (
					<li className="ftr-items" key={item.id}>
						<Link to={footerItem.link} className="ftr-links">
							{item.content}
						</Link>
					</li>
				))}
			</ul>
		</div>
	));
};

export default FooterItem;
