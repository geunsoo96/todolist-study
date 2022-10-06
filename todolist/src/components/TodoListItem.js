export default function TodoListItem({ todo }) {
  const { id, text, checked } = too;
  return (
    <li className="TodoListItem">
      <div className={cn("checkbox", { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutLineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="edit">
        <MdModeEditOutLine />
      </div>
      <div className="remove">
        <MdRemoveCircleOutLine />
      </div>
    </li>
  );
}
