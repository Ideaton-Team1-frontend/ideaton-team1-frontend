import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles";
import OnBoarding from "./pages/OnBoarding";
import MainPage from "./pages/MainPage";
import ResultPage from "./pages/ResultPage";
import Camera from "./pages/Camera";
import KidData from "./pages/KidData";
import ImageChoice from "./pages/ImageChoice";
import Testpost from "./pages/Testpost";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResultPage />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/resultPage" element={<ResultPage />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/imagechoice" element={<ImageChoice />} />
          <Route path="/kidData" element={<KidData />} />
          <Route path="/testpost" element={<Testpost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
