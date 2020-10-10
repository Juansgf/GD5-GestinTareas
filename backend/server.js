const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));


app.use(bodyParser.json());


app.use(bodyParser.urlencoded({ extended: true }));

//const db = require("../backend/models")
//db.sequelize.sync({ force: true }).then(() => {
//    console.log("Drop and re-sync db.");
 // });

// checar si funciona
app.get("/", (req, res) => {
  res.json({ message: "Funciona" });
});

require("./routes/routes")(app);

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});