import React from "react";

function List2(props) {
  const { style } = props;

  console.log(style);

  return (
    <>
      <h1 style={style}>List2</h1>
      {props.children}
    </>
  );
}

export default List2;
