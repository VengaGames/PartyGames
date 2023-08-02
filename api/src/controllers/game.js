const router = require("express").Router();

const Game = require("../models/game");

router.get("/", async (req, res) => {
  try {
    const games = await Game.find({});
    const total = games.length;
    const randInt = Math.floor(Math.random() * total);
    const game = games[randInt];
    return res.status(200).json({ ok: true, data: game, total });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, error });
  }
});

router.get("/all", async (req, res) => {
  try {
    const games = await Game.find({});
    const total = games.length;
    return res.status(200).json({ ok: true, data: games, total });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    return res.status(200).json({ ok: true, data: game });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, error });
  }
});

router.post("/", async (req, res) => {
  try {
    const game = await Game.create(req.body);
    return res.status(201).json({ ok: true, data: game });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, error: error.message || "Error during creation" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) return res.status(404).json({ ok: false, error: "Game not found" });
    game.set(req.body);
    await game.save();
    res.status(200).json({ ok: true, data: game });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, error });
  }
});

module.exports = router;
