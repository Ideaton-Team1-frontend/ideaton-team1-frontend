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
  min-height: 90vh; // height 대신 min-height 사용
  max-height: 90vh;
  width: 100vw;
  background-color: #FFF8F3; // 모바일 앱 밖의 배경색 (확인용)
`;
const Box = styled.div`
border-radius: 12px;
background-color: white;
box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
border-color: #4c3f3c ;
border-width: 2px;
border-style: solid;
width: 90%;
height: 20%;

`;

const BirthBox = styled.div`
border-radius: 12px;
background-color: white;
box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
border-color: #4c3f3c ;
border-width: 2px;
border-style: solid;
width: 90%;

margin-top: 20px;

`;


const PinkCircle = styled.div`
  border-radius: 100%;
  background-color: #fcbcb5;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GenderButton = ({ gend, gender, setGender }) => {
    return (
        <button
            onClick={() => setGender(gend)}
            style={{ backgroundColor: gender === gend ? "#f27f8d" : "#ffffff" , 
                color :  gender === gend ? "#ffffff" : "#4c3f3c"
             }}
        >
            {gend}
        </button>
    );
};

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div style={{ 
        display: "flex", 
        alignItems: "stretch",
         border: "1px solid #ccc",
          borderRadius: "8px",
           
           
         }}>
        <span>{value || new Date().toLocaleDateString()}</span> 
        <div style={{ alignSelf: "stretch", width: "1px", backgroundColor: "#4c3f3c"  }}> </div>
        <span onClick={onClick} style={{ marginLeft: "auto", cursor: "pointer" }}>📅</span>
    </div>
));

const Btn = ({name , OnClick }) => {
    return (
        <button onClick={OnClick}>
            {name}
        </button>
    );
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
  left: 0;
  right: 0;
  height: 3px;
  background: #E0E0E0; /* 기본 비활성화 회색 선 */
  z-index: 1;
`;

const ActiveProgressLine = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%; /* 현재 2단계가 활성화이므로 전체 선을 채움 (원하는 도달 범위만큼 조절 가능) */
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

  navigate("/mainPage");
};

    return (

        <BackGround>
        <Process_img>
        <img src="./scrollkids.png" />
        </Process_img>
            <div> 아이의 <span style={{ color: "#f27f8d" }}>정보</span>를 입력해주세요. </div>
            <div> 정확한 분석을 위해 필요한 정보예요</div>
            <Box> 
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}> < PinkCircle>1</PinkCircle> 아이의 <span style={{ color: "#f27f8d" }}>기본 정보</span>를 입력해 주세요.</div>
                <div> 아이 이름</div>
               

                <input 
                   type="text" 
                   placeholder="예 : 김멋사"
                   onChange={(e) => setName(e.target.value)}
                />
                <div> 아이의 <span style={{ color: "#f27f8d" }}>성별</span>을 선택해 주세요.</div>
                <GenderButton gend="남자" gender={gender} setGender={setGender} />
                <GenderButton gend="여자" gender={gender} setGender={setGender} />

            </Box>
            <BirthBox>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}> 
                    < PinkCircle>2</PinkCircle> 아이의 <span style={{ color: "#f27f8d" }}>연령(월령)</span>을 선택해 주세요.
                </div>
                <p>생년 월일</p>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  dateFormat="yyyy.MM.dd"
                  placeholderText="날짜 선택"
                  customInput={<CustomInput />}
                />
                
                </div>

                
            </BirthBox>

            <BirthBox>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}> 
                    < PinkCircle>3</PinkCircle> 아이의 <span style={{ color: "#f27f8d" }}>키</span>를 입력해 주세요.
                </div>
                 <input 
                   type="text" 
                   placeholder="75 (cm)"
                   onChange={(e) => setHeight(e.target.value)}
                />
            </BirthBox>
            <Btn name="확인" OnClick={goPhotoPage} />

         </BackGround>
        
    
    );


}