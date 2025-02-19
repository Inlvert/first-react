import React from "react";
import MiddleComp from "../Middle";

function ImgWrapper(props) {
  const { style, ...restProps } = props;
  console.log(props);
  console.log(style);
  console.log(restProps);

  return (
    <>
      <div style={style}>
        ImgWrapper
        {props.children}
      </div>
        <MiddleComp {...restProps} />
    </>
  );
}

export default ImgWrapper;
