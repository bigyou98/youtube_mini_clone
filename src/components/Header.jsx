import React from "react";
import { BsYoutube } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import headerCss from "./header.module.css";

export const Header = ({ handleInput, handleSearchBtn }) => {
  return (
    <div className={headerCss.wrapper}>
      <div className={headerCss.logoWrapper}>
        <BsYoutube className={headerCss.youtubeLogo} />
        <span className={headerCss.youtubeText}>Youtube</span>
      </div>

      <div className={headerCss.inputWrapper}>
        <input
          className={headerCss.input}
          placeholder="Search..."
          onChange={handleInput}
        />
        <button className={headerCss.searchBtn} onClick={handleSearchBtn}>
          <BiSearch />
        </button>
      </div>
    </div>
  );
};
