import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 50px;
  font-weight: bold;
`;

export default function Loading() {
  return <Container>로딩중...</Container>;
}
