import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";



const BackGround = styled.div`
  display: flex;
  justify-content: flex-start; 
  align-items: center;
  flex-direction: column;
  height: 100dvh;          
  overflow-y: auto;      
  width: 100vw;
  background-color: #FFF8F3; 
  box-sizing: border-box;
  padding: 40px 0 0px 0;  
`;
const Box = styled.div`
  width: 90%;
  max-width: 360px;
  background: white;
  border-radius: 20px;
  border: 2px solid #FFD9DE; 
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
  border: 2px solid #FFD9DE;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  margin-top: 20px;
  padding: 0px 20px 20px 20px;
`;
const StyledInput = styled.input` 
  width: 100%;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #EBE4E2;
  background-color: #FAFAFA;
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
    color: #C0B7B5;
  }
`;


const PinkCircle = styled.div`
  border-radius: 50%;
  background-color: #FFF0F0;
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
    const isActive = gender === gend; 

    return (
        <button
            onClick={() => setGender(gend)}
            style={{
                
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

                border: isActive ? "1px solid #f27f8d" : "1px solid #EBE4E2",
                backgroundColor: isActive ? "#f27f8d" : "#ffffff", 
                color: isActive ? "#ffffff" : "#4c3f3c"
            }}
        >
            {gend}
        </button>
    );
};
const DatePickerContainer = styled.div`
  width: 100%;
  
  .react-datepicker-wrapper {
    width: 100%; 
  }
`;

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div 
        onClick={onClick}
        ref={ref}
        style={{ 
            display: "flex", 
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #EFE1DB",
            borderRadius: "12px", 
            height: "48px", 
            padding: "0 16px",
            width: "100%", 
            boxSizing: "border-box",
            cursor: "pointer",
            position: "relative"
        }}>
        
        {/* 날짜 텍스트 (부모가 중앙 정렬이라 딱 가운데에 옴) */}
        <span style={{ color: value ? "#4c3f3c" : "#C0B7B5", fontSize: "0.95rem" }}>
            {value || "날짜 선택"}
        </span> 
        
        {/*  달력 아이콘 구역을 우측에 절대 위치로 고정 (텍스트 정렬에 영향을 주지 않음) */}
        <div style={{ 
            position: "absolute", 
            right: "16px", 
            display: "flex", 
            alignItems: "center" 
        }}>
            <div style={{ width: "2px", height: "40px",backgroundColor: "#EFE1DB", marginRight: "12px" }}> </div>
            <span>📅</span>
        </div>
    </div>
));


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
  top: 10px; 
  left: 55px; 
  width: calc(100% - 110px);
  height: 3px;
  background: #E0E0E0; 
  z-index: 1;
`;

const ActiveProgressLine = styled.div`
  position: absolute;
  top: 10px;
  left: 55px; 
  width: calc(100% - 110px); 
  height: 3px;
  background: #f27f8d; 
  z-index: 1;
`;
const StepItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  width: 110px; 
`;

const StepCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.isActive ? '#f27f8d' : 'white'};
  border: 2px solid ${props => props.isActive ? '#f27f8d' : '#E0E0E0'};
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  margin-bottom: 10px;
`;

const StepLabel = styled.span`
  font-size: 0.8rem;
  color: ${props => props.isActive ? '#4c3f3c' : '#999999'};
  font-weight: ${props => props.isActive ? 'bold' : 'normal'};
  white-space: nowrap;
`;


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



const ButtonRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  margin-top: 8px;
`;
const ButtonRow2 = styled.div`
  display: flex;
  width: 80%;
  margin-top: 8px;
  margin-bottom: 8px;
  justify-content:center;
`;


const HeaderTitle = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 5px;
  span { color: #f27f8d; }
`;
const Text = styled.div`
  font-size: 1rem;
  line-height: 1.3;
  margin-top: 20px;
  margin-bottom: 10px;
  word-break: keep-all; 
`;
const MiddleHeaderTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 5px;
  span { color: #f27f8d; }
`;
const Smalltext = styled.div`
  font-size: 1rem;
  margin-bottom: 5px;
  gap: 12px;
`;


export default function KidData() {
    const navigate = useNavigate();
    const [gender, setGender] = useState("");
    const [, setName] = useState("");
    const [height, setHeight] = useState("");
    const [date, setDate] = useState(null);

    const goPhotoPage = () => {
  if (!date || !height || !gender) {
    alert("정보를 모두 입력해주세요.");
    return;
  }

  const formattedDate =
    date.toISOString().split("T")[0];

  localStorage.setItem(
    "userBirthDate",
    formattedDate
  );

  localStorage.setItem(
    "userHeight",
    height
  );

  localStorage.setItem(
    "userGender",
    gender === "남자"
      ? "남아"
      : "여아"
  );

  navigate("/mainpage");
};

    return (

        <BackGround>
            
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

            <HeaderTitle> 아이의 <span>정보</span>를 입력해주세요. </HeaderTitle>
            <Text> 정확한 분석을 위해 필요한 정보예요</Text>
            <Box> 
                <MiddleHeaderTitle style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                < PinkCircle>1</PinkCircle> 아이의<span>기본 정보</span>를 입력해 주세요.</MiddleHeaderTitle>
                <Smalltext> 아이 이름</Smalltext>
               

                <StyledInput 
                   type="text" 
                   placeholder="예 : 김멋사"
                   onChange={(e) => setName(e.target.value)}
                />
                <div> 아이의 <span style={{ color: "#f27f8d" }}>성별</span>을 선택해 주세요.</div>
                <ButtonRow>
                    <GenderButton gend="남자" gender={gender} setGender={setGender} />
                    <GenderButton gend="여자" gender={gender} setGender={setGender} />
                </ButtonRow>
            </Box>
            <BirthBox>
                <MiddleHeaderTitle style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}> 
                    < PinkCircle>2</PinkCircle> 아이의 <span style={{ color: "#f27f8d" }}>연령(월령)</span>을 선택해 주세요.
                </MiddleHeaderTitle>
                <Smalltext>생년 월일</Smalltext>
                <DatePickerContainer><ButtonRow style={{ display: "flex", flexDirection: "row",  gap: "8px",alignItems:"center"}}>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  dateFormat="yyyy.MM.dd"
                  placeholderText="날짜 선택"
                  customInput={<CustomInput />}
                />
                
                </ButtonRow>
                </DatePickerContainer>

                
            </BirthBox>

            <BirthBox>
                <MiddleHeaderTitle style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}> 
                    < PinkCircle>3</PinkCircle> 아이의 <span style={{ color: "#f27f8d" }}>키</span>를 입력해 주세요.
                </MiddleHeaderTitle>
                 <StyledInput 
                   type="text" 
                   placeholder="75 (cm)"
                   onChange={(e) => setHeight(e.target.value)}
                />
            </BirthBox>
           <ButtonRow2><StyledConfirmButton  onClick={() => goPhotoPage()}>확인</StyledConfirmButton></ButtonRow2>

         </BackGround>
        
    
    );


}
