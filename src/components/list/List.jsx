import React from "react";
import listCss from "./list.module.css";
import { ListItem } from "components/index";

export const List = ({ listItems, setCurrentVideo, miniThum }) => {
  return (
    <div className={listCss.listWrapper}>
      {listItems.map((item) => (
        <ListItem
          key={item.id instanceof Object ? item.id.videoId : item.id}
          listItem={item}
          setCurrentVideo={setCurrentVideo}
          miniThum={miniThum}
        />
      ))}
    </div>
  );
};
