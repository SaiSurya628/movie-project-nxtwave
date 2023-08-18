import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SingleMoviePage from "./components/SingleMoviePage";
import SearchPage from "./components/SearchPage";

import "./App.css"
const App=()=>{
  return(
    <>
    <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/popular" element={<HomePage/>}/>
      <Route exact path="/single-movie/:id" element={<SingleMoviePage/>}/>
      <Route exact path="/search" element={<SearchPage/>}/>
      
      
      </Routes>
      </BrowserRouter>
    </>
 
   
  )
}
export default App;
