import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Archi/Header";
import Rules from "./pages/Rules";

function App() {
  return (
    <div className="App">
      <p>WESH</p>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </main>
      <Header />
    </div>
  );
}
export default App;
