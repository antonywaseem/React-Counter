import React from "react";

const Count = ({ count }) => {
  return (
    <div
      style={{
        fontSize: "2em",
        fontWeight: "bold",
        margin: "1em",
        color: "gray",
      }}
    >
      {count}
    </div>
  );
};

export default Count;
