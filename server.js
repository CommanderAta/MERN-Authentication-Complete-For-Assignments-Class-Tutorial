const express =  require("express");
const dotenv =  require("dotenv")
const app = express();
const bodyParser = require("body-parser");
const userRoute=require('./routes/User')
require('./connectionDB')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userRoute) 

dotenv.config({ path: "./config.env" });
app.listen(process.env.PORT, () =>
  console.log(`The Books API is running on: http://localhost:${process.env.PORT}.`)
) 