import Landing from "./pages/Landing";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";

function App() {
  return (
    <NextUIProvider>
      <Landing />
    </NextUIProvider>
  );
}

export default App;
