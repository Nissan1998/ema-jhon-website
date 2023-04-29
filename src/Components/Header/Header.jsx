import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {
  const { user, LogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    LogOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(user);
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="anchor">
        <Link to="/">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/inventory">Manage Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signUp">SignUp</Link>
        {user && (
          <span className="user-name">
            {user.email}
            <button className="signOut-btn" onClick={handleLogOut}>
              SingOut
            </button>{" "}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
