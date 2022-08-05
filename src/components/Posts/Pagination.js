import { useEffect, useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  max-width: 500px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  padding: 15px;
  gap: 5px;
`;

const Page = styled.span`
  cursor: pointer;
  text-align: center;
  background-color: ${({ check }) => check && "#6859d6"};
  color: ${({ check }) => check && "white"};
  font-weight: ${({ check }) => check && "bold"};
`;

export function Pagination({ lastPage, setPage, page }) {
  const [lengthByPage, setLengthByPage] = useState([]);

  function setPageArr() {
    if (lastPage > 10) {
      for (let j = 0; j < 2; j++) {
        for (let i = 1; i <= lastPage; i++) {
          setLengthByPage((prev) => [...prev, i]);
        }
      }
    } else {
      for (let i = 1; i <= lastPage; i++) {
        setLengthByPage((prev) => [...prev, i]);
      }
    }
  }

  useEffect(() => {
    setPageArr();
  }, [lastPage]);

  return (
    <Nav>
      {lengthByPage.length > 0 && (
        <Page onClick={() => setPage(page > 0 ? page - 1 : lastPage - 1)}>
          ◀️
        </Page>
      )}
      <Grid>
        {lastPage > 10 && page >= 5
          ? lengthByPage.slice(0 + page - 5, 10 + page - 5).map((num, idx) => (
              <Page
                check={num === page + 1}
                key={idx}
                onClick={() => setPage(num - 1)}
              >
                {num}
              </Page>
            ))
          : lengthByPage.slice(0, 10).map((num, idx) => (
              <Page
                check={page === idx}
                key={idx}
                onClick={() => setPage(num - 1)}
              >
                {num}
              </Page>
            ))}
      </Grid>
      {lengthByPage.length > 0 && (
        <Page onClick={() => setPage(page < lastPage - 1 ? page + 1 : 0)}>
          ▶️
        </Page>
      )}
    </Nav>
  );
}
