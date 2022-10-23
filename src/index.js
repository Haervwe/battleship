let game = require("./gameLogic");
let aiPlayer = require("./aiPlayer");
import rules from "./rules";
import "./style.scss";
let main = document.getElementById("main");
let currentGame;
let aiPlay;
let direction = "y";
let tempShipSize;

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

function createDock(id) {
  let dock = createElementClass("dock");
  dock.id = id;
  for (let i = 0; i < rules.ships.length; i++) {
    let ship = createElementClass(`dockedShip size${rules.ships[i]}`);
    ship.id = `ship${i}`;
    switch (rules.ships[i]) {
      case 5:
        ship.innerText = "A";
        break;
      case 4:
        ship.innerText = "F";
        break;
      case 3:
        ship.innerText = "L";
        break;
      case 2:
        ship.innerText = "O";
        break;
    }
    ship.draggable = "true";
    ship.addEventListener("dragstart", (e) => {
      let shipElement = JSON.stringify({
        id: ship.id,
        index: i,
        size: rules.ships[i],
      });
      tempShipSize = rules.ships[i];
      e.dataTransfer.setData("text/html", shipElement);
    });
    dock.appendChild(ship);
  }
  return dock;
}

function nameForm(type) {
  let playerDiv = document.createElement("div");
  playerDiv.id = "player1NameContainer";
  let player2Div = document.createElement("div");
  player2Div.id = "player2NameContainer";
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
        aiPlay = new aiPlayer(
          rules.size,
          currentGame.player2,
          currentGame.player1
        );
        aiPlay.placeShips();
        showGame();
      }, 300);
    });
    playerDiv.appendChild(label);
    playerDiv.appendChild(player1name);
    form.appendChild(playerDiv);
    form.appendChild(playButton);
    main.appendChild(form);
    return;
  }
  let label2 = document.createElement("label");
  label2.for = "player2name";
  label2.innerText = "Player 2 Name:";
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
  playerDiv.appendChild(label);
  playerDiv.appendChild(player1name);
  form.appendChild(playerDiv);
  player2Div.appendChild(label2);
  player2Div.appendChild(player2name);
  form.appendChild(player2Div);
  form.appendChild(playButton);
  main.appendChild(form);
}

function showGame() {
  let gameContainer = createElementId("gameContainer");
  let player1Container = createElementId("player1Container");
  let player1Board = renderBoard(currentGame.player1, "player1Board", false);
  let player2Container = createElementId("player2Container");
  player2Container.className = "playerContainer";
  player1Container.className = "playerContainer";
  let player2Board = renderBoard(currentGame.player2, "player2Board", true);
  player1Board.className = "playerBoard";
  player2Board.className = "playerBoard";
  player1Container.appendChild(createDock("player1Dock"));
  player1Container.appendChild(player1Board);
  let buttonContainer = document.createElement("div");
  buttonContainer.id = "buttonContainer";
  if (currentGame.type != "ai") {
    player2Container.appendChild(createDock("player2Dock"));
  }
  player2Container.appendChild(player2Board);
  gameContainer.appendChild(player1Container);
  gameContainer.appendChild(player2Container);
  let rotateButton = document.createElement("button");
  rotateButton.innerHTML = "Rotate Ship";
  rotateButton.id = "rotateShipButton";
  rotateButton.addEventListener("click", () => {
    if (direction == "x") {
      direction = "y";
    } else {
      direction = "x";
    }
  });
  if (currentGame.type != "ai") {
    let nextTurnButton = document.createElement("button");
    nextTurnButton.innerHTML = "Next Turn";
    nextTurnButton.id = "nextTurnButton";
    nextTurnButton.addEventListener("click", () => {
      if (currentGame.currentPlayer.board.allShipsPlaced() == true) {
        if (currentGame.currentPlayer == currentGame.player1) {
          player1Board = renderBoard(currentGame.player1, "player1Board", true);
          player2Board = renderBoard(
            currentGame.player2,
            "player2Board",
            false
          );
          currentGame.nextPlayer();
        } else {
          player1Board = renderBoard(currentGame.player1, "player1Board", true);
          player2Board = renderBoard(currentGame.player2, "player2Board", true);
          currentGame.nextPlayer();
          nextTurnButton.parentElement.removeChild(nextTurnButton);
        }
      }
    });
    buttonContainer.appendChild(nextTurnButton);
  }
  buttonContainer.appendChild(rotateButton);
  gameContainer.appendChild(buttonContainer);
  main.appendChild(gameContainer);
}

