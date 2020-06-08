const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String },

  player1Name: { type: String },
  player1Cards: [String],
  player1Flipped: [String],
  player1Size: { type: Number, default: 10 },
  player1Num: { type: Number },

  player2Name: { type: String },
  player2Cards: [String],
  player2Flipped: [String],
  player2Size: { type: Number, default: 10 },
  player2Num: { type: Number },

  currentPlayer: { type: Number, default: 1 },
  deck: [String],
  trash: [String],
  hand: { type: String, default: "" },
  gameInSession: { type: Boolean, default: false },
  playerPlaying: { type: Boolean, default: false },
  playerWon: { type: Number, default: 0 },
  activePlayers: { type: Number, default: 0 },
  date: { type: Date, default: Date.now },
});

gameSchema.statics.initializeDeck = () => {
  return shuffle([
    "AC",
    "2C",
    "3C",
    "4C",
    "5C",
    "6C",
    "7C",
    "8C",
    "9C",
    "10C",
    "JC",
    "QC",
    "KC",
    "AD",
    "2D",
    "3D",
    "4D",
    "5D",
    "6D",
    "7D",
    "8D",
    "9D",
    "10D",
    "JD",
    "QD",
    "KD",
    "AH",
    "2H",
    "3H",
    "4H",
    "5H",
    "6H",
    "7H",
    "8H",
    "9H",
    "10H",
    "JH",
    "QH",
    "KH",
    "AS",
    "2S",
    "3S",
    "4S",
    "5S",
    "6S",
    "7S",
    "8S",
    "9S",
    "10S",
    "JS",
    "QS",
    "KS",
  ]);
};

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

mongoose.model("Game", gameSchema);
