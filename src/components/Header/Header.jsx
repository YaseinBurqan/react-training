import React from "react";
import LogoutForm from "../LogoutForm/LogoutForm";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light mt-2 mb-2">
        <div>Header</div>

        <LogoutForm />

        <hr />
      </nav>
    </>
  );
}
