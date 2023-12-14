import React from "react";
import "./Navbar.css";
import CartButton from "../Cart/CartButton/CartButton";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LogOutButton from "../Authentication/LogOutButton";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";

const Navbar = () => {
  const authctx = useContext(AuthContext);

  return (
    <div className="navbar">
      <NavLink id="websitename" to="/" activeclassname="active">
        ShopCop
      </NavLink>
      <NavLink id="productsPage" to="/ProductsPage" activeclassname="active">
        Products
      </NavLink>
      <NavLink id="about" to="/about" activeclassname="active">
        About
      </NavLink>
      <NavLink id="contact-us" to="/contact-us" activeclassname="active">
        Contact
      </NavLink>

      <div className="sign-up-cart-button-container">
        <CartButton />
        {!authctx.isLoggedIn ? <span>
        <NavLink id="Sign Up" to="/sign-up" activeclassname="active">
          <button className="sign-up-button">Sign Up</button>
        </NavLink>
        </span> : <LogOutButton/>}
      </div>
    </div>
  );
};

export default Navbar;
// import React from "react";
// import "./Navbar.css";
// import CartButton from "../Cart/CartButton/CartButton";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <NavLink
//         exact
//         to="/"
//         activeClassName="active"
//       >
//         ShopCop
//       </NavLink>
//       <NavLink
//         to="/contact"
//         activeClassName="active"
//       >
//         Contact
//       </NavLink>
//       <NavLink
//         to="/about"
//         activeClassName="active"
//       >
//         About
//       </NavLink>
//       <NavLink
//         to="/cart"
//         activeClassName="active"
//       >
//         Cart
//       </NavLink>
//       <CartButton />
//     </div>
//   );
// };

// export default Navbar;
