import React from "react";

function List(props) {
  const { listTitle } = props;
  
  console.log(props.children);

  const chil = props.children.map((item) => <h1>{item}</h1>)

  return (
    <article>
      <h1>{listTitle}</h1>
      <ul>
        {props.children}
        {chil}
      </ul>
    </article>
  );
}

export default List;
