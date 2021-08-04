const sheepList = [
  "white",
  "black",
  "white",
  "black",
  "white",
  "black",
  "white",
  "black",
  "white",
  "black",
  "white",
  "black",
  ["black"],
  "white",
  "black",
  "black",
  "black",
  "pinky",
  "black",
  "black",
  "black",
  "black",
  "black",
  "black",
];

sheepList.every(function (e) {
  return typeof e !== "number";
});

