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
console.log("someでは" +
  sheepList.some(function (e) {
    return typeof e === "string";
  }),
  "everyでは" +
  sheepList.every(function (e) {
    return typeof e === "string";
  })
);
