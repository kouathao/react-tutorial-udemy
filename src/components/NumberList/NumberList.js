import React from "react";

const NumberList = props => {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default NumberList;
