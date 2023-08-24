export const getRule = (color, rules) => {
  const rule = rules.find((rule) => rule.color === color);
  return rule;
};

export const getNewDirection = (direction, action) => {
  const directions = ["up", "right", "down", "left"];
  const currIndex = directions.indexOf(direction);
  let newIndex;
  if (action === "right") {
    newIndex = currIndex + 1;
  } else {
    newIndex = currIndex - 1;
  }
  if (newIndex === -1) {
    newIndex = 3;
  } else if (newIndex === 4) {
    newIndex = 0;
  }
  return directions[newIndex];
};

const antFacing = {
  up: "up",
  right: "right",
  down: "down",
  left: "left",
};

export const getNewCoords = (
  x,
  y,
  turnDirection,
  currentDirection,
  height,
  width
) => {
  if (currentDirection === antFacing.up) {
    if (turnDirection === "right") {
      if (x === width - 1) {
        return [0, y, "right"];
      }
      return [x + 1, y, "right"];
    } else if (turnDirection === "left") {
      if (x === 0) {
        return [width - 1, y, "left"];
      }
      return [x - 1, y, "left"];
    } else if (turnDirection === "straight") {
      if (y === 0) {
        return [x, height - 1, "up"];
      }
      return [x, y - 1, "up"];
    } else if (turnDirection === "back") {
      if (y === height - 1) {
        return [x, 0, "down"];
      }
      return [x, y + 1, "down"];
    }
  } else if (currentDirection === antFacing.right) {
    if (turnDirection === "right") {
      if (y === height - 1) {
        return [x, 0, "down"];
      }
      return [x, y + 1, "down"];
    } else if (turnDirection === "left") {
      if (y === 0) {
        return [x, height - 1, "up"];
      }
      return [x, y - 1, "up"];
    } else if (turnDirection === "straight") {
      if (x === width - 1) {
        return [0, y, "right"];
      }
      return [x + 1, y, "right"];
    } else if (turnDirection === "back") {
      if (x === 0) {
        return [width - 1, y, "left"];
      }
      return [x - 1, y, "left"];
    }
  } else if (currentDirection === antFacing.down) {
    if (turnDirection === "right") {
      if (x === 0) {
        return [width - 1, y, "left"];
      }
      return [x - 1, y, "left"];
    } else if (turnDirection === "left") {
      if (x === width - 1) {
        return [0, y, "right"];
      }
      return [x + 1, y, "right"];
    } else if (turnDirection === "straight") {
      if (y === height - 1) {
        return [x, 0, "down"];
      }
      return [x, y + 1, "down"];
    } else if (turnDirection === "back") {
      if (y === 0) {
        return [x, height - 1, "up"];
      }
      return [x, y - 1, "up"];
    }
  } else if (currentDirection === antFacing.left) {
    if (turnDirection === "right") {
      if (y === 0) {
        return [x, height - 1, "up"];
      }
      return [x, y - 1, "up"];
    } else if (turnDirection === "left") {
      if (y === height - 1) {
        return [x, 0, "down"];
      }
      return [x, y + 1, "down"];
    } else if (turnDirection === "straight") {
      if (x === 0) {
        return [width - 1, y, "left"];
      }
      return [x - 1, y, "left"];
    } else if (turnDirection === "back") {
      if (x === width - 1) {
        return [0, y, "right"];
      }
      return [x + 1, y, "right"];
    }
  }
};
