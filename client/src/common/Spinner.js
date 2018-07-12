import React from "react";
import spinner from "./spinner1.gif";

export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{
          width: "4rem",
          margin: "auto",
          display: "block"
        }}
        alt="Loading..."
      />
    </div>
  );
};
