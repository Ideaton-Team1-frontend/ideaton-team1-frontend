import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/OnBoarding"
import MainPage from "./pages/MainPage"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<OnBoarding/>}/>
        <Route path="/MainPage" element ={<MainPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
