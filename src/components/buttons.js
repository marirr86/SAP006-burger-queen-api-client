import React from "react";

/*export function ButtonCancel({ btnClassName, btnAction, btnText }) {
  return (
    <button
      id="btnCancel"
      className={btnClassName}
      type="button"
      onClick={btnAction}
    >
      {btnText}
    </button>
  );
}*/

function Button({ btnClassName, text, onClick }) {
  return (
    <button
      className={btnClassName}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button
