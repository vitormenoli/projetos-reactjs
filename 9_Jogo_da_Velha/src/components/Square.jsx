import React from "react";

function Square({ value, onClick }) {
  const className = value ? `square filled-${value}` : "square";

  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;