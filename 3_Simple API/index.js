const express = require("express");
const app = express();
const PORT = 5555;

app.use(express.json());

app.get("/category", (req, res) => {
  res.status(200).send({
    name: "rap",
    name2: "blues",
    name3: "hiphop",
  });
});

app.post("/dta/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  res.send({
    gender: "male",
    age: 12,
  });

  if (!logo) {
    res.status(418).send({ message: "we need a logo" });
  }
});

app.listen(PORT, () => console.log(`it's alive at http://localhost:${PORT}`));
