import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import  "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2> The page you're looking for doesn't exist! </h2>
            <Link to="/">
                <h3>
                    Take me back <span><AiFillHome /></span>
                </h3>
            </Link>
        </div>
    )
}

export default NotFound;