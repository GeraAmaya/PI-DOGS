import { Route, Routes, useLocation } from "react-router-dom";
import PATHROUTES from "./components/Helpers/PathRoutes";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import Create from "./components/CREATE/Create";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/Nav/NavBar";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import { useState, } from "react";
import axios from 'axios';




function App() {

   const location = useLocation();
  const [dataDogs, setDataDogs] = useState([])

 const onSearch =(id) => {
    axios(`https://api.thedogapi.com/v1/breeds/${id}`).then(({ data }) => {
       if (data.name) {
          setDataDogs((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este Id!');
       }
    });
 }

 const onClose = (id)=>{
   setDataDogs(
      dataDogs.filter((char) => {
         return char.id !== Number (id)
      })
      )
   
}



  return (
    <div className="App">
     
     
     
     
     {location.pathname !== "/" ? <NavBar onSearch={onSearch}/> : null}

<Routes>
<Route path={PATHROUTES.LANDING} element={<Landing/>}/>
      <Route path={PATHROUTES.HOME} element={ <Cards dataDogs = {dataDogs} onClose={onClose} />}/>
      <Route path={PATHROUTES.CREATE} element={<Create/>}/>
      <Route path={PATHROUTES.DETAIL} element={<Detail/>}/>
      <Route path={PATHROUTES.FAVORITES} element={<Favorites/>}/>

  </Routes>
    </div>
  );
}

export default App;
