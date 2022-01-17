import React from "react";
import listCss from "./list.module.css";

export const ListItem = React.memo(
  ({ listItem, setCurrentVideo, miniThum }) => {
    const {
      title,
      description,
      publishedAt,
      thumbnails: { high, maxres, medium, standard, default: defaultImg },
      channelTitle,
    } = listItem.snippet;

    return (
      <>
        {miniThum === "detail" ? (
          <div
            className={listCss.detailListItemWrapper}
            onClick={() => setCurrentVideo(listItem)}
          >
            <img src={defaultImg.url} alt="사진" className={listCss.thumnail} />
            <div className={listCss.detailTextBox}>
              <span className={listCss.detailTitle}>{title}</span>
              <br />
              {channelTitle}
              <br />
            </div>
          </div>
        ) : (
          <div
            className={listCss.listItemWrapper}
            onClick={() => setCurrentVideo(listItem)}
          >
            <img src={medium.url} alt="사진" />
            <div className={listCss.textBox}>
              <span className={listCss.title}>{title}</span>
              <br />
              {channelTitle}
              <br />
            </div>
          </div>
        )}
      </>
    );
  }
);
