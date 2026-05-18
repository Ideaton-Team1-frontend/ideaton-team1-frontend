import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const PageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100dvh;
  width: 100vw;
  background-color: #f8f9fa;
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 380px;
  max-height: 100dvh;
  background-color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box; 
`;


const TopNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const BackButton = styled.button`
  background: white;
  border: 2px solid #ffd9de;
  width: 40%;
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 0.9rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.05);

  &:active {
    background-color: #fff5f5;
    border-color: #ff8a8a;
  }
`;


const QuestionCard = styled.div`
  background: #fff8f5;
  border: 2px solid #ffd9de;
  border-radius: 24px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.05);
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`;

const MainTitle = styled.h2`
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 30px;
  font-weight: bold;
`;


const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
  max-width: 280px;
`;


const LocationButton = styled.button`
  background: ${(props) => (props.isActive ? "#F27F8D" : "white")};
  color: ${(props) => (props.isActive ? "white" : "#444")};
  border: 2px solid ${(props) => (props.isActive ? "#F27F8D" : "#FFD9DE")};
  border-radius: 12px;
  padding: 15px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);
  transition: all 0.15s ease-in-out;
  outline: none;
  font-family: inherit;

  &:hover {
    border-color: #ff8a8a;
  }
`;

const AddButton = styled.button`
  width: 70%;
  margin-top: 20px;
  background: white;
  border: 2px solid #ffd9de;
  border-radius: 12px;
  padding: 15px;
  font-size: 0.9rem;
  text-decoration: underline;
  color: #ff8a8a;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.02);

  &:active {
    background-color: #f27f8d;
    border-color: #ff8a8a;
  }
  &:hover {
    border-color: #ff8a8a;
  }
`;

const BottomActionArea = styled.div`
  display: flex;
  gap: 15px;
  height: auto;
  margin-top: 17px;
  background: #fff8f5;
  border: 2px solid #ffd9de;
  border-radius: 24px;
  padding: 20px 20px;
`;

const ActionCard = styled.button`
  flex: 1;
  height: auto; 
  background: white;
  border-radius: 20px;
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 2px solid #ffd9de;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  outline: none;
  font-family: inherit;

  &:active {
    background-color: #f27f8d;
    border-color: #ff8a8a;
  }
  &:hover {
    border-color: #ff8a8a;
  }
`;

const ActionIcon = styled.div`
  font-size: 2rem;
  color: #ff8a8a;
`;


function ImageChoice() {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("거실");
  const locations = ["거실", "부엌", "화장실", "방", "베란다", "현관"];
  


  const fileInputRef = useRef(null);


  const handleFileChange = async (e) => {
    const file = e.target.files[0]; 

   

    if (!file) return; 

    const imageUrl = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(file);
    });

    localStorage.setItem("userLocation", selectedLocation);

    const formData = new FormData();

    formData.append("birthDate", localStorage.getItem("userBirthDate"));

    formData.append("childHeight", localStorage.getItem("userHeight"));

    formData.append("childGender", localStorage.getItem("userGender"));

    formData.append("image", file); 

    try {
      const response = await axios.post(
        "https://api.safetit.site/api/analysis",
        formData
      );

      if (response.status === 200) {
        localStorage.setItem("analysisResult", JSON.stringify(response.data));
        navigate("/resultPage", { state: { imageUrl } });
      }
    } catch (error) {
        console.log("에러 전체:", error);

  if (error.response) {
    console.log("응답 데이터:", error.response.data);
    console.log("응답 상태:", error.response.status);
  } else if (error.request) {
    console.log("요청은 갔는데 응답 없음");
    console.log(error.request);
  } else {
    console.log("axios 설정 문제");
    console.log(error.message);
  }
    }
  };

  return (
    <PageWrapper>
      <AppContainer>
        {/* 상단 네비게이션 */}
        <TopNav>
          <BackButton onClick={() => navigate("/mainpage")}>
            돌아가기
          </BackButton>
        </TopNav>

        {/* 메인 선택 카드 */}
        <QuestionCard>
          <IconWrapper>
            <img src="./house_icon.png" alt="house icon" />
          </IconWrapper>
          <MainTitle>분석할 장소가 어디인가요?</MainTitle>

          <LocationGrid>
            {locations.map((loc) => (
              <LocationButton
                key={loc}
                isActive={selectedLocation === loc}
                onClick={() => setSelectedLocation(loc)}
              >
                {loc}
              </LocationButton>
            ))}
          </LocationGrid>

          <AddButton>추가</AddButton>
        </QuestionCard>
        <input
          type="file"
          accept="image/*" 
          style={{ display: "none" }}
          ref={fileInputRef} 
          onChange={handleFileChange} 
        />

        {/* 하단 버튼 2개 */}
        <BottomActionArea>
          <ActionCard onClick={() => navigate("/camera")}>
            <ActionIcon>📸</ActionIcon>
            <span>
              카메라로
              <br />
              촬영하기
            </span>
          </ActionCard>
          <ActionCard onClick={() => fileInputRef.current.click()}>
            <ActionIcon>🖼️</ActionIcon>
            <span>
              앨범에서
              <br />
              가져오기
            </span>
          </ActionCard>
        </BottomActionArea>
      </AppContainer>
    </PageWrapper>
  );
}

export default ImageChoice;
