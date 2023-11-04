import React from "react";

import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const { loggedIn } = props;

  const navigate = useNavigate();

  const login = () => {
    if (loggedIn) {
      props.setLoggedIn(false);
    } else {
      navigate("/login");
    }
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <div className="mainContainer">
      <div className={"titleContainer"}>
        <div>Welcome!</div>
      </div>

      <h2>Please Login or Register to continue</h2>

      <div className={"buttonContainer"}>
        <input
          value={"Login"}
          className={"inputButton"}
          type="button"
          onClick={login}
        />

        <input
          value={"Register"}
          className={"inputButton"}
          type="button"
          onClick={register}
        />
      </div>
    </div>
  );
};

export default Home;
