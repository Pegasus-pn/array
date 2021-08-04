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

sheepList.some(function (e, i) {
    return typeof e !== 'string';
});


