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


function MainPage()
{

    return(
        <>
            <Box>
                <Text>
                    카메라가 들어갈 메인 페이지입니다.
                </Text>
            </Box>
        </>
    );
}

export default MainPage;