import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// ---스타일 ----

const Image = styled.img`
  width: 87%;
  height: 25vh;
  border-radius: 12px;
`;

const MinickBox = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bold = styled.h4`
  font-size: 14px;
  margin-bottom: 5px;
`;

const MImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 10px;
`;

const Array = styled.div`
  margin-top: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Box = styled.div`
  border-radius: 12px;
  background-color: white;
  box-shadow: 2px 5px 15px #efe1db;
  border-color: #efe1db;
  border-width: 2px;
  border-style: solid;
  width: 87%;
  padding-top: 5px;
  padding-bottom: 8px;
`;

const ListBox = styled.button`
  border: 1px solid #efe1db;
  width: 87%;
  height: auto;
  border-radius: 12px;
  box-shadow: 3px 6px 10px #efe1db;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: ${({ isDone }) =>
    isDone === true ? "#6ecf78" : isDone === false ? "#fad88f" : "white"};
`;

const CheckMark = styled.div`
  // 체크 표시 스타일
  height: 10px;
  width: 10px;
  border-right: 2px solid #f27f8d;
  border-top: 2px solid #f27f8d;
  transform: rotate(45deg);
`;

const PinkCircle = styled.div`
  border-radius: 100%;
  background-color: #f27f8d;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const Modal = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 12px;
  padding: 17px;

  box-sizing: border-box;
  top: 0;
  left: 0%;

  box-shadow: 3px 6px 10px rgba(0, 0, 0, 0.2);
  z-index: 999;
  width: 100%;

  border-color: #efe1db;
  border-width: 2px;
  text-align: left;
  font-size: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
`;

const Btn = styled.button`
  height: 4.3vh;
  width: 36%;
  border-radius: 8px;

  font-weight: "bold";
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: #f27f8d;
  box-shadow: 2px 5px 15px #efe1db;
  color: white;
`;

const NoBtn = styled.button`
  height: 4.3vh;
  width: 43%;
  border-radius: 8px;

  font-weight: "bold";
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: #f27f8d;
  box-shadow: 2px 5px 10px #efe1db;
  color: white;
  font-size: 10px;
`;

const SolvedBtn = styled.button`
  height: 4.3vh;
  width: 43%;
  border-radius: 8px;
  border: 1px solid #f27f8d;
  font-weight: "bold";
  cursor: pointer;
  outline: none;
  font-size: 16px;
  background-color: white;
  box-shadow: 2px 5px 10px #efe1db;
  color: #f27f8d;
  font-size: 10px;
`;

//---- 컴포넌트------

const ModalContent = ({
  setIsModalOpen,
  title,
  description,
  customAnalysis,
  solutions,
  recommendedItems,
  setIsDone,
}) => {
  return (
    <Modal>
      <CloseButton
        onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen(false);
        }}
      >
        ×
      </CloseButton>

      <span style={{ display: "flex", marginBottom: "10px" }}>
        <MImage src="speakerpt.png" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            paddingLeft: "10px",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "13px" }}>{title}</span>
          <span style={{ fontSize: "10px" }}>{description}</span>
        </div>
      </span>

      <div
        style={{
          marginLeft: "2%",
          background: "#d9d9d9",
          width: "95%",
          height: "1px",
        }}
      ></div>

      <Bold>우리 아이 맞춤분석</Bold>
      <p>{customAnalysis}</p>

      <Bold>해결 방법</Bold>
      {solutions?.map((s, i) => (
        <p key={i}>✅{s}</p>
      ))}

      <Bold>추천 물품</Bold>
      {recommendedItems?.map((item, i) => (
        <p key={i}>💗{item}</p>
      ))}

      <div
        style={{
          display: " flex",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        <SolvedBtn
          onClick={(e) => {
            e.stopPropagation();
            setIsDone(true);
            setIsModalOpen(false);
          }}
        >
          해결 완료했어요!
        </SolvedBtn>
        <NoBtn
          onClick={(e) => {
            e.stopPropagation();
            setIsDone(false);
            setIsModalOpen(false);
          }}
        >
          아직 해결하지 못했어요.
        </NoBtn>
      </div>
    </Modal>
  );
};

const ListItem = ({
  title,
  description,
  customAnalysis,
  solutions,
  recommendedItems,
}) => {
  const [isDone, setIsDone] = useState(null); // 완료 여부
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림/닫힘\

  return (
    <ListBox
      isDone={isDone}
      onClick={() => {
        if (isDone === null) setIsModalOpen(true);
      }}
    >
      {isDone === null ? (
        // 아직 선택 안 했을 때
        <>
          <MImage src="speakerpt.png" />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              paddingLeft: "10px",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "13px" }}>
              {title}
            </span>
            <span style={{ fontSize: "10px" }}>{description}</span>
          </div>
          <div
            style={{
              marginLeft: "auto",
              marginRight: "5px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckMark />
          </div>
        </>
      ) : isDone === true ? (
        // 해결 완료했을 때
        <p
          style={{
            margin: "0px",
            display: "flex",
            alignItems: "center",
            color: "white",
            fontSize: "14px",
            width: "100%",
            gap: "8px",
          }}
        >
          <MinickBox>
            <img src="Checkcircle.png "></img>
          </MinickBox>{" "}
          해결 완료했어요!
        </p>
      ) : (
        // 아직 해결 못 했을 때
        <p
          style={{
            margin: "0px",
            display: "flex",
            alignItems: "center",
            color: "#95986f",
            fontSize: "14px",
            width: "100%",
            gap: "8px",
          }}
        >
          <MinickBox>
            <img src="Checkcircle1.png " />
          </MinickBox>
          체크리스트로 이동
        </p>
      )}

      {isModalOpen && (
        <ModalContent
          setIsModalOpen={setIsModalOpen}
          title={title}
          description={description}
          customAnalysis={customAnalysis}
          solutions={solutions}
          recommendedItems={recommendedItems}
          setIsDone={setIsDone}
        />
      )}
    </ListBox>
  );
};

