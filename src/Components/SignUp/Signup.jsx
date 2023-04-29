import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { AuthContext } from "../../Providers/AuthProvider";

const Signup = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    setError("");
    if (password !== confirmPassword) {
      setError("Your Password did not match");
      return;
    } else if (password.length < 6) {
      setError("password must be 6 characters");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        setError(error.message);
      });
    console.log(email, password, confirmPassword);
  };
  return (
    <div>
      <div className="form-container ">
        <h3 className="form-title">Please Sign Up!</h3>
        <p>
          <small className="text-error">{error}</small>
        </p>
        <form onSubmit={handleSignUp}>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              id=""
              placeholder="Email"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              id=""
              placeholder="Password"
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              id=""
              placeholder="Confirm Password"
            />
            <p>
              <small>
                Already have an account?<Link to="/login">Login</Link>
              </small>
            </p>
          </div>
          <input className="btn-submit" type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
