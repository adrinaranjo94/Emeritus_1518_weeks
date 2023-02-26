import {
  Button,
  DarkButton,
  LightButton,
  ShapeButton,
} from "./components/Button";

import { Content } from "./Content";
import HookState from "./hooks";

const App = () => {
  return (
    <div>
      Hola React
      <Button>Hola a todos</Button>
      <DarkButton>Hola a todos</DarkButton>
      <LightButton>Hola a todos</LightButton>
      <ShapeButton>Hola a todos shape</ShapeButton>
      <br />
      <hr />
      <HookState />
    </div>
  );
};

export { App };
