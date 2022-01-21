import React from "react";
import listCss from "./list.module.css";

export const ListItem = React.memo(
  ({ listItem, setCurrentVideo, miniThum }) => {
<<<<<<< HEAD:src/components/ListItem.jsx
    const { title, thumbnails, channelTitle } = listItem.snippet;
    const { medium, default: defaultImg } = thumbnails;
=======
    const {
      title,
      thumbnails: { medium, default: defaultImg },
      channelTitle,
    } = listItem.snippet;
>>>>>>> 3192778e342213014e9269d99a54b7197160a1b8:src/components/list/ListItem.jsx

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
            <img src={medium.url} alt="사진" className={listCss.thumnail} />
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
