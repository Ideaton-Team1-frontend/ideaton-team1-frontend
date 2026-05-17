import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";

// 화면 전체를 덮는 배경 컨테이너
const BackGround = styled.div`
  display: flex;
  justify-content: flex-start; // 콘텐츠가 길어질 때 위쪽이 잘리지 않도록 수정
  align-items: center;
  flex-direction: column;
  height: 100dvh; /* 화면 전체 높이를 모바일 뷰포트에 딱 맞춤 */
  overflow-y: auto; /* 내용이 넘치면 이 안에서만 스크롤이 생김 */
  width: 100vw;
  background-color: #fff8f3; // 모바일 앱 밖의 배경색 (확인용)
  box-sizing: border-box;
  padding: 40px 0 0px 0; /* 하단 확인 버튼 아래 여유 공간 확보 */
`;
const Box = styled.div`
  width: 90%;
  max-width: 360px;
  background: white;
  border-radius: 20px;
  border: 2px solid #ffd9de;
  padding: 1px 24px;
  box-shadow: 0px 8px 20px rgba(242, 127, 141, 0.04);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 20px;
`;
const BirthBox = styled.div`
  width: 90%;
  background: white;
  border-radius: 20px;
  border: 2px solid #ffd9de;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin-top: 20px;
  padding: 0px 20px 20px 20px;
`;
const StyledInput = styled.input`
  //입력창 스타일
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #ebe4e2;
  background-color: #fafafa;
  padding: 0 16px;
  font-size: 0.95rem;
  color: #4c3f3c;
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: #f27f8d;
    background-color: #fff;
  }
  &::placeholder {
    color: #c0b7b5;
  }
`;
const StyledDate = styled.div`
  //입력창 스타일
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #ebe4e2;
  background-color: white;
  padding: 0 16px;
  font-size: 0.95rem;
  color: #4c3f3c;
  box-sizing: border-box;
  outline: none;
  transition: all 0.2s;

  &:focus {
    border-color: #f27f8d;
    background-color: #fff;
  }
  &::placeholder {
    color: #c0b7b5;
  }
`;

const PinkCircle = styled.div`
  //순서 번호 들어가는 스타일
  border-radius: 50%;
  background-color: #fff0f0;
  color: #f27f8d;
  font-weight: bold;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  flex-shrink: 0;
`;

const GenderButton = ({ gend, gender, setGender }) => {
  const isActive = gender === gend; // 현재 버튼이 선택되었는지 여부

  return (
    <button
      onClick={() => setGender(gend)}
      style={{
        // 💡 가로 공간을 반씩 이쁘게 나눠 갖도록 flex 설정
        flex: 1,
        height: "33px",
        borderRadius: "12px",
        fontSize: "1rem",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxSizing: "border-box",
        outline: "none",
        marginBottom: "20px",

        // 💡 피그마 시안 컬러 매칭 (선택 여부에 따른 스타일 분기)
        border: isActive ? "1px solid #f27f8d" : "1px solid #EBE4E2",
        backgroundColor: isActive ? "#f27f8d" : "#ffffff",
        color: isActive ? "#ffffff" : "#4c3f3c",
      }}
    >
      {gend}
    </button>
  );
};

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
  <div
    style={{
      display: "flex",
      alignItems: "stretch",
      border: "1px solid #ccc",
      borderRadius: "8px",
    }}
  >
    <span>{value || new Date().toLocaleDateString()}</span>
    <div
      style={{ alignSelf: "stretch", width: "1px", backgroundColor: "#4c3f3c" }}
    >
      {" "}
    </div>
    <span onClick={onClick} style={{ marginLeft: "auto", cursor: "pointer" }}>
      📅
    </span>
  </div>
));

const Btn = ({ name, OnClick }) => {
  return <button onClick={OnClick}>{name}</button>;
};

const Process_img = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const StepperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 85%;
  max-width: 320px;
  margin: 30px auto;
`;

const ProgressLine = styled.div`
  position: absolute;
  top: 10px; /* 동그라미 반지름 축에 맞춤 */
  left: 55px; /* 💡 첫 번째 아이템 너비(110px)의 절반인 55px부터 시작 */
  width: calc(
    100% - 110px
  ); /* 💡 양쪽 끝 여백(55px * 2)을 제외한 만큼만 선 길이 설정 */
  height: 3px;
  background: #e0e0e0; /* 기본 비활성화 회색 선 */
  z-index: 1;
`;

const ActiveProgressLine = styled.div`
  position: absolute;
  top: 10px;
  left: 55px; /* 💡 회색 선과 똑같이 55px 지점부터 시작 */
  width: calc(
    100% - 110px
  ); /* 💡 현재 2단계가 활성화이므로 두 번째 동그라미 중심까지 꽉 채움 */
  height: 3px;
  background: #f27f8d; /* 활성화 핑크 선 */
  z-index: 1;
