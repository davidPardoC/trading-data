const express = require("express");
const morgan = require("morgan");
const app = express();
var cors = require("cors");

//settings
app.set("json spaces", 2);
app.set("port", process.env.PORT || 3000);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("OK");
});
app.get("/data", (req, res) => {
  let sec = 0;
  let data = [];
  for (let index = 0; index <= 3600; index++) {
    data.push({
      x: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        17,
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds()-sec
      ),
      open: Math.random() * (2 - 1)+1,
      high: Math.random() * (2 - 1)+1,
      close: Math.random() * (2 - 1)+1,
      low: Math.random() * (2 - 1)+1,
    });
    sec++;
  }
  res.json(data);
});

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
