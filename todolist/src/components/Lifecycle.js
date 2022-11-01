import React, { useEffect, useState } from "react";
const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount");
    return () => {
      // Unmount 시점에 실행
      console.log("Unmount");
    };
  }, []);
  return <div>Unmount Testing Component</div>;
};
const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("");
  // useEffect(() => {
  //   console.log("Mount");
  // }, []);
  // useEffect(() => {
  //   console.log("update");
  // });
  // useEffect(() => {
  //   console.log(`count is update: ${count}`);
  //   if (count > 5) {
  //     alert("갈때까지 갔구나");
  //     setCount(1);
  //   }
  //   if (count < -5) {
  //     alert("어어 밀지마라");
  //     setCount(1);
  //   }
  // }, [count]);
  // useEffect(() => {
  //   console.log(`text is update: ${text}`);
  // }, [text]);
  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={toggle}
        style={{
          width: "100px",
          height: "40px",
          border: "none",
          borderRadius: "10px",
          color: "violet",
          cursor: "pointer",
        }}
      >
        ON / OFF
      </button>
      {isVisible && <UnmountTest />}
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </div> */}
    </div>
  );
};
export default Lifecycle;
