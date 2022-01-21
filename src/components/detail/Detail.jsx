import React from "react";
import { List } from "components";
import detailCss from "./detail.module.css";

export const Detail = ({ currentVideo, listItems, setCurrentVideo, id }) => {
  const {
    snippet: { channelTitle, description, title, publishedAt, tags },
  } = currentVideo;

  return (
    <div className={detailCss.wrapper}>
      <div className={detailCss.contentBox}>
        <iframe
          className={detailCss.iframe}
          type="text/html"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        <div className={detailCss.descriptionBox}>
          <div className={detailCss.title}>{title}</div>
          <div className={detailCss.channelTitle}>{channelTitle}</div>
          {publishedAt}
          {tags}
          <br />
          <pre className={detailCss.pre}>{description}</pre>
        </div>
      </div>
      <div className={detailCss.list}>
        <List
          listItems={listItems}
          setCurrentVideo={setCurrentVideo}
          miniThum={"detail"}
        />
      </div>
    </div>
  );
};
