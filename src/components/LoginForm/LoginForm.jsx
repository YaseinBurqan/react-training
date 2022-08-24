import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, sePassword] = useState("");

  const authContext = useContext(AuthContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    sePassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });

    if (email === "a@a.c" && password === "123") {
      const token = "abc";
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      authContext.setAuth({ token, email });
    } else {
      alert("wrong details");
    }
  };

  useEffect(() => {
    console.log("Email Updated");
  }, [email]);
  useEffect(() => {
    console.log("Password Updated");
  }, [password]);

  return (
    <form>
      <h2>Log in</h2>

      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" value={email} onChange={handleEmail} placeholder="Enter email" />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" value={password} onChange={handlePassword} placeholder="Enter password" />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="customCheck1" />

          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Login
      </button>
      <p className="forgot-password text-right">
        <a href="./LoginForm.jsx" target="_blank">
          Forgot password?
        </a>
      </p>
    </form>
  );
}
