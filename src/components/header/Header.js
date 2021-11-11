import { Link } from "react-router-dom";
import './Header.scss'
const Header = () => {
    return (
        <div>
            <nav>
                <h1><Link to="/">React App</Link></h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/posts">Posts</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header