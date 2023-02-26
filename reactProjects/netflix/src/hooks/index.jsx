import React, { useState } from "react";

const HookState = () => {
  const [value, setValue] = useState(0);

  const handleClick = (numero) => {
    // 5 + 1
    setValue(value + numero);
  };

  return (
    <div>
      Valor del estado: {value}
      <br />
      <button onClick={() => handleClick(-5)}>-5</button>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </div>
  );
};

export default HookState;
