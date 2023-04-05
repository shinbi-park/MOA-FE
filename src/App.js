
import './App.css';
import Post from './Post/Post';
import SignupForm from './LogIn/SignupForm';
import SignInForm from './LogIn/SignInForm';
import Header from './Header/Header';
import {Route, Routes} from 'react-router-dom';
import Profile from './MyPage/Profile';
import MyPage from './MyPage/MyPage';
import Setting from './MyPage/Setting';
import MyActivity from './MyPage/MyActivity';
import InfoDeatil from './PostDetail/InfoDetail';
import MyPostList from './MyPage/MyPostList';
import Likedlist from './MyPage/Likedlist';
import PostDetail from "./PostDetail/PostDetail";

function App() {
  return (
    <>
      
    <Routes> 
      <Route path="/post" element={<Post />} />
      <Route path="/mypage/" element={<Profile />} />
      <Route path="/mypage/profile" element={<Profile />} />
      <Route path="/mypage/activity" element={<MyActivity />} />
      <Route path="/mypage/setting" element={<Setting />} />
      <Route path="/login" element={<SignInForm />} />
      <Route path="/register" element={<SignupForm />} />
      <Route path="/applicantDetail" element={<InfoDeatil />} />
      <Route path="/mypage/mylist" element={<MyPostList />} />
      <Route path="/mypage/likedlist" element={<Likedlist />} />
      <Route path="/detail" element={<PostDetail />} />
      
      
    </Routes>
    </>
  );
}

export default App;
