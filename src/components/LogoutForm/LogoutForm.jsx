import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";

export default function LogoutForm() {
  const authContext = useContext(AuthContext);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    authContext.setAuth({});
  }

  return (
    <nav className="navbar navbar-light bg-light mt-2 mb-2">
      <div>
        {authContext.auth.email ? (
          <div>
            {authContext.auth.email}
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          "you need to login"
        )}
      </div>
    </nav>
  );
}
