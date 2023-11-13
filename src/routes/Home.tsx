import { Link } from "react-router-dom"
import { ProjectCard } from "../components/projectCard/ProjectCard"
import { ProjectCardContainer } from "../components/projectCardContainer/ProjectCardContainer"

import data from "../static/projectCardSample.json";

export const Home = () => {
    
    return (
        <>
            <h1>My default page</h1>
            <Link to={`/about`}> about </Link>
            <br />
            <Link to={`/projects`}> projects </Link>
            <ProjectCardContainer>
                <ProjectCard projectName={data.projectName} tools={data.tools} description={data.description} />
                <ProjectCard projectName={data.projectName} tools={data.tools} description={data.description} />
            </ProjectCardContainer>
            
        </>
    )
}
