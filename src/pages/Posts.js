import { useEffect, useState } from "react";
import styled from "styled-components";
import { AMOUNT, COMMENTS, POSTS, requestApi } from "../api";
import Loading from "../components/Loading";
import { Pagination } from "../components/Posts/Pagination";
import Post from "../components/Posts/Post";
import PostList from "../components/Posts/PostList";

const Container = styled.div`
  padding: 10px;
  max-width: 1280px;
  margin: 0 auto;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
`;

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const PAGINATETEST = 0; // 값 1당 페이지 넘버를 담는 배열에 페이지 넘버 1개가 추가된다. 값에 9가 할당되면 19페이지까지 보인다.

  async function getComments() {
    setComments(await requestApi(COMMENTS));
  }

  function getPost(id) {
    setPost(posts.filter((post) => post.id === id)[0]);
  }

  async function getPosts() {
    const data = await requestApi(POSTS);
    setPosts(data);
    setLastPage(Math.ceil(data.length / AMOUNT) + PAGINATETEST);
    setLoading(false);
  }

  useEffect(() => {
    getPosts();
    getComments();
  }, []);

  return (
    <>
      {visible && (
        <Post setVisible={setVisible} post={post} comments={comments} />
      )}
      <Container>
        <Ul>
          {loading ? (
            <Loading />
          ) : (
            posts
              .slice(0 + AMOUNT * page, AMOUNT + AMOUNT * page) // 0 ~ 10, 10 ~ 20, 20 ~ 30
              .map((post) => (
                <PostList
                  key={post.id}
                  id={post.id}
                  userId={post.userId}
                  title={post.title}
                  getPost={getPost}
                  setVisible={setVisible}
                />
              ))
          )}
        </Ul>
        <Pagination lastPage={lastPage} setPage={setPage} page={page} />
      </Container>
    </>
  );
}
