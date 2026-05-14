import {useState} from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top: 25px;
height: 100vh;        
width: 100vw;          
`


const Text = styled.div`
font-size: 1rem; //html 비례 폰트 조정
line-height: 1.3;//줄간격
margin-bottom: 10px;
word-break: keep-all; //무조건 단어 단위로 줄바꿈
`


function OnBoarding()
{
     const navigate = useNavigate();

    return(
        <>
            <Box>
                <Text>
                    <button onClick={() => navigate("/MainPage")}>임시버튼, 메인화면으로 가기</button>
                </Text>
            </Box>
        </>
    );
}
export default OnBoarding;