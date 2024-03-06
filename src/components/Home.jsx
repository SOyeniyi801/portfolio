import Profile from "./Profile";
import { Link } from 'react-router-dom';

function Home () {
    return(
        <div className="container container-home">
            <div>
                <div className="heading">Hi I'm Sammi</div>
                <div>Software Engineer</div>
                <Link to="/contact" className="btn btn-primary">Hire Me</Link>
                <Link to="/projects" className="btn btn-primary">My Projects</Link>
            </div>
            <div>
                <Profile />
            </div>
            
        </div>
        
    )
}

export default Home