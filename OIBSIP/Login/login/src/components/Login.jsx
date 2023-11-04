import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase-config";

import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      props.setLoggedIn(true);
      console.log("Logged In");
      setLoginEmail("");
      setLoginPassword("");
      navigate("/auth");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Login</div>
      </div>

      <br />

      <div className={"inputContainer"}>
        <input
          value={loginEmail}
          placeholder="Enter your email here"
          onChange={(ev) => setLoginEmail(ev.target.value)}
          className={"inputBox"}
        />
      </div>

      <br />

      <div className={"inputContainer"}>
        <input
          value={loginPassword}
          type="password"
          placeholder="Enter your password here"
          onChange={(ev) => setLoginPassword(ev.target.value)}
          className={"inputBox"}
        />
      </div>

      <br />

      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={login}
          value={"Log in"}
        />
      </div>
    </div>
  );
};

export default Login;
