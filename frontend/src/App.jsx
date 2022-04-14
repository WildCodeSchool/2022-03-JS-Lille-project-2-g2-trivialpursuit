import { Routes, Route } from "react-router-dom";
import Styled from "./AppStyle";
import Game from "./pages/Game/index";
import Home from "./pages/Home/index";

function App() {
  return (
    <div className="App">
      <Styled>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes>
          {/* <Home /> */}
          {/* <Game /> */}
        </main>
      </Styled>
    </div>
  );
}
export default App;
