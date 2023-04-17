import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import data from "./data";
import Main from "./pages/main/Main";
import SignUp from "./pages/signup/SignUp";

export const Testdatacontext = React.createContext();

const App = () => {
  return (
    <Testdatacontext.Provider value={data}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Testdatacontext.Provider>
  );
};

export default App;
