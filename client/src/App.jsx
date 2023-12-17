import { Route, Routes, useLocation } from "react-router-dom";
import PATHROUTES from "./components/Helpers/PathRoutes";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Create from "./components/CREATE/Create";




function App() {
  return (
    <div className="App">

<Routes>
<Route path={PATHROUTES.LANDING} element={<Landing/>}/>
      <Route path={PATHROUTES.HOME} element={<Home/>}/>
      <Route path={PATHROUTES.CREATE} element={<Create/>}/>

</Routes>
    </div>
  );
}

export default App;
