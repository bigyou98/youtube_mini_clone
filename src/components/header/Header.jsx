import React from "react";
import { BsYoutube } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import headerCss from "./header.module.css";

export const Header = ({
  handleInput,
  handleSearchBtn,
  keyword,
  setCurrentVideo,
}) => {
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      handleSearchBtn();
    }
  };
  console.log("qweqwe");
  return (
    <div className={headerCss.wrapper}>
      <div
        className={headerCss.logoWrapper}
        onClick={() => setCurrentVideo({})}
      >
        <BsYoutube className={headerCss.youtubeLogo} />
        <span className={headerCss.youtubeText}>Youtube</span>
      </div>

      <div className={headerCss.inputWrapper}>
        <input
          className={headerCss.input}
          placeholder="Search..."
          onChange={handleInput}
          onKeyPress={pressEnter}
          value={keyword}
        />
        <button className={headerCss.searchBtn} onClick={handleSearchBtn}>
          <BiSearch />
        </button>
      </div>
    </div>
  );
};
