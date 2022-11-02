import React, { useEffect, useState } from "react";
const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA update - count: ${count}`);
  });
  return <div>{count}</div>;
});
const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB update - obj: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};
const areEqual = (prevProps, nextProps) => {
  // return true 이전 프롭스 현재 프롭스가 같다 --> 리랜더링 일으키지않음
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  }
  return false;
};
const MemoizedCounterB = React.memo(CounterB, areEqual);
const OptimizeTest2 = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
      </div>
    </div>
  );
};
export default OptimizeTest2;
