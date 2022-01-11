import React from "react";
import listCss from "./list.module.css";
import { ListItem } from "./index";

export const List = ({ listItems, setCurrentVideo }) => {
  return (
    <div className={listCss.listWrapper}>
      {listItems.map((item) => (
        <ListItem
          key={item.id}
          listItem={item}
          setCurrentVideo={setCurrentVideo}
        />
      ))}
    </div>
  );
};
