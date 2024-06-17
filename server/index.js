const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
const db = require("./models");
const breweriesRouter = require("./routes/Breweries");
app.use("/breweries", breweriesRouter);
const reviewRouter=require("./routes/Reviews");
app.use("/reviews", reviewRouter)
const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(()=>{
  app.listen(3007, () => {
    console.log("Server running on port 3007");
  });
})



