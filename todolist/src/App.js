import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/ToDoinsert";
import TodoListItem from "./components/TodoListItem";
const [todos, setTodos] = useState([
  {
    id: 1,
    test: "리액트 기초 알아보기",
    checked: true,
  },
  {
    id: 2,
    text: "컴포넌트 스타일링 하기",
    checked: true,
  },
  {
    id: 3,
    text: "투두리스트 만들기",
    checked: false,
  },
]);
function App() {
  return (
    <>
      <TodoInsert />
      <TodoList todos={todos}>
        <TodoListItem></TodoListItem>
      </TodoList>
      ;
    </>
  );
}

export default App;
