import React from "react";

import { projectItems } from "../layout/Data";
import { ProjectItem } from "../layout/helper";

const Projects = () => {
	const projectItemsList = projectItems.map((projectItem) => (
		<ProjectItem key={projectItem.id} type={projectItem.type} imgSrc={projectItem.imgSrc} description={projectItem.description} />
	));

	return (
		<section id="projects" aria-labelledby="Recent Projects">
			<div className="container">
				<div className="heading text-center">
					<h2>
						Our Recent <strong>Projects</strong> <br /> List Below.
					</h2>
				</div>

				<div className="project-wrapper"> {projectItemsList} </div>
			</div>
		</section>
	);
};

export default Projects;
