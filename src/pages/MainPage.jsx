
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 90vh; 
  max-height: 90vh;
  width: 100vw;
  background-color: #fff8f3; 
`;

const AppContainer = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: #fff8f3;
  position: relative;
  padding-bottom: 80px; 
`;

const Text = styled.div`
  font-size: 1rem; 
  line-height: 1.3; 
  margin-bottom: 10px;
  word-break: keep-all; 
`;



const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 20px;
`;

const HeaderTitle = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 5px;
  span {
    color: #ff6b6b;
  }
`;

const Section = styled.section`
  padding: 0 20px 20px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h2 {
    font-size: 1.1rem;
  }
  span {
    font-size: 0.8rem;
    color: #888;
    cursor: pointer;
  }
`;

const BannerCard = styled.div`
  background: white;
  border-radius: 20px;
  border: 2px solid #efe1db;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
`;

const BannerBtn = styled.button`
  background: #f27f8d;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  width: 100%;
  margin-top: 15px;
  cursor: pointer;
`;

const HorizontalScroll = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: auto;
  padding-bottom: 10px;

  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const AnalysisCard = styled.div`
  min-width: 250px;
  height: 140px;
  background: white;
  border-radius: 15px;
  border: 2px solid #efe1db;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const TipCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  border: 2px solid #efe1db;
  min-height: 100px;
`;

const BottomNav = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid #eee;
  border-radius: 20px 20px 0 0;
`;

const NavItem = styled.div`
  font-size: 0.8rem;
  color: #888;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const CameraIcon = styled.div`
  width: 60px;
  height: 60px;
  background: #f27f8d;
  border-radius: 50%;
  margin-top: -40px; 
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  border: 5px solid #fdfaf6;
  cursor: pointer;
`;



function MainPage({ name }) {
  const navigate = useNavigate();

  return (
    <Box>
      <AppContainer>
        {/* 상단 헤더 영역 */}
        <Header>
          <div>
            <HeaderTitle>
              안녕하세요, <span>멋사님{name}</span> 👋
            </HeaderTitle>
            <Text>
              오늘도 우리 아이가 안전하게 지낼 수 있도록
              <br />
              세이프띠가 함께할게요.
            </Text>
          </div>
          <div>
            <span>🔔</span> <span>👤</span>
          </div>
        </Header>

        {/* 체크리스트 배너 영역 */}
        <Section>
          <BannerCard>
            <h3>📋 체크리스트에 아직 해결되지 않은 위험 요소가 있어요!</h3>
            <Text
              style={{ fontSize: "0.8rem", color: "#666", marginTop: "10px" }}
            >
              지금 확인하고 우리 아이 환경을 더 안전하게 관리해요
            </Text>
            <BannerBtn>체크리스트로 이동해서 다시 점검하기 &gt;</BannerBtn>
          </BannerCard>
        </Section>

        {/* 최근 분석 결과 영역 */}
        <Section>
          <SectionHeader>
            <h2>최근 분석 결과</h2>
            <span>더보기</span>
          </SectionHeader>
          <HorizontalScroll>
            <AnalysisCard>분석 카드 1</AnalysisCard>
            <AnalysisCard>분석 카드 2</AnalysisCard>
          </HorizontalScroll>
        </Section>

        {/* 오늘의 안전 팁 영역 */}
        <Section>
          <SectionHeader>
            <h2>오늘의 안전 TIP ↻</h2>
            <span>더보기</span>
          </SectionHeader>
          <TipCard>
            <Text>
              아이의 성장 속도만큼
              <br />
              위험 요소도 빠르게 달라져요.
            </Text>
          </TipCard>
        </Section>

        {/* 하단 네비게이션 바 */}
        <BottomNav>
          <NavItem>
            🏠
            <br />홈
          </NavItem>
          <NavItem>
            📋
            <br />
            체크리스트
          </NavItem>
          <CameraIcon onClick={() => navigate("/ImageChoice")}>
            <img src="./camera_icon.png" alt="" />
          </CameraIcon>
          <NavItem>
            🛡️
            <br />
            세이프티
          </NavItem>
          <NavItem>
            👤
            <br />
            마이페이지
          </NavItem>
        </BottomNav>
      </AppContainer>
    </Box>
  );
}

export default MainPage;
