import React, { useContext, useState } from "react";
import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  console.log(signIn);
  const [error, setError] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    signIn(email, password)
      .then((result) => {
        const currentUser = result.user;
        console.log(currentUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="form-container ">
      <h3 className="form-title">Please Login</h3>
      <p>
        <small>{error}</small>
      </p>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required id="" placeholder="Email" />
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
          <p>
            <small>
              Are you New To Ema-jhon?
              <Link to="/signup">Create New Account</Link>
            </small>
          </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
