import { ProjectCardProps } from "./ProjectCardProps"
import { StyledProjectCard } from "./StyledElements"

export const ProjectCard = ({projectName, tools, description}:ProjectCardProps) => {
    return (
        <StyledProjectCard className="project-card-container"> 
            <div>{projectName}</div>
            {tools && <div>Tool A | Tool B | Tool C</div>}
            <div>{description}</div>
        </StyledProjectCard>
    )
}
