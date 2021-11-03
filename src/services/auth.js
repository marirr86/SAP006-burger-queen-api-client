export const LoginWorker = async (workerInfo) => {
  try {
    const response = await fetch("https://lab-api-bq.herokuapp.com/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: workerInfo.emailLogin,
        password: workerInfo.passLogin,
      }),
    });
    const json = await response.json();
    console.log(json)
    const token = json.token;
    const email = json.email;
    const occupation = json.role;
    localStorage.setItem("workerToken", token);
    localStorage.setItem("workerEmail", email);
    localStorage.setItem("workerOccupation", occupation);
    if (token) {
      console.log("TÁ LOGADO");
    }
    return json
  } catch (json) {
    const code = json.code;
    if (code === 400 || code === 403) {
      throw new Error(json.message);
    }
  }
};

export const RegisterWorker = async (workerFile) => {
  try {
    const response = await fetch("https://lab-api-bq.herokuapp.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: workerFile.name,
        email: workerFile.email,
        password: workerFile.password,
        role: workerFile.occupation,
        restaurant: "DaCasa",
      }),
    });
    const json = await response.json();
    const token = json.token;
    const email = json.email;
    localStorage.setItem("workerToken", token);
    localStorage.setItem("workerEmail", email);
    if (token) {
      console.log("Usuário cadastrado com sucesso!");
    }
  } catch (json) {
    const code = json.code;
    if (code === 400 || code === 403) {
      throw new Error(json.message);
    }
  }
};

/*export const isLogged = () => {

    const token = !!localStorage.getItem('token');
    if (token) {
        return true;
    } else {
        return false;
    }
  };*/
  
  
  /*try {
    const response = await fetch("https://lab-api-bq.herokuapp.com/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: loggedWorker.name,
        email: loggedWorker.email,
        role: loggedWorker.occupation,
        restaurant: "DaCasa",
      }),
    });
    const json = await response.json();
    const token = json.token;
    localStorage.getItem("workerToken", token);
    if (token) {
      return true;
    } else {
      return false;
    }
  } catch (json) {
    const code = json.code;
    if (code === 400 || code === 403) {
      throw new Error(json.message);
    }
  }
};

/*import React from "react";
import { Route, Redirect } from "react-router-dom";

export const isAuthenticated = () => {

  const token = !!localStorage.getItem('token');
  if (token) {
      return true;
  } else {
      return false;
  }
};


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/hall", state: { from: props.location } }} />
        )
    )}
    />
);


export default PrivateRoute;*/
