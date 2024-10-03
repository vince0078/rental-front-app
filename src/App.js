import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home"
import List from "./pages/list/List";
import Vehicle from "./pages/vehicle/Vehicle";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/vehicles" element={<List/>}/>
        <Route path="/vehicles/:id" element={<Vehicle/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
