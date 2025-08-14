// 🏏 Player 1: Virat Kohli
const player1 = {
  name: "Virat Kohli",
  age: 36,
  sport: "Cricket",
  stats: {
    matches: 500,
    runs: 25000,
    average: 57.2
  }
};

// ⚽ Player 2: Lionel Messi
const player2 = {
  name: "Lionel Messi",
  age: 38,
  sport: "Football",
  stats: {
    matches: 800,
    goals: 720,
    assists: 300
  }
};

// 🧰 Step 1: Object Destructuring for player1
const {
  name: name1,
  sport: sport1,
  stats: { matches: matches1, runs, average }
} = player1;

// 🧾 Step 2: Template Literal Output
log(`Player ${name1} plays ${sport1}.`);
log(`Matches: ${matches1} | Runs: ${runs} | Batting Average: ${average}`);

// 🧰 Step 3: Array of Players + Array Destructuring
const players = [player1, player2];
const [p1, p2] = players;

// Destructure player2
const {
  name: name2,
  sport: sport2,
  stats: { matches: matches2, goals, assists }
} = p2;

// 🧾 Output for player2
log(`Player ${name2} plays ${sport2}.`);
log(`Matches: ${matches2} | Goals: ${goals} | Assists: ${assists}`);

// 📋 Output function
function log(message) {
  document.getElementById("output").innerText += message + "\n";
}