function nextTurn(x, y, type) {
  if (
    currentGame.player1.board.allShipsPlaced() == false ||
    currentGame.player2.board.allShipsPlaced() == false
  ) {
    return;
  }
  let player1Board = document.getElementById("player1Board");
  let player2Board = document.getElementById("player2Board");
  if (type == "ai") {
    let playermove = currentGame.turn(x, y);
    if (playermove != undefined) {
      if (playermove == true) {
        renderWinner(currentGame.player1.name);
      }
      return;
    }
    player2Board = renderBoard(currentGame.player2, "player2Board", true);

    let aiMove = aiPlay.play();
    let result = currentGame.turn(aiMove.x, aiMove.y);
    while (result != undefined) {
      if (result == true) {
        renderWinner(currentGame.currentPlayer.name);
        return;
      }
      aiMove = aiPlay.play();
      result = currentGame.turn(aiMove.x, aiMove.y);
    }
    player1Board = renderBoard(currentGame.player1, "player1Board", false);
    return;
  } else {
    let playermove = currentGame.turn(x, y);
    if (playermove != undefined) {
      if (playermove == true) {
        renderWinner(currentGame.currentPlayer.name);
      }
      return;
    }
    player1Board = renderBoard(currentGame.player1, "player1Board", true);
    player2Board = renderBoard(currentGame.player2, "player2Board", true);
  }
}

