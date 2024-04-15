import Header from "./components/Header";
import Cars from "./pages/Cars";
import Details from "./pages/Details";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/cars" element={<Cars/>}/>
        <Route path = "/details" element={<Details/>}/>
      </Routes>
      
     
   
    </div>
  );
}

export default App;
