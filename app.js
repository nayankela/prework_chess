// Checkpoint 1 | Creating the queen object
var queen = {
  direction: "S",
  position: {
    x: 4,
    y: 0,
  },
  whereabouts: [],
};

// Checkpoint 2 | Turning the queen
function changeDirection(direction) {
  switch (direction) {
    case "N":
      queen.direction = "N";
      break;
    case "E":
      queen.direction = "E";
      break;
    case "W":
      queen.direction = "W";
      break;
    case "SE":
      queen.direction = "SE";
      break;

    case "NE":
      queen.direction = "NE";
      break;
    case "NW":
      queen.direction = "NW";
      break;
    case "SW":
      queen.direction = "SW";
      break;
    default:
      console.error("Direction not Exist");;
      break;
  }
  console.log("Queen Current Direction:- " + queen.direction);
}
// Checkpoint 3 | Moving the queen
function moveForward() {
  switch (queen.direction) {
    case "S":
      queen.position.y = queen.position.y + 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "N":
      queen.position.y = queen.position.y - 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "E":
      queen.position.x = queen.position.x + 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "W":
      queen.position.x = queen.position.x - 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "SE":
      queen.position.x = queen.position.x + 1;
      queen.position.y = queen.position.y + 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "SW":
      queen.position.x = queen.position.x - 1;
      queen.position.y = queen.position.y - 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "NE":
      queen.position.x = queen.position.x - 1;
      queen.position.y = queen.position.y + 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "NW":
      queen.position.x = queen.position.x + 1;
      queen.position.y = queen.position.y - 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    default:
      console.error("Invalid Direction");
      break;
  }
  IsQueenExceeded();
  updatePosition();
}


// Checkpoint 4 | Jump move the queen
function jumpMoveForward(steps) {
  switch (queen.direction) {
    case "S":
      queen.position.y = queen.position.y + steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "N":
      queen.position.y = queen.position.y - steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "E":
      queen.position.x = queen.position.x + steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "W":
      queen.position.x = queen.position.x - steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "SE":
      queen.position.x = queen.position.x + steps;
      queen.position.y = queen.position.y + steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "SW":
      queen.position.x = queen.position.x - steps;
      queen.position.y = queen.position.y - steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "NE":
      queen.position.x = queen.position.x - steps;
      queen.position.y = queen.position.y + steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "NW":
      queen.position.x = queen.position.x + steps;
      queen.position.y = queen.position.y - steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    default:
      console.error("Invalid Direction");
      break;
  }
  IsQueenExceeded();
  updatePosition();

}

// Checkpoint 5 |  Tracking the position
positionLog =

  [["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];

function updatePosition() {
  if(!IsQueenExceeded()){
  queen.whereabouts.push(positionLog[queen.position.y][queen.position.x]);
  }
}

//Bonus 1 - Gotta keep her in the battle!

function IsQueenExceeded() {
  if (queen.position.y > 7 || queen.position.y < 0 || queen.position.x > 7 || queen.position.x < 0) {
    console.error("Exceeded the Moves");
  }
}

// Bonus 2 - The queen is more powerful than what you think!

// Moving back the queen
function moveBackward() {
  switch (queen.direction) {
    case "S":
      queen.position.y = queen.position.y - 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "N":
      queen.position.y = queen.position.y + 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "E":
      queen.position.x = queen.position.x - 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "W":
      queen.position.x = queen.position.x + 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "SE":
      queen.position.x = queen.position.x - 1;
      queen.position.y = queen.position.y - 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "SW":
      queen.position.x = queen.position.x + 1;
      queen.position.y = queen.position.y + 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "NE":
      queen.position.x = queen.position.x + 1;
      queen.position.y = queen.position.y - 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "NW":
      queen.position.x = queen.position.x - 1;
      queen.position.y = queen.position.y + 1;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    default:
      console.error("Invalid Direction");
      break;
  }
  IsQueenExceeded();
  updatePosition();
}

//Jump back the queen
function jumpMoveBackward(steps) {
  switch (queen.direction) {
    case "S":
      queen.position.y = queen.position.y - steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "N":
      queen.position.y = queen.position.y + steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "E":
      queen.position.x = queen.position.x - steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "W":
      queen.position.x = queen.position.x + steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "SE":
      queen.position.x = queen.position.x - steps;
      queen.position.y = queen.position.y - steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "SW":
      queen.position.x = queen.position.x + steps;
      queen.position.y = queen.position.y + steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "NE":
      queen.position.x = queen.position.x + steps;
      queen.position.y = queen.position.y - steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    case "NW":
      queen.position.x = queen.position.x - steps;
      queen.position.y = queen.position.y + steps;
      console.log(queen.position.x + "," + queen.position.y);
      break;
    default:
      console.error("Invalid Direction");
      break;
  }
  IsQueenExceeded();
  updatePosition();
}

//performing Operations
console.log("---------------------------------");
console.log("***PERFORMING OPERATIONS***")
console.log("---------------------------------");
console.log("Queen Direction:- " + queen.direction);
jumpMoveForward(2);
changeDirection('SE');
moveForward();
moveForward();
changeDirection('W');
jumpMoveForward(2);
changeDirection('E');
moveBackward();
moveBackward();
console.log("Positon Log:-");
console.log(queen.whereabouts);
