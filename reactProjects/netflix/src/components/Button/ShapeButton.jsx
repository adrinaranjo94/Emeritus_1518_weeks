import React from "react";
import { Button } from "./";

const ShapeButton = (props) => {
  return (
    <Button style={{ borderRadius: "0 !important" }}>{props.children}</Button>
  );
};

export { ShapeButton };
