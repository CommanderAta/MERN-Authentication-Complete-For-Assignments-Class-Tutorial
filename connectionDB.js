const mongoose = require("mongoose");
const url = `Removed for Security Reasons`;

mongoose.set("strictQuery", false);
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });
