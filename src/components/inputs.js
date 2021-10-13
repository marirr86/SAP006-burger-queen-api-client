import { useState } from "react";
import see from "../img/see.svg";
import nosee from "../img/nosee.svg";

export function InputLogin({
  inputName,
  dataInput,
  inputOnChange,
  inputValue,
  inputId,
  inputType,
  inputPlaceHolder,
}) {
  const [seePass, setSeePass] = useState(see);
  const [type, setType] = useState(inputType);

  const ShowPass = () => {
    if (seePass === see) {
      setSeePass(nosee);
      setType("text");
    } else {
      setSeePass(see);
      setType("password");
    }
  };

  return (
    <div className="inputLogin">
      <input
        name={inputName}
        data-item={dataInput}
        onChange={inputOnChange}
        value={inputValue}
        id={inputId}
        className="resetInput"
        type={type}
        placeholder={inputPlaceHolder}
      />
      {inputType === "password" && (
        <span className="eye" onClick={ShowPass}>
          <img
            data-item="imgEye"
            id="imgEye"
            alt="Mostrar/esconder senha"
            src={seePass}
          />
        </span>
      )}
    </div>
  );
}

export function InputGlobal({
  inputName,
  dataInput,
  inputOnChange,
  inputValue,
  inputGlobalId,
  inputClassName,
  inputGlobalType,
  inputGlobalPlaceHolder,
  inputContentEdit,
}) {
  return (
    <input
      min="0"
      name={inputName}
      data-item={dataInput}
      onChange={inputOnChange}
      value={inputValue}
      id={inputGlobalId}
      className={inputClassName}
      type={inputGlobalType}
      contentEditable={inputContentEdit}
      placeholder={inputGlobalPlaceHolder}
    />
  );
}
