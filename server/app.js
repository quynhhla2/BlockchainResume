const express = require("express");
const cors = require("cors");

const nftRouter = require("./Routers/nftRouter");
const userRouter = require("./Routers/userRouter");

//MIDDLEWARE
const app = express();
app.use(express.json({ limit: "100kb" }));
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.options("*", cors());

// ROUTES
app.use("/api/v1/NFTs", nftRouter);
app.use("/api/v1/user", userRouter);

module.exports = app;