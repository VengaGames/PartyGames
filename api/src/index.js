require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { PORT } = require("./config.js");
require("./connectToDb.js")();
const app = express();
const allowedOrigins = ["http://localhost:5173", "http://localhost:19006"];

app.use(helmet());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(cors({ credentials: true, origin: allowedOrigins }));
app.use(express.json());

app.use("/game", require("./controllers/game"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
