import React, { useCallback, useEffect, useState } from "react";
import mainCss from "./main.module.css";
import { Detail, Header, List } from "components/index";
import { youtubeApi } from "apis/index";

export const Main = () => {
  const [keyword, setKeyword] = useState("");
  const [listItems, setListItems] = useState([]);

  const [currentVideo, setCurrentVideo] = useState({});

  const defaultVideos = 26;

  const handleInput = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);

  const handleSearchBtn = async () => {
    try {
      const {
        data: { items },
      } = await youtubeApi.search(defaultVideos, keyword);

      setListItems(items);
      setKeyword("");
      setCurrentVideo({});
    } catch (e) {
      console.log(e);
    }
  };

  const mostPopularVideosApi = async () => {
    try {
      const {
        data: { items },
      } = await youtubeApi.mostPopularVideos(defaultVideos);
      setListItems(items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    mostPopularVideosApi();
  }, []);

  return (
    <div className={mainCss.wrapper}>
      <Header
        handleInput={handleInput}
        handleSearchBtn={handleSearchBtn}
        keyword={keyword}
        setCurrentVideo={setCurrentVideo}
      />
      {Object.keys(currentVideo).length === 0 ? (
        <List listItems={listItems} setCurrentVideo={setCurrentVideo} />
      ) : (
        <Detail
          currentVideo={currentVideo}
          listItems={listItems}
          setCurrentVideo={setCurrentVideo}
          id={
            currentVideo.id instanceof Object
              ? currentVideo.id.videoId
              : currentVideo.id
          }
        />
      )}
    </div>
  );
};
