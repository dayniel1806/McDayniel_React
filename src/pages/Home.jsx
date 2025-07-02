import "./Home.css";
import bigBurger from "../assets/drip.png";
import MenuPart from "../components/MenuPart";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Card from "../components/Cards";
import FadeInUp from "../components/FadeInUp";
import '../components/Nav.css'
// import Menus from './Menus';
function Home() {
  return (
    <>
      <FadeInUp>
        <div id="page1_header">
          <h1>Life is better with a Burger</h1>
          <p>
            From the first juicy bite to the last crunchy crumb, our burgers are
            built to brighten your day. Fresh, flavorful, and made to order —
            because life really is better with a burger.
          </p>

          <div id="page1_buttons">
            <button>
              <Link to= "/order">Order Now</Link>
            </button>
            
            <button>
              <Link to="/menus">Main Menu</Link>
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
