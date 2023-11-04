import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const navigate = useNavigate();

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );

      setRegisterEmail("");
      setRegisterPassword("");
      console.log("Registered Successfully");

      navigate("/auth");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div>Register</div>
      </div>

      <br />

      <div className={"inputContainer"}>
        <input
          value={registerEmail}
          placeholder="Enter your email here"
          onChange={(ev) => setRegisterEmail(ev.target.value)}
          className={"inputBox"}
        />
      </div>

      <br />

      <div className={"inputContainer"}>
        <input
          value={registerPassword}
          type="password"
          placeholder="Enter your password here"
          onChange={(ev) => setRegisterPassword(ev.target.value)}
          className={"inputBox"}
        />
      </div>

      <br />

      <div className={"inputContainer"}>
        <input
          className={"inputButton"}
          type="button"
          onClick={register}
          value={"Register"}
        />
      </div>
    </div>
  );
};

export default Register;
