import { useEffect, useState } from "react";
import "./app.css";
import { Header, List } from "./components";
import { listApi } from "./apis/index";

function App() {
  // 여기에서 검색할 키워드 state 다룬다.
  const [keyword, setKeyword] = useState("");
  const [listItems, setListItems] = useState([]);
  const defaultVideos = 25;

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearchBtn = () => {
    // 클릭시 해당 키워드로 검색api 호출
  };

  const mostPopularVideosApi = async () => {
    try {
      const {
        data: { items },
      } = await listApi.mostPopularVideos(defaultVideos);
      setListItems(items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    mostPopularVideosApi();
  }, []);

  return (
    <div className="Wrapper">
      <Header handleInput={handleInput} handleSearchBtn={handleSearchBtn} />
      <List listItems={listItems} />
    </div>
  );
}

export default App;
