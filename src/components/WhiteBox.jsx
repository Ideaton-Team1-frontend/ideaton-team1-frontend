import styled from "styled-components";

const Box = styled.div`
  border-radius: 12px;
  background-color: white;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
`;

export default function WhiteBox() {
  return <Box></Box>;
}
