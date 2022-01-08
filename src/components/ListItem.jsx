import React from "react";
import listCss from "./list.module.css";

export const ListItem = ({ listItem }) => {
  const { title, description, publishedAt, thumbnails, channelTitle } =
    listItem;
  const { high, maxres, medium, standard, default: defaultImg } = thumbnails;

  return (
    <div className={listCss.listItemWrapper}>
      <img src={medium.url} alt="사진" className={listCss.thumnail} />
      <div className={listCss.textBox}>
        <span className={listCss.title}>{title}</span>
        <br />
        {channelTitle}
        <br />
      </div>
    </div>
  );
};