const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());

const authRouter = require("./routes/authroutes");
app.use("/auth", authRouter)

app.listen(process.env.PORT, (err) => {
  if (err) console.error(err)
  console.log("server is running on port ", process.env.PORT);
  require("./config/db.config");
});