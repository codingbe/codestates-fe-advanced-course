import styled from "styled-components";
import Comments from "./Comments";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;
const Main = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
const Top = styled.div`
  text-align: right;
`;
const Header = styled.div`
  text-align: right;
  border-bottom: 3px solid #f2f2f2;
  padding: 10px 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 20px 0;
`;
const Body = styled.div`
  padding: 20px 10px;
  border-bottom: 3px solid #f2f2f2;
  text-align: right;
`;
const Content = styled.p`
  text-align: left;
  margin-bottom: 12px;
`;
const Count = styled.span`
  font-weight: bold;
  color: gray;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  color: white;
  margin-left: 3px;
`;
const Creator = styled.span``;
const Icon = styled.i`
  font-size: 1.3rem;
  cursor: pointer;
  margin: 10px 10px 0 0;
`;

export default function Post({ post, setVisible, comments }) {
  const commentsInPost = comments.filter(
    (comment) => comment.postId === post.id
  );

  return (
    <>
      <Backdrop onClick={() => setVisible(false)}></Backdrop>
      <Main>
        <Top>
          <Icon onClick={() => setVisible(false)} className="fas fa-times" />
        </Top>
        <Header>
          <Title>{post.title}</Title>
          <Creator>글쓴이{post.userId}</Creator>
        </Header>
        <Body>
          <Content>{post.body}</Content>
          <Count>
            댓글
            <Number>{commentsInPost.length}</Number>
          </Count>
        </Body>
        <Comments comments={commentsInPost} />
      </Main>
    </>
  );
}
