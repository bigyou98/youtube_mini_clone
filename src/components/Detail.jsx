import React from "react";
import { Header } from ".";
import detailCss from "./detail.module.css";
export const Detail = () => {
  return (
    <div className={detailCss.wrapper}>
      <Header />
      디테일 페이지
    </div>
  );
};
