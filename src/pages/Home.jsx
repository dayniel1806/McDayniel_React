import "./Home.css";
import bigBurger from "../assets/drip.png";
import MenuPart from "../components/MenuPart";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Card from "../components/Cards";
import FadeInUp from "../components/FadeInUp";

// import Menus from './Menus';
function Home() {
  return (
    <>
      <FadeInUp>
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
        <div id="menu_header">
          <h2>TASTY MENU</h2>
        </div>
        <MenuPart limit={3} />

        <div className="FullMenu_Button">
          <Link to="/menus">
            <button>Our Full Menu</button>
          </Link>
        </div>
        <Footer />
      </FadeInUp>
    </>
  );
}

export default Home;
