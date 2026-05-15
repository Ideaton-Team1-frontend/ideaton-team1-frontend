import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React from "react";


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

export default function KidData() {
    const navigate = useNavigate();
    const [gender, setGender] = useState("");
    const [name, setName] = useState("");
    const [height, setHeight] = useState("");
    const [date, setDate] = useState(null);
    const Senddata = async () => {
  const formattedDate = date.toISOString().split("T")[0];

  const formData = new FormData();

  formData.append("birthDate", formattedDate);
  formData.append("childHeight", height);
  formData.append(
    "childGender",
    gender === "남자" ? "남아" : "여아"
  );

  try {
    const response = await axios.post(
      "http://13.209.34.14:8080/api/analysis",
      formData
    );

    console.log(response.data);

    if (response.status === 200) {
      localStorage.setItem("userBirthDate", formattedDate);
      localStorage.setItem("userHeight", height);
      localStorage.setItem(
        "userGender",
        gender === "남자" ? "남아" : "여아"
      );

      alert("아이 데이터가 성공적으로 전송되었습니다!");
    }
  } catch (error) {
    console.log(error.response);
    console.log(error.message);
  }
};

          
    
  

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            
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
            <Btn name="확인" OnClick={Senddata}/>

         </div>
        
    
    );


}