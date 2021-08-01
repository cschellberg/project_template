import { render } from '@testing-library/react';
import { Card, Button, Col } from 'react-bootstrap';
import { FaGithub } from "react-icons/fa";


const Portfolio = () => {
    const portfolioProject = [
        { 
            image: '/images/movie-queue.jpg', 
            title: <a href="https://glacial-headland-73425.herokuapp.com/" target="_blank" rel="noreferrer">Movie Queue</a>, 
            description: "short explanation of project",
            github: "https://github.com/mschellberg/my-movie-queue"
        },
        { 
            image: '/images/note-taker.png', 
            title: <a href="https://week-11-note-taker-express.herokuapp.com/notes" target="_blank" rel="noreferrer">Note Taker</a>, 
            description: "short explanation of project",
            github: "https://github.com/mschellberg/note-taker"
        },
        { 
            image: "/images/password-gen.png", 
            title: <a href="https://mschellberg.github.io/passgen/" target="_blank" rel="noreferrer">Password Generator</a>, 
            description: "short explanation of project",
            github: "https://github.com/mschellberg/mschellberg.github.io/tree/master/passgen" 
        },
        { 
            image: "/images/team-profile.png", 
            title: <a href="https://mschellberg.github.io/team-profile-generator/" target="_blank" rel="noreferrer">Team Profile</a>, 
            description: "short explanation of project",
            github: "https://github.com/mschellberg/team-profile-generator" 
        },
        { 
            image: "/images/tic-tac.png", 
            title: <a href="https://tic-tac-toe-project-two.herokuapp.com/" target="_blank" rel="noreferrer">Tic Tac Woah</a>, 
            description: "short explanation of project",
            github: "https://github.com/mschellberg/tic-tac-whoa" 
        },
        { 
            image: "/images/workday.png", 
            title: <a href="https://mschellberg.github.io/workday/" target="_blank" rel="noreferrer">Workday Planner</a>, 
            description: "short explanation of project",
            github: "https://github.com/mschellberg/workday" 
        }
    ];
    const renderCard = ( project, index) => {
        return (
            
            <Card className="portfolio-pics" style={{width: '18rem', height: '15rem'}} >
            <Card.Img variant="top" src={process.env.PUBLIC_URL + project.image}  />
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <div className="github m-0" ><a href={project.github} target="_blank"><FaGithub size="1em"  /></a></div>
            </Card.Body>
          </Card>
        )
    }
    return (
        <div className="portfolio-page" id="portfolio">
            <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Recent Work</h1>
        </div>
        </div>
            <Col className="container-fluid mt-4" id="card-group">
            {portfolioProject.map(renderCard)}
            </Col>
        </div>
    );
}
 
export default Portfolio;
