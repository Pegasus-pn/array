Array.prototype.filter();

// cb関数を通りtrueだったものだけで作られた配列が返る

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

sheepList.filter(function (e, i) {
  return e === "black";
});
