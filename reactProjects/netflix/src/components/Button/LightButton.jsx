import React from "react";
import { Button } from "./";

const LightButton = (props) => {
  return (
    <Button style={{ background: "#fff", color: "#000" }}>
      {props.children}
    </Button>
  );
};

export { LightButton };
