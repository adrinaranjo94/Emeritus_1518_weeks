import React from "react";
import { Button } from "./";
import ButtonStyles from "./DarkButton.module.css";
import "./DarkButton.css";
const DarkButton = (props) => {
  return <Button classes={[ButtonStyles.dark]}>{props.children}</Button>;
};

export { DarkButton };
