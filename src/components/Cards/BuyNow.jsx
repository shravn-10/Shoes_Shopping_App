import CardItem from "./CardItem";
import "./BuyNow.css";
import ShoeData from "./ShoeData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/logov2.png";

// buyNow section of cards
const BuyNow = ({ addInCart }) => {
  return (
    <>
      <div className="featuredShoes" id="featuredShoes">
        <span className="featuredShoesSpan">
          <img src={logo} alt="" className="logoShoesFeatured" />
          <h1>Featured Shoes</h1>
        </span>
        <section className="buyNowSection">
          {ShoeData.map((product) => (
            <div key={product.id} className="cardItemSection">
              <CardItem ShoeData={product} addInCart={addInCart} />
              <ToastContainer />
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default BuyNow;
