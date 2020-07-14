import React from "react";

const ScrollTest = (props) => {
  return (
    <>
      {
        <div
          style={{
            backgroundColor: props.color,
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
        </div>
      }
    </>
  );
};

export default ScrollTest;
