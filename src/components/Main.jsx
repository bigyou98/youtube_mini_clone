import React, { useEffect, useState } from "react";
import mainCss from "./main.module.css";
import { Detail, Header, List } from ".";
import { youtubeApi } from "../apis/index";

export const Main = () => {
  // 여기에서 검색할 키워드 state 다룬다.
  const [keyword, setKeyword] = useState("");
  const [listItems, setListItems] = useState([]);

  // click된 listItem담는 객체
  const [currentVideo, setCurrentVideo] = useState({});

  const defaultVideos = 26;

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearchBtn = async () => {
    // 클릭시 해당 키워드로 검색api 호출
    // keyword
    try {
      const {
        data: { items },
      } = await youtubeApi.search(defaultVideos, keyword);

      setListItems(items);
      setKeyword("");
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
