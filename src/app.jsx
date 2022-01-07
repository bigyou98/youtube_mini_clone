import { useEffect, useState } from "react";
import "./app.css";
import { Header, List } from "./components";

function App() {
  // 여기에서 검색할 키워드 state 다룬다.
  const [keyword, setKeyword] = useState("");
  const [listItems, setListItems] = useState([]);

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearchBtn = () => {
    // 클릭시 해당 키워드로 검색api 호출
  };

  useEffect(() => {
    // 맨처음에 받아올 데이터 api 호출
    // listItems에 저장
  }, []);

  return (
    <div className="Wrapper">
      <Header handleInput={handleInput} handleSearchBtn={handleSearchBtn} />
      <List />
    </div>
  );
}

export default App;
