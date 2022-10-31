import { useRef, useState } from "react";
import styled from "styled-components";
const ItemParent = styled.div`
  width: 333px;
  background: linear-gradient(45deg, Violet, Orange);
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  color: white;
  & > div:nth-child(1) {
    border-bottom: 1px solid white;
    & > span:nth-child(3) {
      font-size: 14px;
    }
  }
  & > button {
    width: 120px;
    border: none;
    border-radius: 5px;
    background-color: white;
    color: violet;
    cursor: pointer;
  }
`;
const Diaryitem = ({
  onEdit,
  onRemove,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제 하시겠습니까?`)) {
      onRemove(id);
    }
  };
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }
    if (window.confirm(`일기를 수정하시겠습니까?`)) {
      onEdit(id, localContent);
      toggleIsEdit();
    }
  };
  return (
    <ItemParent>
      <div>
        <span>
          작성자: {author} | 감정점수: {emotion}
        </span>
        <br />
        <span>{new Date(created_date).toLocaleString()}</span>
      </div>
      <div>
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            ></textarea>
          </>
        ) : (
          <>{content}</>
        )}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          &nbsp;
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          &nbsp;
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </ItemParent>
  );
};
export default Diaryitem;
