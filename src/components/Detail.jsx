import React from "react";
import { Header } from ".";
import detailCss from "./detail.module.css";

export const Detail = ({ currentVideo }) => {
  const {
    id,
    snippet: { channelTitle, description, title, publishedAt, tags },
  } = currentVideo;

  const currentUrl = `https://www.youtube.com/embed/${id}`;

  return (
    <div className={detailCss.wrapper}>
      <iframe
        width="800"
        height="400"
        src={currentUrl}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
};
