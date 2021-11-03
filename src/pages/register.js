import "../css/register.css";
import { React,  useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Select, SelectOption } from "../components/select";
import { Input } from "../components/inputs";
import Button from "../components/buttons";
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
        <Input
          dataInput="name"
          inputOnChange={(event) => setName(event.target.value)}
          inputValue={name}
          inputClassName="input registerName"
          inputType="text"
          inputPlaceHolder="name here"
          inputContentEdit="true"
        />
        <p>email</p>
        <Input
          dataInput="email"
          inputOnChange={(event) => setEmail(event.target.value)}
          inputValue={email}
          inputClassName="input registerEmail"
          inputType="email"
          inputPlaceHolder="email@email.com"
          inputContentEdit="true"
        />

        <p>senha</p>
        <Input
          dataInput="password"
          inputOnChange={(event) => setPassword(event.target.value)}
          inputValue={password}
          inputClassName="input registerPassword"
          inputType="pass"
          inputPlaceHolder="pass here"
          inputContentEdit="true"
        />

        <div className="endButtons">
          <Button
            btnClassName="btnCancel registerExit"
            btnText="SAIR"
            btnAction={() => Navigator(history, "/")}
          />
          <Button
            btnClassName="btnConfirm registerAdd"
            btnText="CONFIRMAR"
            btnAction={() => RegisterWorker(workerFile).then(refreshPage())}
          />
        </div>
      </main>
    </div>
  );
}