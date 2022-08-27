let game = require("./gameLogic");
let aiPlayer = require("./aiPlayer");
import rules from "./rules";
import "./style.scss";
let main = document.getElementById("main");
let currentGame;
let aiPlay;

function createElementClass(className, type = "div") {
  let div = document.createElement(type);
  div.className = className;
  return div;
}

function createElementId(idName, type = "div") {
  let div = document.createElement(type);
  div.id = idName;
  return div;
}

function selectGameMode() {
  let gameTypeSelector = createElementId("gameTypeSelector", "div");
  gameTypeSelector.className = "gameTypeSelector";
  let aiButton = createElementClass("typeSelector", "button");
  aiButton.innerText = "vs AI";
  aiButton.addEventListener("click", () => {
    let gameTypeSelector = document.getElementById("gameTypeSelector");
    gameTypeSelector.className = "gameTypeSelector after";
    setTimeout(() => {
      main.removeChild(gameTypeSelector);
      nameForm("ai");
    }, 300);
  });
  let vsButton = createElementClass("typeSelector", "button");
  vsButton.innerText = "2 Players";
  vsButton.addEventListener("click", () => {
    let gameTypeSelector = document.getElementById("gameTypeSelector");
    gameTypeSelector.className = "gameTypeSelector after";
    setTimeout(() => {
      main.removeChild(gameTypeSelector);
      nameForm("human");
    }, 300);
  });
  gameTypeSelector.appendChild(aiButton);
  gameTypeSelector.appendChild(vsButton);
  main.appendChild(gameTypeSelector);
}

function nameForm(type) {
  let form = document.createElement("form");
  form.id = "playerNames";
  form.method = "get";
  form.action = "";
  let label = document.createElement("label");
  label.for = "player1name";
  label.innerText = "Player 1 Name:";
  let player1name = document.createElement("input");
  player1name.id = "player1name";
  player1name.type = "text";
  player1name.placeholder = "Jhon";
  player1name.autocomplete = "off";
  player1name.name = "player1name";
  let playButton = createElementClass("PlayButton", "button");
  playButton.innerText = "Play!";
  playButton.type = "button";
  if (type == "ai") {
    playButton.addEventListener("click", () => {
      let playerNames = document.getElementById("playerNames");
      playerNames.className = "playerNames after";
      setTimeout(() => {
        main.removeChild(playerNames);
        currentGame = new game("ai", form.player1name.value);
        aiPlay = new aiPlayer(rules.size, currentGame.player2);
        showGame();
      }, 300);
    });
    form.appendChild(label);
    form.appendChild(player1name);
    form.appendChild(playButton);
    main.appendChild(form);
    return;
  }
  let label2 = document.createElement("label");
  label2.for = "player2name";
  label2.innerText = "Player 2 Mame:";
  let player2name = document.createElement("input");
  player2name.id = "player2name";
  player2name.type = "text";
  player2name.placeholder = "Eve";
  player2name.autocomplete = "off";
  player2name.name = "player2name";
  playButton.addEventListener("click", () => {
    let playerNames = document.getElementById("playerNames");
    playerNames.className = "playerNames after";
    setTimeout(() => {
      main.removeChild(playerNames);
      currentGame = new game(
        "human",
        form.player1name.value,
        form.player2name.value
      );
      showGame();
    }, 300);
  });
  form.appendChild(label);
  form.appendChild(player1name);
  form.appendChild(label2);
  form.appendChild(player2name);
  form.appendChild(playButton);
  main.appendChild(form);
}

function showGame() {
  let gameContainer = createElementId("gameContainer");
  let player1Container = createElementId("player1Container");
  console.log(currentGame.player1.board.grid);
  let player1Board = renderBoard(
    currentGame.player1.board.grid,
    "player1board",
    false
  );
  let player2Container = createElementId("player2Container");
  let player2Board = renderBoard(
    currentGame.player2.board.grid,
    "player2Board",
    true
  );
  player1Container.appendChild(player1Board);
  player2Container.appendChild(player2Board);
  gameContainer.appendChild(player1Container);
  gameContainer.appendChild(player2Container);
  main.appendChild(gameContainer);
}

function nextTurn(x, y, type) {
  if (
    currentGame.player1.board.allShipsPlaced() == false ||
    currentGame.player2.board.allShipsPlaced() == false
  ) {
    return;
  }
  if (type == "ai") {
    currentGame.player1.turn(x, y);
    renderBoard(currentGame.player1.board.grid, "player1board", false);
    renderBoard(currentGame.player2.board.grid, "player2Board", true);
    return;
  }
  currentGame.currentPlayer.turn(x, y);
}

function renderBoard(boardArray, id, hidden) {
  let board = document.getElementById(id);
  if (board == undefined) {
    board = createElementId(id);
  }
  board.innerHtml = "";
  for (let i = 0; i < boardArray.length; i++) {
    for (let j = 0; j < boardArray[i].length; j++) {
      let square = document.createElement("div");
      if (hidden == true) {
        if (boardArray[i][j] < 1) {
          square.className = `square x${i}y${j} hidden`;
        } else if (boardArray[i][j] == 2) {
          square.className = `square x${i}y${j} hiddenHitWater`;
        } else if (boardArray[i][j] == 3) {
          square.className = `square x${i}y${j} hiddenHitBoat`;
        }
        square.addEventListener("click", () => {
          nextTurn(i, j, currentGame.type);
        });
      } else {
        if (boardArray[i][j] == 0) {
          square.className = `square x${i}y${j} water`;
        } else if (boardArray[i][j] == 1) {
          square.className = `square x${i}y${j} ship`;
        } else if (boardArray[i][j] == 2) {
          square.className = `square x${i}y${j} HitWater `;
        } else if (boardArray[i][j] == 3) {
          square.className = `square x${i}y${j} HitShip `;
        }
      }
      board.appendChild(square);
    }
  }
  return board;
}

selectGameMode();
