import React from "react";

import Cell from "./Cell";

const Grid = (props) => {
  return (
    <div className="relative border border-white h-[500px] w-[500px] flex flex-col ">
      <div className="absolute top-1/2 left-[105%]">
        Iterations {props.iterations}
      </div>
      {props.grid.map((row, i) => (
        <div className="flex flex-row flex-grow" key={i}>
          {row.map((cell, j) => (
            <Cell
              key={j}
              x={i}
              y={j}
              //   ants={props.ants}
              color={props.grid[i][j].color}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
