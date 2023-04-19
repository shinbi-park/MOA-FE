import Post from "./Post/Post";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import InfoDeatil from "./PostDetail/InfoDetail";
import SignupPage from "./LogIn/SignUpPage";
import Home from "./Home/Home";
import PostDetail from "./PostDetail/PostDetail";
import PostEdit from "./PostDetail/PostAdmin/PostUpdate/PostEdit";
import MyPage from "./MyPage/MyPage";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/applicantDetail" element={<InfoDeatil />} />
        <Route path="/detail/:postId" element={<PostDetail />} />
        <Route path="/edit/:postId" element={<PostEdit />} />
      </Routes>
    </>
  );
}

export default App;
