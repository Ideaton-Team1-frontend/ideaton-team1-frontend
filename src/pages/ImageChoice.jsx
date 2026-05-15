import React from 'react';
import styled from 'styled-components';

// 전체 배경 (이전에 만든 Box 컴포넌트 활용)
const PageWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #f8f9fa;
`;

// 모바일 고정 컨테이너
const AppContainer = styled.div`
  width: 100%;
  max-width: 400px;
  min-height: 100vh;
  background-color: #ffffff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// 상단 돌아가기 버튼 영역
const TopNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const BackButton = styled.button`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 8px 15px;
  font-size: 0.9rem;
  color: #666;
  cursor: pointer;
`;

// 메인 질문 카드 (핑크 테두리)
const QuestionCard = styled.div`
  background: #ffffff;
  border: 1px solid #ffe3e3;
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

// 장소 선택 버튼 그리드 (2열)
const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  width: 100%;
  max-width: 280px;
`;

const LocationButton = styled.button`
  background: white;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 15px;
  font-size: 1rem;
  color: #444;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.02);
  
  &:active {
    background-color: #fff5f5;
    border-color: #ff8a8a;
  }
`;

const AddButton = styled.button`
  background: none;
  border: none;
  color: #ff8a8a;
  font-size: 0.9rem;
  text-decoration: underline;
  margin-top: 20px;
  cursor: pointer;
`;

// 하단 카메라/갤러리 선택 영역
const BottomActionArea = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-top: 20px;
`;

const ActionCard = styled.div`
  flex: 1;
  background: white;
  border-radius: 20px;
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 4px 10px rgba(0,0,0,0.04);
  cursor: pointer;

  span {
    font-size: 0.9rem;
    color: #555;
    text-align: center;
    line-height: 1.2;
  }
`;

const ActionIcon = styled.div`
  font-size: 2rem;
  color: #ff8a8a;
`;

// --- 컴포넌트 시작 ---

function ImageChoice() {
  return (
    <PageWrapper>
      <AppContainer>
        {/* 상단 네비게이션 */}
        <TopNav>
          <BackButton>돌아가기</BackButton>
        </TopNav>

        {/* 메인 선택 카드 */}
        <QuestionCard>
          <IconWrapper>🏠</IconWrapper>
          <MainTitle>분석할 장소가 어디인가요?</MainTitle>
          
          <LocationGrid>
            <LocationButton>거실</LocationButton>
            <LocationButton>부엌</LocationButton>
            <LocationButton>화장실</LocationButton>
            <LocationButton>방</LocationButton>
            <LocationButton>베란다</LocationButton>
            <LocationButton>현관</LocationButton>
          </LocationGrid>

          <AddButton>추가</AddButton>
        </QuestionCard>

        {/* 하단 버튼 2개 */}
        <BottomActionArea>
          <ActionCard>
            <ActionIcon>📸</ActionIcon>
            <span>카메라로<br/>촬영하기</span>
          </ActionCard>
          <ActionCard>
            <ActionIcon>🖼️</ActionIcon>
            <span>앨범에서<br/>가져오기</span>
          </ActionCard>
        </BottomActionArea>

      </AppContainer>
    </PageWrapper>
  );
}

export default ImageChoice;