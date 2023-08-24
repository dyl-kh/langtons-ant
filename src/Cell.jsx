import React, { useState, useEffect } from "react";

const Cell = (props) => {
  return (
    <div className={`flex-grow`} style={{ background: props.color }}></div>
  );
};

export default React.memo(Cell);
