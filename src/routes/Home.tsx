import { Link } from "react-router-dom"
import { ProjectCard } from "../components/projectCard/projectCard"

export const Home = () => {
    return (
        <>
            <h1>My default page</h1>
            <Link to={`/about`}> about </Link>
            <br />
            <Link to={`/projects`}> projects </Link>
            <ProjectCard />
        </>
    )
}
