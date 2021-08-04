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
  
sheepList.find(function (e) {
    return e !== "black" && e !== "white";
})
