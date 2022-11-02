import "./App.css";
import DiaryEditor from "./components/DiaryEditor";
import DiaryList from "./components/DiaryList";
import Lifecycle from "./components/Lifecycle";
import OptimizeTest from "./components/OptimizeTest";
import OptimizeTest2 from "./components/OptimizeTest2";
import styled from "styled-components";
import { useState, useRef, useEffect, useMemo } from "react";

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
const DiaryCount = styled.div`
  width: 15%;
  height: 15vh;
  padding: 2%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: white;
  border: 1px solid white;
`;
function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };
  useEffect(() => {
    getData();
  }, []);
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
  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);
  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;
  return (
    <Root>
      <OptimizeTest />
      <OptimizeTest2 />
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryCount>
        <div>전체 일기: {data.length}</div>
        <div>개쩌는 일기: {goodCount}</div>
        <div>ㅈ같은 일기: {badCount}</div>
        <div>개쩌는 비율: {goodRatio}</div>
      </DiaryCount>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </Root>
  );
}

export default App;
