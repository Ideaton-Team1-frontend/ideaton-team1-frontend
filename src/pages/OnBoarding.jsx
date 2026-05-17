
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100dvh; 
  background-color: #fff8f3;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; 
  width: 100%;
  height: 100%;
  max-width: 450px; 
  padding: 40px 20px 0px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto; 
`;

const LogoImage = styled.img`
  width: 100%;
  max-width: 440px; 
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

  span {
    color: #ef9898;
  }
  span2 {
    font-size: 4.2rem; 
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


const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 20px; 
  gap: 15px;
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
  margin-bottom: 20px; 
`;


const BottomNav = styled.nav`
  width: 100vw;
  max-width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  pointer-events: none; 

  img {
    width: 45%;
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
          <LogoImage src="../Logo.png" alt="Logo" />
          <Header>
            <HeaderTitle>
              <span2>세이쁘띠</span2>
              <br />
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
            <img src="cloud1.png" alt="cloud" />
            <img src="cloud2.png" alt="cloud" />
          </BottomNav>
        </BottomContent>
      </AppContainer>
    </Box>
  );
}

export default OnBoarding;
