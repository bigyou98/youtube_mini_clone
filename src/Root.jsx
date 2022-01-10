import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Detail, Main } from "./components";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
