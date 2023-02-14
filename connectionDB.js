const mongoose = require("mongoose");
const url = `mongodb+srv://admin:admin@webdevasign1.3drfg9f.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. n${err}`);
  });
