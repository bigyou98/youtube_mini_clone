import React from "react";
import listCss from "./list.module.css";
import { ListItem } from "./index";

export const List = ({ listItems }) => {
  return (
    <div className={listCss.listWrapper}>
      {listItems.map(({ id, snippet }) => (
        <ListItem key={id} listItem={snippet} />
      ))}
    </div>
  );
};
