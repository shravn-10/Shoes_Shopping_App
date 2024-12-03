import logo from "../assets/logov1.png";
import "./Navbar.css";
import { FaCartPlus, FaSearch } from "react-icons/fa";
// import Toggle from "./Toggle"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

// Navbar Component
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const chnageBg = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", chnageBg);
  });
  return (
    <>
      <nav className={navbar ? "active" : ""}>
        <div className="container">
          <div>
            <img src={logo} alt="" className="logo" />
            <div className="menu">
              <ul>
                <li>
                  <a href="#featuredShoes">New Releases</a>
                </li>
                <li>
                  <a href="#featuredShoes">Features</a>
                </li>
                <li>
                  <a href="#featuredShoes">Men</a>
                </li>
                <li>
                  <a href="#featuredShoes">Women</a>
                </li>
              </ul>
            </div>
            <div>
              <form>
                <div className="search-icon">
                  <FaSearch />
                </div>
                <input type="text" className="search" placeholder="Search..." />
                <button
                  className="nav-btn"
                  onClick={() => {
                    toast.warn("Cart is Empty BUY NOW !", {
                      position: "bottom-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      theme: "colored",
                    });
                  }}
                >
                  <FaCartPlus />
                </button>
              </form>
            </div>
          </div>
          {/* toggle btn for smaller screens */}
          <div className="menu-btn">{/* <FaBars Toggle={Toggle}/> */}</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
