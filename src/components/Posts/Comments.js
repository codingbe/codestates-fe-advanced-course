import styled from "styled-components";

const Ul = styled.ul`
  padding: 10px 0;
`;
const Li = styled.li`
  padding: 20px;
  border-bottom: 3px solid #f2f2f2;
`;
const Name = styled.h1`
  font-weight: bold;
  margin-bottom: 15px;
`;
const Body = styled.p``;

export default function Comments({ comments }) {
  return (
    <Ul>
      {comments.map((comment) => (
        <Li key={comment.id}>
          <Name>{comment.name}</Name>
          <Body>{comment.body}</Body>
        </Li>
      ))}
    </Ul>
  );
}
