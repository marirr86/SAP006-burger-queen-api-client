import "../css/login.css";
import { useState, useEffect } from "react";
import { useHistory} from "react-router";
//import { link } from "react-router-dom";
import { Navigator } from "../router/navigator";
import { InputLogin } from "../components/inputs";
import { Select, SelectOption } from "../components/select";
import { ButtonConfirm } from "../components/buttons";
import { LoginWorker } from "../services/auth";
import logoCinza from "../img/logo-cinza.png";

export default function Login() {
  const history = useHistory();
  const [emailLogin, setEmailLogin] = useState("");
  const [occupationLogin, setOccupationLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");
  const [workerInfo, setWorkerInfo] = useState({});

  useEffect(() => {
    setWorkerInfo({ emailLogin, occupationLogin, passLogin });
  }, [emailLogin, occupationLogin, passLogin]);

  return (
    <div className="login" data-login="login">
      <main className="mainLogin">
        <img className="logoDaCasa" src={logoCinza} alt="logo - DaCasa" />
        <h2 className="titleLogin"> LOGIN </h2>

        <div className="inputBoxes">
          <Select
            dataSelect="selectLogin"
            selectOnChange={(event) => setOccupationLogin(event.target.value)}
            selectValue={occupationLogin}
            selectClassName="selectLogin"
            selectOptions={
              <>
                <SelectOption
                  disabled
                  selected
                  optionValue="tag"
                  option="selecione o cargo"
                />
                <SelectOption optionValue="waiter" option="Pedidos" />
                <SelectOption optionValue="chef" option="Equipe da cozinha" />
              </>
            }
          />
          <InputLogin
            dataInput="emailLogin"
            inputOnChange={(event) => setEmailLogin(event.target.value)}
            inputValue={emailLogin}
            inputId="inputLoginEmail"
            inputType="email"
            inputPlaceHolder="email@email.com"
          />
          <InputLogin
            dataInput="passLogin"
            inputOnChange={(event) => setPassLogin(event.target.value)}
            inputValue={passLogin}
            inputId="inputLoginPass"
            inputType="password"
            inputPlaceHolder="Digite sua senha"
          />
          <ButtonConfirm
            btnClassName="btnConfirm loginPage"
            btnText="ENTRAR"
            btnAction={() =>
              LoginWorker(workerInfo).then((json) => {
                const role = json.role;
                if (role === "salao") {
                  Navigator(history, "/hall");
                } else if (role === "waiter") {
                  Navigator(history, "/kitchen");
                } else {
                  alert("tente novamente");
                }
              })
            }
          />

          
        </div>
      </main>
    </div>
  );
}
