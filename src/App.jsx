import { useState } from "react";
import "./App.css";

import Shop from "./Components/shop/Shop";
import Header from "./Components/Header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
