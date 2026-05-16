import styled from "styled-components";
import axios from "axios";
import { useState } from "react";




const Image = styled.img`
width: 30%;
height: 30%;
border-radius: 12px;
`;

const Array = styled.div`
margin-top: 4vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Box = styled.div`
border-radius: 12px;
background-color: white;
box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
border-color: #4c3f3c ;
border-width: 2px;
border-style: solid;
width: 90%;

margin-top: 20px;
`;

const ListBox = styled.button`
width: 90%;
height: 18%;
border-radius: 12px;
background-color: white;
box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.1);
display: flex;
align-items: center;
justify-content: space-around;
position: relative;
`;

const CheckMark = styled.div`
  // 체크 표시 스타일
  width: 10px;
  height: 10px;
  border-right: 2px solid black ;
  border-top: 2px solid black ;
  transform: rotate(45deg);
  margin-bottom: 4px;
`;

const PinkCircle = styled.div`
  border-radius: 100%;
  background-color: #f27f8d;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Modal = styled.div`
 position: absolute;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  width: 80%;
  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
   top: 0;
   left: 0;
   width: 100%;

`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;




const ModalContent = ({setIsModalOpen ,  title, description, customAnalysis, solutions, recommendedItems  }) => {
    return (
        <Modal>
            <CloseButton onClick={(e) => { e.stopPropagation(); setIsModalOpen(false);}}>×</CloseButton>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{customAnalysis}</p>
            

            <h4>해결 방법</h4>
            {solutions?.map((s, i) => <p key={i}>{s}</p>)}
            
            <h4>추천 물품</h4>
            {recommendedItems?.map((item, i) => <p key={i}>{item}</p>)}
            
            <button> 해결  완료했어요!</button>
            <button>아직 해결하지 못했어요.</button>
        </Modal>
    );
}



const ListItem = ({ imageSrc, title, description , customAnalysis, solutions, recommendedItems }) => {
    const [isDone, setIsDone] = useState(false); // 완료 여부
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림/닫힘

    return (
        <ListBox onClick ={() =>  {if (!isDone) setIsModalOpen(true)} }>
            <Image src= {imageSrc}  />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <p>{title}</p>
                <p>{description}</p>
                <CheckMark />
            </div>


        {isModalOpen && <ModalContent  
            setIsModalOpen={setIsModalOpen}
            title={title}
            description={description}
            customAnalysis={customAnalysis}
            solutions={solutions}
            recommendedItems={recommendedItems}
            
            />
        }
            
        </ListBox>
    );
}



export default function ResultPage() {
    const [selectedItem, setSelectedItem] = useState(null); // 선택된 아이템

    const analysisResult =
         JSON.parse(
         localStorage.getItem(
        "analysisResult"
            )
         );
        
        const location =
           localStorage.getItem(
           "userLocation"
        );




    return (
        <Array>
            <Image src="resultpt.png"  />
            <Box>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "8px" }}> 
                    < PinkCircle><Image src="alert.png" /></PinkCircle> 
                    <div style={{ display: "flex", flexDirection: "column"}}>{location} 분석 완료<span>아이에게 위험한 요소가 발견되었어요!</span></div>
                </div>
                <div style={{ background: "#f27f8d", width : "90%", height: "1px" }}></div>
                <div> 안전점수 <span style={{ color: "#f27f8d" }}> {analysisResult?.safety_score} </span>점</div>
            </Box>

            
           { analysisResult?.hazards?.map(
                (item) => (
                   <ListItem
                        key={item.id}
                        title={item.title}

                        description={
                        item.description
                        }

                        customAnalysis={
                        item.custom_analysis
                       }

                        solutions={
                        item.solutions
                       }

                       recommendedItems={
                       item.recommended_items
                      }
                    
                    
                    />
      
                )
                )
            }
            

      
            <button onClick={() => {  }}>완료</button>
        </Array>
    );


}