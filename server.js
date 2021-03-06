const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;
const phones = require("./routes/api/phones");

//body-parse middelware
app.use(bodyParser.json());
//DB config
const db = require("./config/keys").mongoURI;

//connect to DB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

//local or prodcution
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/dist"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

//Use Routes
app.use("/api/phones", phones);

// app.get("/", (req, res) => res.send("Hello world"));
app.listen(port, () => console.log(`app listening at ${port}`));
