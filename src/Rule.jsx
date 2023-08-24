import React, { useState } from "react";
import { CompactPicker } from "react-color";

const Rule = (props) => {
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [directionPickerOpen, setDirectionPickerOpen] = useState(false);
  const directions = ["left", "right", "straight", "back"];
  return (
    <div key={props.index} className="relative flex gap-4 items-center">
      <span className="min-w-[20px]">{props.index})</span>
      <span
        className={`w-4 h-4 border-white border cursor-pointer `}
        style={{ background: props.rule.color }}
        onClick={() => setColorPickerOpen(!colorPickerOpen)}
      />
      <div
        className={`absolute z-10 translate-y-[65%] translate-x-[13px]  ${
          !colorPickerOpen && "opacity-0 pointer-events-none"
        }`}
      >
        <CompactPicker
          color={props.rule.color}
          onChangeComplete={(color) => {
            setColorPickerOpen(false);
            props.handleColorChange(color, props.index);
          }}
        />
        <span
          className="p-2 cursor-pointer bg-red-600"
          onClick={() => setColorPickerOpen(false)}
        >
          Click to close
        </span>
      </div>
      <span
        className={`cursor-pointer select-none ${
          directionPickerOpen && "bg-white text-black"
        }`}
        onClick={() => setDirectionPickerOpen(!directionPickerOpen)}
      >
        {props.rule.direction}
      </span>
      <div
        className={`absolute z-10 translate-y-[50%] translate-x-[100px]  ${
          !directionPickerOpen && "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-1">
          {directions.map((direction, index) => (
            <div
              key={index}
              className="p-2 cursor-pointer bg-white text-black"
              onClick={() => {
                setDirectionPickerOpen(false);
                props.handleDirectionChange(direction, props.index);
              }}
            >
              {direction}
            </div>
          ))}
          <span
            className="p-2 cursor-pointer bg-red-600"
            onClick={() => setDirectionPickerOpen(false)}
          >
            Click to close
          </span>
        </div>
      </div>
      <div className="flex-1" />
      <div
        className="cursor-pointer"
        onClick={() => props.deleteRule(props.index)}
      >
        x
      </div>
    </div>
  );
};

export default Rule;
