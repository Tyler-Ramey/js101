function isColorValid (color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid2 (color) {
  return color === "blue" || color === "green";
}

let isColorValid3 = color => color === "blue" || color === "green";

const isColorValid4 = color => ["blue", "green"].includes(color);