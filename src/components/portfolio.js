import Container from "react-bootstrap/Container";
import ProjectList from "./projectlist.js";

const Portfolio = (props) => {
    return (
        <Container>
            <ProjectList projects={props.data.projects} />
        </Container>
    );
};

export default Portfolio;
