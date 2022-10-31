import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import styled from "styled-components";
import { useState, useRef } from "react";
const Root = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, Violet, Orange);
  transition: 1s;
`;
// const DummyList = [
//   {
//     id: 1,
//     author: "짱구 원장님",
//     content: "자 짱구야 팬티 벗어야지",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "집게사장",
//     content: "이봐 징징이 거기 동전 좀 주워줘",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "도라애몽",
//     content: "진구야 말하고 싸랬잖아",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     author: "아구몬",
//     content: "태일아 많이 컸구나",
//     emotion: 1,
//     created_date: new Date().getTime(),
//   },
// ];
function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };
  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };
  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };
  return (
    <Root>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </Root>
  );
}

export default App;
