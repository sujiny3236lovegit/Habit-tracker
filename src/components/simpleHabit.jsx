import React, { useEffect, useRef, useState } from 'react';

const SimpleHabit = (props) => {
  // state = {
  //   count: 0,
  // };
  const [count, setCount] = useState(0); //useState함수(api)로 state설정, state업데이트 함수를 받는다.([count, setCount])
  const spanRef = useRef();

  handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(()=> {
    console.log(`mounted & updated! : ${count}`);
  }, []);
  
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">Reading</span>
      <span className="habit-count">{count}</span>
      <button
        className="habit-button habit-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;


