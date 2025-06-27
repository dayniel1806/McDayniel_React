import { Link } from "react-router-dom";

function Linked() {
  return (
    <>
      <div id="nav">
        <ul>
          <li className="nav_write">
            <Link to="/">Home</Link>
          </li>
          <li className="nav_write">
            <Link to="/menus">Menu</Link>
          </li>
          <li className="nav_write">
            <Link to="/popular">Popular</Link>
          </li>
          <li className="nav_write">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="nav_write">
            <Link to="/review">Review</Link>
          </li>
          <li className="nav_write">
            <Link to="/order">Order now</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Linked;
