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
    button.addEventListener("click", (e) => {
      pickByPlayer(e.currentTarget.dataset.pick);
      pickByAI();

      console.log(state);
    });
  });
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
}

const init = () => {
  renderScore();
  bindPickEvents();
};

init();
