import React from "react";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";

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
          <ReactFlagsSelect
            countries={["US", "GB", "FR", "DE", "IT"]}
            customLabels={{
              US: "EN-US",
              GB: "EN-GB",
              FR: "FR",
              DE: "DE",
              IT: "IT",
            }}
            showSelectedLabel={true}
            defaultCountry='US'
          />
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
