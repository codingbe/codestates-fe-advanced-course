### 배포 링크

<a href="https://subtle-lolly-f9d984.netlify.app/" target="_blank">링크</a>

### 사용한 스택 목록

- React
- JavaScript
- Styled-Components

### 구현한 기능 목록 (Software Requirement Specification)

<details>
  <summary> 게시물 리스트 </summary>
    <img width="700" src="./public/imgs/posts.png"/>  
</details>

---

<details>
  <summary> 게시물 상세 페이지 </summary>
    <img width="700" src="./public/imgs/detail.gif"/>  
</details>

---

<details>
  <summary> 페이지네이션 </summary>
    <img width="700" src="./public/imgs/pagination.gif"/>  
</details>

---

<details>
  <summary> 반응형 </summary>
    <img width="700" src="./public/imgs/reactive.gif"/>  
</details>

---

### 성능 최적화에 대해서 고민하고 개선한 방법

<details style="white-space: pre">
  <summary> 서버에 요청하는 횟수 줄이기 </summary>
  <ol>
    <li>처음 앱을 시작할 때 posts와 comments 데이터 받아오기</li>
    <li>filter를 이용하여 데이터 추출하기</li>
  </ol>
  <p>
    <strong>결론</strong><br />
    위의 과정 전에는 사용자가 post를 클릭 할 때마다 서버로 요청을 보냈으나
    이 과정 후에는 서버에 요청하는 횟수가 2번으로 고정됨 (posts, comments)
  </p>
</details>

---

### 추가 구현 사항에 대한 구현 방법과 설명

<details>
  <summary> Pagination </summary>
  <a href="https://codingbe.tistory.com/8" target="_blank">링크</a>
</details>

---

<details>
  <summary> 게시물 상세페이지를 모달로 만들기 </summary>
  <a href="https://codingbe.tistory.com/9" target="_blank">링크</a>
</details>

---
