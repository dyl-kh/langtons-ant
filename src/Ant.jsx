import React, { useState } from "react";

const Ant = (props) => {
  const [directionMenuOpen, setDirectionMenuOpen] = useState(false);
  const directions = ["left", "right", "up", "down"];
  return (
    <div key={props.index} className="relative flex gap-4 items-center">
      <span className="min-w-[20px]">{props.index})</span>
      <input
        type="number"
        value={props.ant.x}
        onChange={(e) =>
          props.handlePositionChange(
            parseInt(e.currentTarget.value),
            props.ant.y,
            props.index
          )
        }
        className="border border-white w-[40px] text-black text-center"
      />
      <input
        type="number"
        value={props.ant.y}
        onChange={(e) =>
          props.handlePositionChange(
            props.ant.x,
            parseInt(e.currentTarget.value),
            props.index
          )
        }
        className="border border-white w-[40px] text-black text-center"
      />
      <span
        className={`cursor-pointer select-none ${
          directionMenuOpen && "bg-white text-black"
        }`}
        onClick={() => setDirectionMenuOpen(!directionMenuOpen)}
      >
        {props.ant.direction}
      </span>
      <div
        className={`absolute z-10 translate-y-[50%] translate-x-[180px]  ${
          !directionMenuOpen && "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {directions.map((direction, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer bg-white text-black"
              onClick={() => {
                setDirectionMenuOpen(false);
                props.handleAntDirectionChange(direction, props.index);
              }}
            >
              {direction}
            </div>
          ))}
          <span
            className="p-2 cursor-pointer bg-red-600"
            onClick={() => setDirectionMenuOpen(false)}
          >
            Click to close
          </span>
        </div>
      </div>
      <div className="flex-1" />
      <div
        className="cursor-pointer"
        onClick={() => props.deleteAnt(props.index)}
      >
        x
      </div>
    </div>
  );
};

export default Ant;
