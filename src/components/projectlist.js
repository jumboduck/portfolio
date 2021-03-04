import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";

const ProjectList = (props) => {
    return (
        <CardColumns>
            {props.projects.map((project) => (
                <Card>
                    <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </CardColumns>
    );
};

export default ProjectList;
