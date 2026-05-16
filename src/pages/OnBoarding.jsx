import { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 1. 전체 화면을 모바일 뷰포트에 딱 맞추고 스크롤을 막음
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100dvh; /* dvh를 사용하여 모바일 주소창 이슈 해결 */
  background-color: #FFF8F3;
  margin: 0;
  padding: 0;
  overflow: hidden; 
`;

// 2. 내부 콘텐츠들이 위아래로 예쁘게 분배되도록 flex 구조 변경
const AppContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: space-between; /* 상-중-하 균등 분배 */
  width: 100%;
  height: 100%;
  max-width: 450px; /* 모바일 가로 제한 */
  padding: 40px 20px 0px; /* 하단 구름이 바닥에 붙도록 하단 패딩은 0 */
  box-sizing: border-box;
  text-align: center;
  position: relative;
`;

// 상단 영역 (로고 + 텍스트)을 묶어주는 그룹
const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto; /* 위아래 중앙 배치를 위한 트릭 */
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 440px; /* 로고가 지나치게 커지지 않도록 제한 */
  height: auto;
  margin-top: 30px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const HeaderTitle = styled.h1`
  font-size: 2.3rem;
  margin: 0;
  font-weight: bold;
  color: #333;

  span { color: #EF9898; }
  span2 { 
    font-size: 4.2rem; /* 4.5rem은 너무 커서 살짝 줄였습니다 */
    font-weight: 900;
  }
`;

const Text = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-top: 15px;
  color: #666;
  word-break: keep-all;
`;

// 하단 영역 (버튼 + 링크 + 구름)을 묶어주는 그룹 
const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px; /* 하단으로 밀어내기 */
  gap: 15px; /* 버튼과 '다음에 할게요' 사이 간격 */
  z-index: 2;
`;

const StyledStartButton = styled.button`
  background-color: #ff768e;
  color: white;
  border: none;
  border-radius: 30px;
  width: 85%;
  max-width: 350px;
  height: 40px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 4px 10px rgba(255, 118, 142, 0.2);

  &:hover {
    background-color: #ff5c7d;
  }
`;

const NextLaterLink = styled.span`
  font-size: 1rem;
  color: #888;
  cursor: pointer;
  text-decoration: underline;
  margin-bottom: 20px; /* 구름과의 간격 */
`;

// 구름이 버튼 뒤쪽으로 자연스럽게 깔리도록 수정
const BottomNav = styled.nav`
  width: 100vw;
  max-width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  pointer-events: none; /* 구름 클릭 안되게 막기 */
  
  img {
    width: 45%; /* 화면 크기에 맞춰 구름 크기 유동적 조절 */
    height: auto;
  }
`;

function OnBoarding() {
    const navigate = useNavigate();

    return (
        <Box>
            <AppContainer>
                {/* 상단 텍스트 영역 */}
                <TopContent>
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
                    </Text>
                </TopContent>
                
                {/* 하단 버튼 및 구름 영역 */}
                <BottomContent>
                    <StyledStartButton onClick={() => navigate("/kidData")}>
                        시작하기
                    </StyledStartButton>
                    
                    <NextLaterLink onClick={() => navigate("/home")}>
                        다음에 할게요
                    </NextLaterLink>

                    <BottomNav>
                        <img src='cloud1.png' alt="cloud" /> 
                        <img src='cloud2.png' alt="cloud" /> 
                    </BottomNav>
                </BottomContent>
            </AppContainer>
        </Box>
    );
}

export default OnBoarding;