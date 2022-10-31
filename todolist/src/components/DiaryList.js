import styled from "styled-components";
import Diaryitem from "./DiaryItem";
const ListParent = styled.div`
  width: 400px;
  height: 100vh;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 3px solid white;
  background-color: white;
  color: #555;
`;
const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  return (
    <ListParent className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <Diaryitem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
        ))}
      </div>
    </ListParent>
  );
};
DiaryList.defaultProps = { diaryList: [] };
export default DiaryList;
{
  /* <div key={it.id}>
<div>작성자: {it.author}</div>
<div>일기: {it.content}</div>
<div>감정: {it.emotion}</div>
<div>작성 시간: {it.created_date}</div>
</div> */
}
