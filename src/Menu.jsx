import React from "react";
import Rule from "./Rule";
import Ant from "./Ant";

const Menu = (props) => {
  const updateHeight = (e) => {
    if (e.target.value > 1000) {
      props.setHeight(1000);
    } else {
      props.setHeight(parseInt(e.target.value));
    }
  };

  const updateWidth = (e) => {
    if (e.target.value > 1000) {
      props.setWidth(1000);
    } else {
      props.setWidth(parseInt(e.target.value));
    }
  };

  const handleClick = () => {
    if (props.isRunning) {
      props.setIsRunning(false);
      props.stop();
    } else {
      props.setIsRunning(true);
      props.start();
    }
  };

  const handleColorChange = (color, index) => {
    const updatedRules = [...props.rules];
    updatedRules[index].color = color.hex;
    props.setRules(updatedRules); // You'll need to pass setRules from the parent if you haven't already.
  };

  const handleDirectionChange = (direction, index) => {
    const updatedRules = [...props.rules];
    updatedRules[index].direction = direction;
    props.setRules(updatedRules); // You'll need to pass setRules from the parent if you haven't already.
  };

  const deleteRule = (index) => {
    // only allow deletion if there are more than 1 rules
    if (props.rules.length > 1) {
      const updatedRules = [...props.rules];
      updatedRules.splice(index, 1);
      props.setRules(updatedRules);
    }
  };

  const addBlankRule = () => {
    const updatedRules = [...props.rules];
    updatedRules.push({ color: "rgb(0,0,0)", direction: "left" });
    props.setRules(updatedRules);
  };

  const handlePositionChange = (x, y, index) => {
    const updatedAnts = [...props.initialAnts];
    updatedAnts[index].x = x;
    updatedAnts[index].y = y;
    props.setInitialAnts(updatedAnts);
  };

  const handleAntDirectionChange = (direction, index) => {
    const updatedAnts = [...props.initialAnts];
    updatedAnts[index].direction = direction;
    props.setInitialAnts(updatedAnts);
  };

  const deleteAnt = (index) => {
    // only allow deletion if there are more than 1 ants
    if (props.initialAnts.length > 1) {
      const updatedAnts = [...props.initialAnts];
      updatedAnts.splice(index, 1);
      props.setInitialAnts(updatedAnts);
    }
  };

  const addBlankAnt = () => {
    const updatedAnts = [...props.initialAnts];
    updatedAnts.push({ x: 25, y: 25, direction: "right" });
    props.setInitialAnts(updatedAnts);
  };

  return (
    <div className="flex  gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 justify-center">
          <div className="flex flex-col ">
            <div className="text-2xl font-semibold">Height</div>
            <input
              type="number"
              value={props.height}
              onChange={(e) => updateHeight(e)}
              className="border border-white w-[100px] text-black"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-semibold">Width</div>
            <input
              type="number"
              value={props.width}
              onChange={(e) => updateWidth(e)}
              className="border border-white w-[100px] text-black"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold">Rules</span>
          <span className="text-sm">color:direction</span>
          {props.rules.map((rule, index) => (
            <Rule
              key={index}
              index={index}
              rule={rule}
              handleColorChange={handleColorChange}
              handleDirectionChange={handleDirectionChange}
              deleteRule={deleteRule}
            />
          ))}
          <div
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={addBlankRule}
          >
            <span className="font-semibold">+</span>
            <span className="">Add Rule</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold">Ants</span>
          <span className="text-sm">x:y:direction</span>
          {props.initialAnts.map((ant, index) => (
            <Ant
              key={index}
              index={index}
              ant={ant}
              handlePositionChange={handlePositionChange}
              handleAntDirectionChange={handleAntDirectionChange}
              deleteAnt={deleteAnt}
            />
          ))}
          <div
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={addBlankAnt}
          >
            <span className="font-semibold">+</span>
            <span className="">Add Ant</span>
          </div>
        </div>
      </div>
      <div
        className={`${
          props.isRunning ? "bg-red-600" : "bg-green-600"
        } p-4 cursor-pointer min-w-[70px] flex items-center justify-center select-none`}
        onClick={handleClick}
      >
        {props.isRunning ? "Stop" : "Start"}
      </div>
    </div>
  );
};

export default Menu;
