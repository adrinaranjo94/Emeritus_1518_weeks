import {
  Button,
  DarkButton,
  LightButton,
  ShapeButton,
} from "./components/Button";

import { Content } from "./Content";
import HookState from "./hooks";
import { Navbar } from "./Navbar";

import "./App.css";
import { Chat } from "./Chat";
import { HookRef } from "./hooks/Hookref";

const App = () => {
  return (
    <div className="App">
      Hola React
      <Button>Hola a todos</Button>
      <DarkButton>Soy el oscuro</DarkButton>
      <LightButton>Hola a todos</LightButton>
      {/*<ShapeButton>Hola a todos shape</ShapeButton>
      <br />
      <hr />*/}
      {/* <HookState /> */}
      <HookRef />
      {/* <Navbar />
      <Content />
      <Chat /> */}
    </div>
  );
};

export { App };
