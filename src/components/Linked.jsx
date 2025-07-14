import { Link } from "react-router-dom";

function Linked() {
  return (
    <>
      <div id="nav">
        <ul className="nav-links">
          <li className="nav_write">
            <Link to="/">Home</Link>
          </li>
          <li className="nav_write">
            <Link to="/menus">Menu</Link>
          </li>
          <li className="nav_write">
            <Link to="/ourStory">Our Story</Link>
          </li>
            <Link  className="OrderBtn" to="/order">Order now</Link>
        </ul>
      </div>
    </>
  );
}

export default Linked;
