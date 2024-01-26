const mongoose = require("mongoose");
const next = require("next");
const dotenv = require("dotenv");

const dev = process.env.NODE_ENV != "production";
const nextServer = next({ dev });
const handle = nextServer.getRequestHandler();

dotenv.config({ path: "../config.env" });
const app = require("./app");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connection successful"));

const port = 3001;

app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})