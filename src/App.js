import React from "react";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";
import Buttons from "./components/Buttons";
import Greeting from "./components/Greeting";
import LoginControl from "./components/LoginControl/LoginControl";
import NumberList from "./components/NumberList/NumberList";
import SweetAlert from "sweetalert2-react";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <Welcome name="Koua" />
      <Clock />
      <Buttons />
      <Greeting isLoggedIn={true} />
      <LoginControl />
      <NumberList numbers={numbers} />
    </div>
  );
}

export default App;
