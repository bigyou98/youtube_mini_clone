import React from "react";
import { BsYoutube } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import headerCss from "./header.module.css";
import { useNavigate } from 'react-router-dom';

export const Header = ({ handleInput, handleSearchBtn, keyword }) => {
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      handleSearchBtn();
    }
  };
  const navigate = useNavigate();
  return (
    <div className={headerCss.wrapper}>
      <div className={headerCss.logoWrapper} onClick={()=>navigate('/')}>
        <BsYoutube className={headerCss.youtubeLogo}  />
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
