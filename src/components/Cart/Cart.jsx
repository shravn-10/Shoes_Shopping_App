import "./Cart.css";
import logo from "../assets/logov2.png";
import {
  MdOutlineRemoveShoppingCart,
  MdOutlineAddShoppingCart,
} from "react-icons/md";
import { GiShoppingCart } from "react-icons/gi";
import { toast } from "react-toastify";

const Cart = ({ cartItem, buyNow, removeItem }) => {
  let amount = 0;
  cartItem.forEach((item) => {
    amount = parseFloat(amount) + parseFloat(item.shoePrice);
  });
  return (
    <>
      <section className="cartSection" id="cartSection">
        <span className="cartShoesHead">
          <img src={logo} alt="" className="logoShoes" />
          <h1>Shopping Cart</h1>
        </span>
        <div className="cartBody">
          <div className="cartContainer">
            {/* header section starts here */}
            <div className="headerSection">
              <h3 className="heading">Shopping Cart</h3>
              <img src={logo} alt="logo-cart" className="header-image" />
            </div>
            {/* header section ends here */}

            {/* cart items cards here */}
            {cartItem.map((item) => (
              <div className="cartItems">
                <div className="imageBox">
                  <img src={item.shoeImg} id="cartShoeImg" alt="img" />
                </div>
                <div className="about">
                  <h6>Product: </h6>
                  <h1 className="title">{item.shoeName}</h1>
                  <h6 className="subtitle">{item.shoeCategory}</h6>
                </div>
                <div className="price">
                  <div className="amount"> ₹{item.shoePrice}</div>
                  <button className="remove" onClick={() => removeItem(item)}>
                    Remove Item <MdOutlineRemoveShoppingCart />
                  </button>
                </div>
              </div>
              // cart items cards ends here
            ))}
            <hr />
            {cartItem.length >= 1 ? (
              // Checkout section here
              <div className="checkout">
                <div className="total">
                  <h2 className="totalAmount">Total: ₹{amount}</h2>
                  <button className="button" onClick={buyNow}>
                    Checkout
                  </button>
                </div>
              </div>
            ) : (
              // Checkout section ends here
              <div id="cartEmptyTitle">
                <GiShoppingCart size={"8rem"} />
                <h1>Your Cart is empty!</h1>
                <p>Add items to it now.</p>
                <button
                  className="buyBtn"
                  onClick={() => {
                    toast("🛒 Cart is Empty BUY NOW !", {
                      position: "bottom-right",
                      autoClose: 1500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    });
                  }}
                >
                  BUY NOW <MdOutlineAddShoppingCart size={"1.2rem"} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
