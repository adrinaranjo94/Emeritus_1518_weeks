import React from "react";
import { Button } from "./";

const DarkButton = (props) => {
  return (
    <Button style={{ background: "#000", color: "#fff" }}>
      {props.children}
    </Button>
  );
};

export { DarkButton };
