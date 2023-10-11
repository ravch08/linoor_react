import { Link } from "react-router-dom";
import { ProjectProps } from "../../types/types";

const ProjectItem = (props: ProjectProps) => {
	return (
		<div className="project-item">
			<figure>
				<img loading="lazy" src={props.imgSrc} alt={props.type} />
			</figure>

			<div className="project-info">
				<h3>{props.type}</h3>
				<small>{props.description}</small>
			</div>

			<Link to="#!" className="btn btn-arrow">
				<svg xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 512 512">
					<path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" />
				</svg>
			</Link>
		</div>
	);
};

export default ProjectItem;