import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";

import { getProjectItems } from "../../services/api";
import { ProjectItem } from "../utils/helper";

export const projectSchema = z.object({
	id: number().optional(),
	imgSrc: string().url(),
	type: string(),
	description: string(),
});

export type ProjectProps = z.infer<typeof projectSchema>;

const Projects = () => {
	const { data, isLoading } = useQuery({
		queryKey: ["projectItems"],
		queryFn: getProjectItems,
	});

	return (
		<section id="projects" aria-labelledby="Recent Projects">
			<div className="container">
				<div className="heading text-center">
					<h2>
						Our Recent <strong>Projects</strong> <br /> List Below.
					</h2>
				</div>

				<div className="project-wrapper">
					{isLoading ? <h2>Loading...</h2> : null}
					{data?.map((projectItem: ProjectProps) => (
						<ProjectItem
							key={projectItem.id}
							type={projectItem.type}
							imgSrc={projectItem.imgSrc}
							description={projectItem.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
