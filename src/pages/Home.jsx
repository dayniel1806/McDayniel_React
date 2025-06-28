import "./Home.css";
import bigBurger from "../assets/drip.png";
import MenuPart from "../components/MenuPart";
import { Link } from "react-router-dom";
// import Menus from './Menus';
function Home() {
  return (
    <>
      <div id="page1_header">
        <h1>Life is better with a Burger</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nulla
          ratione enim obcaecati placeat, sapiente ex molestias in laborum sed
          at excepturi voluptas aperiam! Nobis et mollitia eaque hic facilis?
        </p>

        <div id="page1_buttons">
          <button>
            <a href="#">Order Now</a>
          </button>
          <button>
            <a href="#">Main Menu</a>
          </button>
        </div>
      </div>
      <div id="page1_picture">
        <img src={bigBurger} alt="" className="bounce" />
      </div>
      <MenuPart />
      <div className="FullMenu_Button">
        <Link to="/menus">
          <button>Our Full Menu</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
