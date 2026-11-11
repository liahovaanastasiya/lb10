let userName = "";
let currentRound = 0;
const maxRounds = 3;
let userWon = false;

const fruits = ["🍎", "🍐", "🍋", "🍑", "🍒"];

const userNameElem = document.getElementById("userName");
const roundInfoElem = document.getElementById("roundInfo");
const generateBtn = document.getElementById("generateBtn");
const gameStatusElem = document.getElementById("gameStatus");

window.onload = function() {
    while (!userName || userName.trim() === "") {
        userName = prompt("Введіть ваше ім'я:");
        if (userName === null) {
            userName = "User";
            break;
        }
        userName = userName.trim();
    }
    userNameElem.textContent = userName;
    roundInfoElem.textContent = `Спроба ${currentRound} з ${maxRounds}`;
};

generateBtn.onclick = function() {
    if (currentRound >= maxRounds) return;

    currentRound++;
    roundInfoElem.textContent = `Спроба ${currentRound} з ${maxRounds}`;

    let roundWin = false;

    for (let i = 0; i < 3; i++) {
        let shuffled = [...fruits].sort(() => 0.5 - Math.random());
        let r1 = shuffled[0];
        let r2 = shuffled[1];
        let r3 = shuffled[2];

        document.getElementById(`c${i}0`).textContent = r1;
        document.getElementById(`c${i}1`).textContent = r2;
        document.getElementById(`c${i}2`).textContent = r3;

        if (r1 === r2 && r2 === r3) {
            roundWin = true;
        }
    }

    if (roundWin) {
        userWon = true;
    }

    if (currentRound === maxRounds) {
        generateBtn.disabled = true;
        if (userWon) {
            gameStatusElem.textContent = ` Вітаємо, ${userName}! Ви виграли, зібравши ряд однакових картинок!`;
            gameStatusElem.style.color = "#00e676";
        } else {
            gameStatusElem.textContent = ` На жаль, ${userName}, цього разу ряд однакових картинок не випав. Спробуйте ще!`;
            gameStatusElem.style.color = "#ff5252";
        }
    }
};