import Post from "./Post/Post";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";

import SignupPage from "./LogIn/SignUpPage";
import Home from "./Home/Home";
import PostDetail from "./PostDetail/PostDetail";
import PostEdit from "./PostDetail/PostAdmin/PostUpdate/PostEdit";
import MyPage from "./MyPage/MyPage";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family : 'Noto Sans KR';
`;
function App() {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mypage" element={<MyPage />} />

        <Route path="/detail/:postId" element={<PostDetail />} />
        <Route path="/edit/:postId" element={<PostEdit />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
