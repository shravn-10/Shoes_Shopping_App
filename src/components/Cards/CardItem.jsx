import "./CardItem.css";
import "../../App.css";
import { MdOutlineAddShoppingCart } from "react-icons/md";

// Cards
const CardItem = ({ ShoeData, addInCart }) => {
  return (
    <>
      <div className="cardContainer">
        <div className="card">
          {/* card head here */}
          <div className="cardHead">
            <img src={ShoeData.shoeImg} alt="logo" className="cardLogo" />
          </div>
          {/* card body here */}
          <div className="cardBody">
            {/* product description here */}
            <div className="productDesc">
              <span className="productTitle">
                <b>{ShoeData.shoeName}</b>
                <span className="badge">{ShoeData.newItem}</span>
              </span>
              <span className="productCaption">
                {ShoeData.shoeCategory} Collection
              </span>
              <span className="productRating">
                <p>₹{ShoeData.shoePrice}</p>
              </span>
            </div>
            {/* product prop here */}
            <div className="productProperties" id="productProperties">
              <span className="productSize">
                <h4>Size:</h4>
                <ul className="ulSize">
                  <li>
                    <a href="#productProperties">7</a>
                  </li>
                  <li>
                    <a href="#productProperties">8</a>
                  </li>
                  <li>
                    <a href="#productProperties">9</a>
                  </li>
                  <li>
                    <a href="#productProperties" className="active">
                      10
                    </a>
                  </li>
                  <li>
                    <a href="#productProperties">11</a>
                  </li>
                </ul>
              </span>
              <span className="productColor" id="productColor">
                <h4>Colour:</h4>
                <ul className="ulColor">
                  <li>
                    <a href="#productColor" className="orange active"></a>
                  </li>
                  <li>
                    <a href="#productColor" className="green"></a>
                  </li>
                  <li>
                    <a href="#productColor" className="yellow"></a>
                  </li>
                </ul>
              </span>
              <button
                className="CardBuyBtn"
                onClick={() => {
                  addInCart(ShoeData);
                }}
              >
                BUY NOW <MdOutlineAddShoppingCart size={"1.2rem"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardItem;
