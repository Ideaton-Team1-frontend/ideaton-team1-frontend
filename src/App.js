import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles";
import OnBoarding from "./pages/OnBoarding"
import MainPage from "./pages/MainPage"
import ResultPage from "./pages/ResultPage"
import Camera from "./pages/Camera";
import KidData from "./pages/KidData";
import ImageChoice from './pages/ImageChoice';


function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<OnBoarding/>}/>
          <Route path="/MainPage" element ={<MainPage/>}/>
          <Route path="/ResultPage" element ={<ResultPage/>}/>
          <Route path="/camera" element ={<Camera/>}/>
          <Route path="/imagechoice" element ={<ImageChoice/>}/>
         
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
