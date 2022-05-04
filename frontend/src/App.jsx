import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Archi/Header";
import Rules from "./pages/Rules";
import Legal from "./pages/Legal";
import Team from "./pages/Team";
import Game from "./pages/Game";
import Victory from "./pages/Victory";
import Footer from "./components/Archi/Footer";
import Styled from "./AppStyle";

function App() {
  return (
    <div className="App">
      <Styled>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/game" element={<Game />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/victory" element={<Victory />} />
          </Routes>
        </main>
        <Footer />
      </Styled>
    </div>
  );
}
export default App;
