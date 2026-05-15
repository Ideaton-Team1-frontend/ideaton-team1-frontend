import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles";
import OnBoarding from "./pages/OnBoarding"
import MainPage from "./pages/MainPage"
import ResultPage from "./pages/ResultPage"
import KidData from "./pages/KidData";


function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<KidData/>}/>
          <Route path="/mainPage" element ={<MainPage/>}/>
          <Route path="/resultPage" element ={<ResultPage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
