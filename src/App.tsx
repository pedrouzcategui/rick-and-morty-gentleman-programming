import Home from "./pages/Home";
import Character from "./pages/Character";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/character/:characterID" element={<Character/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
