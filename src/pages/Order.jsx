import pic1 from "../assets/order.jpg";
import pic2 from "../assets/flex.jpg";
import "./Order.css";
import { Link } from "react-router-dom";
import FadeInUp from "../components/FadeInUp";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
function Order() {
  return (
    <>
        <FadeInUp>
          <img className="orderBanner" src={pic1} alt="" />
          <FadeInUp>
            <div className="banner">
              <span>
                <h2>BURGER PLACES NEAR ME</h2>
                <h3>
                  To order, enter your delivery address <br /> Item availability
                  and pricing is location specific
                </h3>
                <form action="post">
                  <label htmlFor="OrderType">Order Type</label> <br />
                  <select name="OrderType" id="OrderType">
                    <option value="Pickup">Pickup</option>
                    <option value="Delivery" selected>
                      Delivery
                    </option>
                  </select>
                </form>
              </span>
            </div>
          </FadeInUp>
          <div>
            <form className="DeliveryForm" action="post">
              <h2>YOUR DELIVERY ADDRESS</h2>
              <div className="FormPart">
                <label className="FormLabel" htmlFor="Address">
                  Address
                </label>{" "}
                <br />
              </div>
              <div>
                <input
                  className="FormInput"
                  type="text"
                  name="Address"
                  id="Address"
                />
              </div>
              <div className="FormPart">
                <label className="FormLabel" htmlFor="Address">
                  Apartment, suite, etc. (Optional)
                </label>{" "}
                <br />
              </div>
              <div>
                <input
                  className="FormInput"
                  type="text"
                  name="Address"
                  id="Address"
                />
              </div>
              <div className="FormPart">
                <label className="FormLabel" htmlFor="Address">
                  City
                </label>{" "}
                <br />
              </div>
              <div>
                <input
                  className="FormInput"
                  type="text"
                  name="City"
                  id="City"
                />
              </div>
              <div className="FormPart">
                <label className="FormLabel" htmlFor="Address">
                  Postal Code
                </label>{" "}
                <br />
              </div>
              <div>
                <input
                  className="FormInput"
                  type="text"
                  name="PostalCode"
                  id="PostalCode"
                />
              </div>
              <div className="FormPart">
                <label className="FormLabel" htmlFor="Address">
                  Phone Number
                </label>{" "}
                <br />
              </div>
              <div>
                <input
                  className="FormInput"
                  type="number"
                  name="PhoneNumber"
                  id="PhoneNumber"
                />
              </div>

              <input className="FormButton" type="submit" value="START ORDER" />
            </form>
          </div>
          <Footer />
        </FadeInUp>
    </>
  );
}

export default Order;
