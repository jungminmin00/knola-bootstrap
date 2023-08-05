import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineCloseSquare} from "react-icons/ai"

export default function Header(){
    return(
        <header>
            <div id="header">
                <h1>
                    <Link to="/"><img src="./images/logo.png" alt="knola" /></Link>
                </h1>
                
                <p><GiHamburgerMenu /></p>
            </div>
            <div>
                    <div className="sub">
                        <ul>
                            <li className="sub01">
                                <Link to="wishlist">wishlist</Link>
                            </li>
                            <li className="sub02"><Link to="login">login</Link></li>
                        </ul>
                    </div>
                    <nav>
                        <ul>
                            <li className="nav01"><Link to="brand">brand</Link></li>
                            <li className="store nav02">
                                <Link to="list">store</Link>
                                <ul className="hide">
                                {/* <ul > */}
                                    <li><a href="#">all</a></li>
                                    <li><a href="#">granola</a></li>
                                    <li><a href="#">snack</a></li>
                                </ul>
                            </li>
                            <li className="nav03"><Link to="review">review</Link></li>
                            <li className="nav04"><Link to="event">event</Link></li>
                        </ul>
                    </nav>
                    <p><AiOutlineCloseSquare /></p>
                </div>
        </header>
    );
}