`;
const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 110px; /* 텍스트가 정렬을 깨트리지 않도록 고정 폭 확보 */
`;

const StepCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isActive ? "#f27f8d" : "white")};
  border: 2px solid ${(props) => (props.isActive ? "#f27f8d" : "#E0E0E0")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
`;

const StepLabel = styled.span`
  font-size: 0.8rem;
  color: ${(props) => (props.isActive ? "#4c3f3c" : "#999999")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  white-space: nowrap;
`;

// 💡 [수정] 하단 최종 확인 버튼 피그마화
const StyledConfirmButton = styled.button`
  width: 90%;
  max-width: 360px;
  height: 52px;
  background-color: #f27f8d;
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1.05rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 35px;
  box-shadow: 0px 6px 16px rgba(242, 127, 141, 0.25);
  transition: background-color 0.2s;

  &:hover {
    background-color: #e06c7a;
  }
`;

// 💡 성별 버튼을 가로로 이쁘게 배치하기 위한 묶음 박스
const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  margin-top: 8px;
`;
const ButtonRow_2 = styled.div`
  display: flex;
  width: 80%;
  margin-top: 8px;
  margin-bottom: 8px;
  justify-content: center;
`;

// 텍스트 관련
const HeaderTitle = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 5px;
  span {
    color: #f27f8d;
  }
`;
const Text = styled.div`
  font-size: 1rem; // html 비례 폰트 조정
  line-height: 1.3; // 줄간격
  margin-top: 20px;
  margin-bottom: 10px;
  word-break: keep-all; // 무조건 단어 단위로 줄바꿈
`;
const MiddleHeaderTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 5px;
  span {
    color: #f27f8d;
  }
`;
const Smalltext = styled.div`
  font-size: 1rem;
  margin-bottom: 5px;
  gap: 12px;
`;

export default function KidData() {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [date, setDate] = useState(null);

  const goPhotoPage = () => {
    if (!date || !height || !gender) {
      alert("정보를 모두 입력해주세요.");
      return;
    }

    const formattedDate = date.toISOString().split("T")[0];

    localStorage.setItem("userBirthDate", formattedDate);

    localStorage.setItem("userHeight", height);

    localStorage.setItem("userGender", gender === "남자" ? "남아" : "여아");

    navigate("/mainPage");

    
  };

  return (
    <BackGround>
      {/* 💡 기존 이미지 구역을 코드로 완성한 대칭 스텝 바로 교체 */}
      <StepperContainer>
        <ProgressLine />
        <ActiveProgressLine />

        <StepItem>
          <StepCircle isActive={true} />
          <StepLabel isActive={true}>아이디/ 회원정보</StepLabel>
        </StepItem>

        <StepItem>
          <StepCircle isActive={true} />
          <StepLabel isActive={true}>아이 상세 정보</StepLabel>
        </StepItem>
      </StepperContainer>
      {/* 여기까지 최상단 진행도 바 */}

      <HeaderTitle>
        {" "}
        아이의 <span>정보</span>를 입력해주세요.{" "}
      </HeaderTitle>
      <Text> 정확한 분석을 위해 필요한 정보예요</Text>
      <Box>
        <MiddleHeaderTitle
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <PinkCircle>1</PinkCircle> 아이의<span>기본 정보</span>를 입력해
          주세요.
        </MiddleHeaderTitle>
        <Smalltext> 아이 이름</Smalltext>

        <StyledInput
          type="text"
          placeholder="예 : 김멋사"
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          {" "}
          아이의 <span style={{ color: "#f27f8d" }}>성별</span>을 선택해 주세요.
        </div>
        <ButtonRow>
          <GenderButton gend="남자" gender={gender} setGender={setGender} />
          <GenderButton gend="여자" gender={gender} setGender={setGender} />
        </ButtonRow>
      </Box>
      <BirthBox>
        <MiddleHeaderTitle
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <PinkCircle>2</PinkCircle> 아이의{" "}
          <span style={{ color: "#f27f8d" }}>연령(월령)</span>을 선택해 주세요.
        </MiddleHeaderTitle>
        <Smalltext>생년 월일</Smalltext>
        <ButtonRow
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="yyyy.MM.dd"
            placeholderText="날짜 선택"
            customInput={<CustomInput />}
          />
        </ButtonRow>
      </BirthBox>

      <BirthBox>
        <MiddleHeaderTitle
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <PinkCircle>3</PinkCircle> 아이의{" "}
          <span style={{ color: "#f27f8d" }}>키</span>를 입력해 주세요.
        </MiddleHeaderTitle>
        <StyledInput
          type="text"
          placeholder="75 (cm)"
          onChange={(e) => setHeight(e.target.value)}
        />
      </BirthBox>
      <ButtonRow_2>
        <StyledConfirmButton onClick={() => goPhotoPage()}>
          확인
        </StyledConfirmButton>
      </ButtonRow_2>
    </BackGround>
  );
}
