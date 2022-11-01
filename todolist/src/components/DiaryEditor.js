import { useState, useRef } from "react";
import styled from "styled-components";
const DiaryParent = styled.div`
  width: 400px;
  height: 700px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 3px solid white;
  border-radius: 10px;
  background-color: white;
  color: #555;
  & > h2 {
    color: #555;
    font-size: 1.5rem;
  }
  & > input {
    width: 300px;
    height: 30px;
    padding: 10px;
    background-color: #eee;
    border: none;
    border-radius: 10px;
    color: #555;
    font-size: 1rem;
  }
  & > textarea {
    width: 300px;
    height: 300px;
    padding: 10px;
    resize: none;
    background-color: #eee;
    border: none;
    border-radius: 10px;
    color: #555;
    font-size: 1rem;
  }
  & > select {
    width: 50px;
    height: 20px;
    border: 1px solid #777;
    border-radius: 5px;
  }
  & > button {
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 1.5rem;
    background: linear-gradient(45deg, Violet, Orange);
  }
`;
const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  // 첫번째 방식
  // const [author, setAuthor] = useState("");
  /* value={author} */
  /* onChange={(e)=>{
    setAuthor(e.target.value)
  }} */
  // const [content, setContent] = useState("");
  // 두번째 방식
  /* 
          <input
          name="author"
          value={state.author}
          onChange={(e) => {
            setState({
              ...state,
              author: e.target.value,
            });
          }}
        />
        <textarea
          value={state.content}
          onChange={(e) => {
            setState({
              ...state,
              content: e.target.value,
            });
          }}
        ></textarea>
  */
  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (state.author.length < 1) {
      // alert("작성자는 최소 1글자 이상 입력해주세요");
      // focus
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      // alert("일기 본문은 최소 5글자 이상 입력해주세요");
      // focus
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장이 완료되었습니다.");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };
  return (
    <DiaryParent className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <input
        ref={authorInput}
        name="author"
        value={state.author}
        onChange={handleChangeState}
        placeholder="작성자"
      />
      <textarea
        ref={contentInput}
        name="content"
        value={state.content}
        onChange={handleChangeState}
        placeholder="일기 내용"
      ></textarea>
      감정상태(기분좋음 /5 → 1/ 기분나쁨)
      <select name="emotion" value={state.emotion} onChange={handleChangeState}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <button onClick={handleSubmit}>일기 저장하기</button>
    </DiaryParent>
  );
};
export default DiaryEditor;
