import styled from "styled-components";
import axios from "axios";


const Image = styled.img`
width: 90%;
height: 80%;
border-radius: 12px;
`;

const Array = styled.div`
margin-top: 4vh;
display: flex;
justify-content: center;
align-items: center;
`;


export default function ResultPage() {
    return (
        <Array>
            <Image src="/resultpt.png"  />
        </Array>
    );


}