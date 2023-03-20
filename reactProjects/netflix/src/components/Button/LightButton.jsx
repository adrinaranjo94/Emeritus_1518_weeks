import React from "react";
import { Button } from "./";
import ButtonStyles from "./LightButton.module.css";

const LightButton = (props) => {
  return <Button classes={[ButtonStyles.dark]}>{props.children}</Button>;
};

export { LightButton };
