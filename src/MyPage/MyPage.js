import Sidebar from "./Sidebar/Sidebar";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import Setting from "./Setting";


const Center = styled.div`
  height: 92vh;
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const Main = styled.div`
  display: "flex";
  flex: 2;
`;

const MyPage = () => {

    return (
        <Center>
        <Sidebar />
          <Main>
            <Routes>
              <Route exact path="/mypage/profile" element={<Profile />} />
              <Route exact path="/mypage" element={<Profile />} />
              <Route exact path="/mapage/setting" element={<Setting />} />
            </Routes>
          </Main>
        </Center>
    )
}

export default MyPage;