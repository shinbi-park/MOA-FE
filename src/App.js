import Post from "./Post/Post";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import Profile from "./MyPage/Profile";
import Setting from "./MyPage/Setting";
import MyActivity from "./MyPage/MyActivity";
import MyPostList from "./MyPage/MyPostList";
import Likedlist from "./MyPage/Likedlist";
import SignupPage from "./LogIn/SignUpPage";
import Home from "./Home/Home";
import PostDetail from "./PostDetail/PostDetail";
import PostEdit from "./PostDetail/PostAdmin/PostUpdate/PostEdit";
import InfoDetail from "./PostDetail/UserInfo/InfoDetail";

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mypage/" element={<Profile />} />
        <Route path="/mypage/profile" element={<Profile />} />
        <Route path="/mypage/activity" element={<MyActivity />} />
        <Route path="/mypage/setting" element={<Setting />} />
        <Route path="/applicantDetail" element={<InfoDetail />} />
        <Route path="/mypage/mylist" element={<MyPostList />} />
        <Route path="/mypage/likedlist" element={<Likedlist />} />
        <Route path="/detail/:postId" element={<PostDetail />} />
        <Route path="/edit/:postId" element={<PostEdit />} />
      </Routes>
    </>
  );
}

export default App;
