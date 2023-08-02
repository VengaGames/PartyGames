const mongoose = require("mongoose");

const MODELNAME = "Game";

const Schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    playerNb: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String },
    type: { type: String, enums: ["card", "tarot", "board", "dice", "other", "nothing"], required: true, description: "If the game is with cards, board, dices, etc..." },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

const GameModel = mongoose.model(MODELNAME, Schema);
module.exports = GameModel;
