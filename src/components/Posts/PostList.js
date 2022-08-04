import { useEffect, useState } from "react";
import styled from "styled-components";

const Li = styled.li`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 10px;
  border-bottom: 1px solid #c8cbce;
  padding: 20px 0;
`;

const Title = styled.h1`
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    color: #452cdd;
  }
  grid-column: span 10;
  @media screen and (max-width: 768px) {
    grid-column: span 8;
  }
`;
const Creator = styled.span`
  width: 100%;
  @media screen and (max-width: 768px) {
    grid-column: span 4;
    text-align: center;
  }
`;

export default function PostList({ id, userId, title, getPost, setVisible }) {
  const [innerwidth, setInnerWidth] = useState(window.innerWidth);

  function handleResize() {
    setInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [innerwidth]);

  return (
    <Li>
      <Title
        onClick={() => {
          getPost(id);
          setVisible(true);
        }}
      >
        {title.length > 20 && innerwidth < 768
          ? `${title.slice(0, 20)}...`
          : title}
      </Title>
      <Creator>글쓴이{userId}</Creator>
    </Li>
  );
}