function renderBoard(player, id, hidden) {
  let board = document.getElementById(id);
  let boardArray = player.board.grid;
  if (board == undefined) {
    board = createElementId(id);
  } else {
    board.innerHTML = "";
  }
  for (let i = 0; i < boardArray.length; i++) {
    for (let j = 0; j < boardArray[i].length; j++) {
      let square = document.createElement("div");
      if (hidden == true) {
        if (boardArray[i][j] <= 1) {
          square.className = `square x${i}y${j} hidden`;
        } else if (boardArray[i][j] == 2) {
          square.className = `square x${i}y${j} hiddenHitBoat`;
        } else if (boardArray[i][j] == 3) {
          square.className = `square x${i}y${j} hiddenHitWater`;
        }
        square.addEventListener("click", () => {
          if (
            id == "player1Board" &&
            currentGame.currentPlayer == currentGame.player2
          ) {
            nextTurn(i, j, currentGame.type);
          }
          if (
            id == "player2Board" &&
            currentGame.currentPlayer == currentGame.player1
          ) {
            nextTurn(i, j, currentGame.type);
          }
        });
      } else {
        if (boardArray[i][j] == 0) {
          square.className = `square x${i}y${j} water`;
          square.addEventListener("dragover", (e) => {
            e.preventDefault();
            if (direction == "y") {
              for (let r = 0; r < tempShipSize; r++) {
                let square = document.querySelector(`.x${i}y${j + r}`);
                if (square.className == `square x${i}y${j + r} water`) {
                  square.className = `square x${i}y${j + r} hoverShip`;
                }
              }
            }
            if (direction == "x") {
              for (let r = 0; r < tempShipSize; r++) {
                let square = document.querySelector(`.x${i + r}y${j}`);
                if (square.className == `square x${i + r}y${j} water`) {
                  square.className = `square x${i + r}y${j} hoverShip`;
                }
              }
            }
          });
          square.addEventListener("dragleave", () => {
            if (direction == "y") {
              for (let r = 0; r < tempShipSize; r++) {
                let square = document.querySelector(`.x${i}y${j + r}`);
                if (square.className == `square x${i}y${j + r} hoverShip`) {
                  square.className = `square x${i}y${j + r} water`;
                }
              }
            }
            if (direction == "x") {
              for (let r = 0; r < tempShipSize; r++) {
                let square = document.querySelector(`.x${i + r}y${j}`);
                if (square.className == `square x${i + r}y${j} hoverShip`) {
                  square.className = `square x${i + r}y${j} water`;
                }
              }
            }
          });
          square.addEventListener("drop", (e) => {
            e.preventDefault();
            let shipElement = JSON.parse(e.dataTransfer.getData("text/html"));
            let temp = document.getElementById(shipElement.id);
            let placed = currentGame.currentPlayer.board.placeShip(
              shipElement.index,
              { x: i, y: j },
              direction
            );
            if (typeof placed != "string") {
              temp.parentNode.removeChild(temp);
            }
            if (currentGame.currentPlayer == currentGame.player1) {
              let newBoard = renderBoard(
                currentGame.player1,
                "player1Board",
                false
              );
              newBoard.className = "playerBoard";
              let playerContainerTemp =
                document.getElementById("player1Container");
              playerContainerTemp.appendChild(newBoard);
              if (currentGame.player1.board.allShipsPlaced() == true) {
                let dock = document.getElementById("player1Dock");
                dock.parentNode.removeChild(dock);
                if (currentGame.type == "ai") {
                  let button = document.getElementById("rotateShipButton");
                  button.parentNode.removeChild(button);
                }
              }
            } else {
              let newBoard = renderBoard(
                currentGame.player2,
                "player2Board",
                false
              );
              newBoard.className = "playerBoard";
              let playerContainerTemp =
                document.getElementById("player2Container");
              playerContainerTemp.appendChild(newBoard);
            }
            if (currentGame.player2.board.allShipsPlaced() == true) {
              let dock = document.getElementById("player2Dock");
              if (dock != undefined) {
                dock.parentNode.removeChild(dock);
              }
              if (currentGame.type != "ai") {
                let button = document.getElementById("rotateShipButton");
                button.parentNode.removeChild(button);
              }
            }
          });
        } else if (boardArray[i][j] == 1) {
          square.className = `square x${i}y${j} ship`;
        } else if (boardArray[i][j] == 2) {
          square.className = `square x${i}y${j} hitShip `;
        } else if (boardArray[i][j] == 3) {
          square.className = `square x${i}y${j} hitWater `;
        }
      }
      board.appendChild(square);
    }
  }
  return board;
}

function renderHeader() {
  let header = createElementId("header", "div");
  let headerText = createElementId("headerText", "h1");
  headerText.innerText = "BATTLESHIP";
  header.appendChild(headerText);
  main.appendChild(header);
}

function renderFooter() {
  let footer = createElementId("footer", "div");
  let footerText = createElementId("footerText", "h3");
  footerText.innerText = "Made by Haervwe";
  footer.appendChild(footerText);
  main.appendChild(footer);
}

function renderWinner(player) {
  let gameContainer = document.getElementById("gameContainer");
  gameContainer.parentElement.removeChild(gameContainer);
  let winnerDiv = createElementId("winnerDiv");
  let winner = createElementId("winner");
  winner.innerText = `${player} wins the game`;
  let restartBtn = document.createElement("button");
  restartBtn.id = "restartBtn";
  restartBtn.innerText = "Restart Game";
  restartBtn.addEventListener("click", () => {
    let winnerDiv = document.getElementById("winnerDiv");
    winnerDiv.parentElement.removeChild(winnerDiv);
    selectGameMode();
  });
  winnerDiv.appendChild(winner);
  winnerDiv.appendChild(restartBtn);
  main.appendChild(winnerDiv);
}

//init

renderHeader();
selectGameMode();
renderFooter();
