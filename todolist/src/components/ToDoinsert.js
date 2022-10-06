import { useCallback, useState } from "react";

export default function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      setValue("");
      e.preventDefault();
    },
    [value]
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        onChange={onChange}
        value={value}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}
