import "../css/register.css";
import { React,  useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Select, SelectOption } from "../components/select";
import { InputGlobal } from "../components/inputs";
import { ButtonCancel, ButtonConfirm } from "../components/buttons";
import { refreshPage } from "../utils/simpleFunc";
import { Navigator } from "../router/navigator";
import { RegisterWorker } from "../services/auth";

export default function Register() {
  const history = useHistory();
  const [occupation, setOccupation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [workerFile, setWorkerFile] = useState({});

  useEffect(() => {
    setWorkerFile({occupation, name, email, password});
  }, [occupation, name, email, password]);

  return (
    <div className="register" data-register="signin">
      <main className="mainRegister">
        <p>Qual sua função?</p>
        <Select
          dataSelect="select"
          selectOnChange={(event) => setOccupation(event.target.value)}
          selectValue={occupation}
          selectClassName="selectRegister"
          selectOptions={
            <>
              <SelectOption
                disabled
                selected
                optionValue="tag"
                option="selecione o cargo"
              />
              <SelectOption optionValue="waiter" option="Atendimento - Pedidos" />
              <SelectOption optionValue="chef" option="Equipe da Cozinha" />
            </>
          }
        />
        <p>nome completo</p>
        <InputGlobal
          dataInput="name"
          inputOnChange={(event) => setName(event.target.value)}
          inputValue={name}
          inputClassName="inputGlobal registerName"
          inputGlobalType="text"
          inputGlobalPlaceHolder="name here"
          inputContentEdit="true"
        />
        <p>email</p>
        <InputGlobal
          dataInput="email"
          inputOnChange={(event) => setEmail(event.target.value)}
          inputValue={email}
          inputClassName="inputGlobal registerEmail"
          inputGlobalType="email"
          inputGlobalPlaceHolder="email@email.com"
          inputContentEdit="true"
        />

        <p>senha</p>
        <InputGlobal
          dataInput="password"
          inputOnChange={(event) => setPassword(event.target.value)}
          inputValue={password}
          inputClassName="inputGlobal registerPassword"
          inputGlobalType="pass"
          inputGlobalPlaceHolder="pass here"
          inputContentEdit="true"
        />

        <div className="endButtons">
          <ButtonCancel
            btnClassName="btnCancel registerExit"
            btnText="SAIR"
            btnAction={() => Navigator(history, "/")}
          />
          <ButtonConfirm
            btnClassName="btnConfirm registerAdd"
            btnText="CONFIRMAR"
            btnAction={() => RegisterWorker(workerFile).then(refreshPage())}
          />
        </div>
      </main>
    </div>
  );
}