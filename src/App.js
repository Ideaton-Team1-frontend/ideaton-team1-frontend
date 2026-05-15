import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles";
import OnBoarding from "./pages/OnBoarding"
import MainPage from "./pages/MainPage"
import ResultPage from "./pages/ResultPage"


function App() {

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<ResultPage/>}/>
          <Route path="/MainPage" element ={<MainPage/>}/>
          <Route path="/ResultPage" element ={<ResultPage/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
