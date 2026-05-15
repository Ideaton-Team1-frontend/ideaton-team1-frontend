import { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center; 
  justify-content: center; 
  flex-direction: column; 
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100vw;
  background-color: #FFF8F3;
  
  /* 혹시 모를 가로 스크롤 방지 */
  overflow-x: hidden; 
`;

const AppContainer = styled.div`
display: flex;
  flex-direction: column;   /* 요소를 위에서 아래로 쌓음 */
  justify-content: center;  /* 수직 중앙 정렬 */
  align-items: center;      /* 수평 중앙 정렬 */
  min-height: 100vh;        /* 화면 전체 높이 확보 */
  width: 100%;
  background-color: #FFF8F3;
  text-align: center;
`;

// 로고 전용 스타일 컴포넌트 추가
const LogoImage = styled.img`
  margin-top: -70px;
  width: auto;       /* 로고 크기 조절이 필요할 때 활용 */
  height: auto;
`;

const Text = styled.div`
  font-size: 1.4rem;
  line-height: 1.3;
  margin-top: 10px; /* 로고와 텍스트 사이 간격 */
  padding: 0 20px;  /* 양 옆 여백 */
  word-break: keep-all;
  margin-bottom: 20px;
`;


const Header = styled.header`

    margin-top: -20px;
    display: flex;
    width: 100vw;
   justify-content: center;

  padding: 30px 20px 20px;

`;



const HeaderTitle = styled.h1`

  font-size: 2.5rem;

  margin-bottom: 5px;

  span { color: #ff6b6b; }
  span2 { font-size: 4.5rem; }

`;
const StyledStartButton = styled.button`
  background-color: #ff768e; /* 이미지의 부드러운 분홍색 */
  color: white;
  border: none;
  border-radius: 30px;      /* 완전히 둥근 모서리 */
  width: 80%;               /* 화면 너비의 80% (모바일 권장) */
  max-width: 350px;         /* 너무 커지지 않게 제한 */
  height: 55px;             /* 터치하기 적당한 높이 */
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 10px rgba(255, 118, 142, 0.2); /* 은은한 그림자 */
  z-index: 1;

  &:hover {
    background-color: #ff5c7d;
    transform: translateY(-2px); /* 살짝 떠오르는 효과 */
  }

  &:active {
    background-color: #ff4d6e;
    transform: translateY(0);
  }
`;
const Span = styled.span`
  z-index: 1;
  `

const BottomNav = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  
`;

  

function OnBoarding() {
    const navigate = useNavigate();

    return (
        <Box>
            <AppContainer>
                {/* 인라인 스타일 대신 스타일 컴포넌트 사용 */}
                <LogoImage src='../Logo.png' alt="Logo" />
                <Header>
                    <HeaderTitle>
                    <span2>세이쁘띠</span2><br/>
                    <span>SafePetit</span>
                    </HeaderTitle>
                    </Header>
                <Text>
                    영유아 홈 세이프티 가이드 
                    <br />
                    우리 아이를 위한 안전한 공간
                    <br/>
                </Text>
                
                    <StyledStartButton onClick={() => navigate("/kidData")}>
        
                        시작하기
        
                    </StyledStartButton>
                    <br/>
                    <span>
                        다음에 할게요
                    </span>

                    <BottomNav><img src='cloud1.png'/> <img src= 'cloud2.png' /> </BottomNav>
                
            </AppContainer>
        </Box>
    );
}

export default OnBoarding;