import { useEffect, useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 30px;
  padding: 15px;
  gap: 5px;
`;

const Page = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border: 1px solid gray;
  background-color: ${({ check }) => check && "#6859d6"};
  color: ${({ check }) => check && "white"};
  font-weight: ${({ check }) => check && "bold"};
`;

export function Pagination({ lastPage, setPage, page }) {
  const [lengthByPage, setLengthByPage] = useState([]);

  useEffect(() => {
    setLengthByPage(Array.from({ length: lastPage }, () => 0));
  }, [lastPage]);
  return (
    <Nav>
      {lengthByPage.length > 0 && (
        <Page
          onClick={() => setPage(page > 0 ? page - 1 : lengthByPage.length - 1)}
        >
          ◀️
        </Page>
      )}
      {lengthByPage.map((_, idx) => (
        <Page check={idx === page} key={idx} onClick={() => setPage(idx)}>
          {idx + 1}
        </Page>
      ))}
      {lengthByPage.length > 0 && (
        <Page onClick={() => setPage(page < lastPage - 1 ? page + 1 : 0)}>
          ▶️
        </Page>
      )}
    </Nav>
  );
}
