import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const AfterAuth = ({ setLoggedIn }) => {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    console.log("Logged out");
    navigate("/");
  };

  return (
    <>
      <h1>Logged In 😎</h1>
      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={logout}
          value={"Log out"}
        />
      </div>
    </>
  );
};

export default AfterAuth;
