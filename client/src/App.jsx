import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import CreateDog from './components/create/CreateDog';
import Landing from './components/ladingPage/Landing'
/// import Loguin from './components/Login/Loguin';



function App() {



  return (
    <div className='App' >
     
         <Routes>
            {/*} <Route path='/' element={< Loguin />} />*/}
            <Route path='/' element={< Landing/>} />
            <Route path='/home' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/create' element={<CreateDog />} />
         </Routes>

      </div>
  )
}

export default App
