import "./App.css"
import Activity1 from "./components/Activity1";
import Home1 from "./components/Home1";
import Instruction from "./components/Instruction";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/intro2" element={<Intro2 />} />
          <Route path="/intro3" element={<Intro3 />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/activity1" element={<Activity1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
