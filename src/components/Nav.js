import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.nav`
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  padding: 15px 0;
`;
const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  font-weight: bold;
`;
const Rlink = styled(Link)`
  font-size: 1.5rem;
  color: #6859d6;
  margin-left: 12px;
`;

export default function Nav() {
  return (
    <Header>
      <Ul>
        <Li>
          <Rlink to="/">Posts</Rlink>
        </Li>
      </Ul>
    </Header>
  );
}
