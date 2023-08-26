import React, { useState, useEffect, useRef } from "react";
import Grid from "./Grid";
import Menu from "./Menu";

import { getRule, getNewDirection, getNewCoords } from "./tools";
import toast from "react-hot-toast";

const MainContainer = () => {
  const antFacing = {
    up: "up",
    right: "right",
    down: "down",
    left: "left",
  };

  const [height, setHeight] = useState(50);
  const [width, setWidth] = useState(50);
  const [grid, setGrid] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  //   const [ants, setAnts] = useState([{ x: 25, y: 25, direction: "right" }]);
  const [initialAnts, setInitialAnts] = useState([
    { x: 25, y: 25, direction: "right" },
  ]);
  const [rules, setRules] = useState([
    { color: "rgb(0,0,0)", direction: "left" },
    { color: "rgb(255,255,255)", direction: "right" },
  ]);
  const intervalRef = useRef(null);
  const [iterations, setIterations] = useState(0);

  let interval;
  //   useEffect(() => {
  //     if (isRunning) {

  const start = () => {
    // check all ants are within grid
    if (height < 1) {
      toast.error("Height must be greater than 0");
      return;
    }
    if (width < 1) {
      toast.error("Width must be greater than 0");
      return;
    }
    for (let i = 0; i < initialAnts.length; i++) {
      const ant = initialAnts[i];
      if (ant.x < 0 || ant.x >= height || ant.y < 0 || ant.y >= width) {
        toast.error("Ants must be within grid");
        return;
      }
    }
    // create grid of cell objects with color black and set ants to yellow
    setGrid([]);
    let ants = [...initialAnts];
    const newGrid = Array(height)
      .fill(0)
      .map((_, i) =>
        Array(width)
          .fill(0)
          .map((_, j) => {
            return { color: rules[0].color };
          })
      );
    setGrid(newGrid);

    const moveAnts = () => {
      const currGrid = [...newGrid];

      const newAnts = [];
      for (let i = 0; i < ants.length; i++) {
        const ant = ants[i];
        const rule = getRule(currGrid[ant.x][ant.y].color, rules);
        // const newDirection = getNewDirection(ant.direction, action);
        const [newX, newY, newDirection] = getNewCoords(
          ant.x,
          ant.y,
          rule.direction,
          ant.direction,
          height,
          width
        );
        newAnts.push({ x: newX, y: newY, direction: newDirection });
        // flip color of cell to next color in rules
        const nextColor = rules[(rules.indexOf(rule) + 1) % rules.length].color;
        currGrid[ant.x][ant.y].color = nextColor;
      }

      setIterations((prev) => prev + 1);
      ants = newAnts;
      setGrid(currGrid);
    };
    moveAnts();
    // set interval to move ants
    intervalRef.current = setInterval(moveAnts, 1);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  //   }, [isRunning]);

  return (
    <div className="relative flex flex-col h-full items-center gap-5">
      <div className="flex flex-col items-center w-full justify-center">
        <div className="text-2xl font-semibold">Langton's Ant</div>
        <div className="">By Dylan Khan</div>
      </div>
      <Grid grid={grid} isRunning={isRunning} iterations={iterations} />
      <Menu
        height={height}
        setHeight={setHeight}
        width={width}
        setWidth={setWidth}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        start={start}
        stop={stop}
        rules={rules}
        setRules={setRules}
        setInitialAnts={setInitialAnts}
        initialAnts={initialAnts}
      />
    </div>
  );
};

export default MainContainer;