export default function ResultPage() {
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 아이템
  const navigate = useNavigate();

  const analysisResult = JSON.parse(localStorage.getItem("analysisResult"));

  /* 테스트용 데이터
    {
    safety_score: 68,
    hazard_count: 4,
    hazards: [
      {
        id: 1,
        title: "작은 레고 조각",
        description:
          "바닥에 흩어져 있는 작은 레고 조각들은 영유아에게 질식 위험을 초래합니다.",
        location: "거실 바닥",
        custom_analysis:
          "12개월 아기는 손에 잡히는 모든 것을 입에 넣습니다. 작은 레고 조각을 쉽게 발견하고 입에 넣어 질식할 수 있어 매우 위험합니다.",
        solutions: [
          "정기적으로 바닥 청소하기",
          "레고는 아이 손이 닿지 않는 곳에 보관하기",
        ],
        recommended_items: ["장난감 수납함", "베이비룸/놀이매트"],
      },
      {
        id: 2,
        title: "노출된 콘센트",
        description:
          "아이의 손이 닿는 높이에 노출된 콘센트는 감전 사고의 위험이 있습니다.",
        location: "거실 벽",
        custom_analysis:
          "아이가 기어다니다가 콘센트에 손가락을 넣을 수 있어 위험합니다.",
        solutions: ["콘센트 안전 덮개 설치하기", "가구로 콘센트 가리기"],
        recommended_items: ["콘센트 안전 덮개", "안전 가드"],
      },
      {
        id: 3,
        title: "노출된 전선",
        description:
          "바닥에 널려있는 전선들은 아이에게 감전 및 걸려 넘어질 위험을 줍니다.",
        location: "거실 바닥",
        custom_analysis:
          "아이가 전선을 잡아당기거나 입에 넣을 수 있어 위험합니다.",
        solutions: ["전선 정리함 사용하기", "전선 테이프로 고정하기"],
        recommended_items: ["전선 정리함", "케이블 타이"],
      },
      {
        id: 4,
        title: "불안정한 스피커",
        description:
          "높이 올려진 스피커가 아이가 잡아당길 경우 떨어져 큰 부상을 입을 수 있습니다.",
        location: "거실 선반",
        custom_analysis:
          "아이가 스피커 전선을 잡아당기면 스피커가 떨어질 수 있습니다.",
        solutions: [
          "스피커 고정 장치 설치하기",
          "아이 손에 닿지 않는 곳으로 이동하기",
        ],
        recommended_items: ["가구 고정 스트랩", "안전 선반"],
      },
    ],
  };


  */

  const userLocation = localStorage.getItem("userLocation");

  const location = useLocation();
  const imageUrl = location.state?.imageUrl;

  return (
    <Array>
      {/* 테스트용 데이터 <Image src="resultpt.png"  /> */}
      <Image src={imageUrl} />
      <Box>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            marginBottom: "15px",
          }}
        >
          <PinkCircle>
            <img src="alert.png" />
          </PinkCircle>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <span style={{ fontWeight: "bold", fontSize: "15px" }}>
              {userLocation} 분석 완료{" "}
            </span>
            <span style={{ fontSize: "13px" }}>
              아이에게 위험한 요소가 발견되었어요!
            </span>
          </div>
        </div>
        <div
          style={{
            marginLeft: "2%",
            background: "#d9d9d9",
            width: "95%",
            height: "1px",
          }}
        ></div>{" "}
        {/* 구분선 */}
        <div>
          <span style={{ fontSize: "13px", marginLeft: "10px" }}>
            안전 점수
          </span>
          <span
            style={{
              color: "#f27f8d",
              fontWeight: "bold",
              fontSize: "17px",
              marginLeft: "10px",
            }}
          >
            {analysisResult?.safety_score}점
          </span>
        </div>
      </Box>

      {analysisResult?.hazards?.map((item) => (
        <ListItem
          key={item.id}
          title={item.title}
          description={item.description}
          customAnalysis={item.custom_analysis}
          solutions={item.solutions}
          recommendedItems={item.recommended_items}
        />
      ))}

      <Btn
        style={{ marginLeft: "auto", marginRight: "23px" }}
        onClick={() => navigate("/mainpage")}
      >
        완료
      </Btn>
    </Array>
  );
}
