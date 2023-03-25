import "./App.css";
import Post from "./Post/Post";
import SignupForm from "./LogIn/SignupForm";
import SignInForm from "./LogIn/SignInForm";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./PostDetail/PostDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/write" element={<Post />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/register" element={<SignupForm />} />
        <Route path="/post" element={<PostDetail />} />
      </Routes>
    </>
  );
}

export default App;
