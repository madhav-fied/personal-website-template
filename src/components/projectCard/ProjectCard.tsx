import { ProjectCardContainer } from "./StyledElements"

export const ProjectCard = () => {


    return (
        <ProjectCardContainer className="project-card-container"> 
            <div>Projet Name</div>
            <div>Tool A | Tool B | Tool C </div>
            <div>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget justo dictum nulla sagittis fermentum nec a diam. Quisque semper, nisl nec efficitur ullamcorper, turpis nibh tempus lacus, vitae viverra massa tellus sed neque. Morbi a lacus eu ipsum venenatis lacinia. Sed eros lacus, rutrum non posuere tempus, semper eu orci.</div>
        </ProjectCardContainer>
    )
}
