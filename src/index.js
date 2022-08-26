let game = require("./gameLogic");
import "./style.scss";
let main = document.getElementById("main");
let currentGame;

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
      }, 300);
    });
    form.appendChild(label);
    form.appendChild(player1name);
    form.appendChild(playButton);
    main.appendChild(form);
    showAiGame();
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
      showHumanGame();
    }, 300);
  });
  form.appendChild(label);
  form.appendChild(player1name);
  form.appendChild(label2);
  form.appendChild(player2name);
  form.appendChild(playButton);
  main.appendChild(form);
}

function showAiGame() {}

function showHumanGame() {}

function renderBoard(boardArray) {
  let board = document.getElementById("board");
  if (board == undefined) {
    board = createElementId("board");
  }
  board.innerHtml = "";
  for (let i = 0; i < boardArray.length; i++) {
    let row = createElementClass(`row`);
    for (let j = 0; j < boardArray[i].length; j++) {
      let square = createElementClass(`square x${i}y${j}`);
      row.appendChild(square);
    }
    board.appendChild(row);
  }
  return board;
}
selectGameMode();
