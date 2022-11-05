// state
//score
// player pick
//ai pick

const playerWinsLSKey = "playerWins";
const AIWinsLSKey = "AIWins";

let state = {
  playerWins: localStorage.getItem(playerWinsLSKey) || 0,
  AIWins: localStorage.getItem(AIWinsLSKey) || 0,
  playerPick: null,
  AIPick: null,
};

const renderScore = () => {
  const pointsElement = document.querySelector(".points");
  pointsElement.innerText = state.playerWins - state.AIWins;
};

const bindPickEvents = () => {
  document.querySelectorAll(".options button").forEach((button) => {
    button.addEventListener("click", pick);  
  });
};

const pick = (e) => {
    pickByPlayer(e.currentTarget.dataset.pick);
    pickByAI();
    hideOptions();
    showFight();
};

const pickByPlayer = (pickedOption) => {
  state = {
    ...state,
    playerPick: pickedOption,
  };
};

const pickByAI = () => {
    const options = ["rock", "paper", "scissors"];
    const AIPick = options[Math.floor(Math.random()* options.length)];

    state = {
        ...state,
        AIPick,
    }
};

const hideOptions = () => {
    document.querySelector(".options").classList.add("hidden");
};

const showFight = () => {
    document.querySelector(".fight").classList.remove("hidden");
    createElementPickedByPlayer();
    createElementPickedByAI();
};

const  createElementPickedByPlayer = () => {
    const playerPick = state.playerPick;

    const buttonElement = document.createElement("div");
    buttonElement.classList.add("button",`button--${playerPick}`);

    const imageContainerElement = document.createElement("div");
    imageContainerElement.classList.add("button__image-container");

    const imgElement = document.createElement("img");
    imgElement.src = `./images/icon-${playerPick}.svg`;
    imgElement.alt = playerPick;

    imageContainerElement.appendChild(imgElement);

    buttonElement.appendChild(imageContainerElement);

    const pickContainerElement = document.querySelector(".pick__container--player");
    pickContainerElement.innerHTML = "";
    pickContainerElement.appendChild(buttonElement);
};

const init = () => {
  renderScore();
  bindPickEvents();
};

init();
