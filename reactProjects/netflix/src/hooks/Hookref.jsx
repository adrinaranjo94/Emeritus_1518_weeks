import React, { useRef, useState } from "react";

const HookRef = () => {
  const [value, setValorInput] = useState("");
  const [finalValue, setFinalValor] = useState("");
  //  USE REF
  const inputRef = useRef(null);
  const handleChangeInput = (event) => {
    setValorInput(event.target.value.toUpperCase());
  };

  const handleClickAddValueToInput = () => {
    inputRef.current.value = value;
  };

  const handleClickAddInputValueToFinalValue = () => {
    setFinalValor(inputRef.current.value.toUpperCase());
  };
  return (
    <div>
      <p>Input controlado</p>
      <input onChange={handleChangeInput} value={value} />
      <hr />
      <p>Input no controlado</p>

      <button onClick={handleClickAddValueToInput}>
        Añadir valor al input no controlado
      </button>
      <br />
      <input ref={inputRef} />
      <br />
      <button onClick={handleClickAddInputValueToFinalValue}>
        Convertir a valor final
      </button>
      <p className="dark">Valor final</p>
      <p>{finalValue}</p>
    </div>
  );
};

export { HookRef };
