import "./App.css";
import React, { useContext } from "react";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";
import { AuthProvider, AuthContext } from "./components/Context/AuthContext/AuthContext";

function App() {
  const authContext = useContext(AuthContext);

  return (
    <>
      <div className="App">
        <Header />
        {authContext.auth.email ? "welcome" : <LoginForm />}
      </div>
    </>
  );
}

function AppWithAuth() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default AppWithAuth;
