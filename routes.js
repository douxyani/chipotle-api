const express = require("express");
const tokenDB = require("./models/tokenDB");
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('hi')
})

router.post("/tokens", async (req, res) => {
  await tokenDB.create({
    id: req.body.id,
    pushToken: req.body.token
  });
  res.send({ status: 'ok' });
});

router.delete("/tokens/:id", async (req, res) => {
  try {
    await tokenDB.findOneAndDelete({ id: req.params.id });
    res.status(204).send({ status: 'ok' });
  } catch {
    res.status(404);
    res.send({ error: "Post doesn't exist!" });
  }
});

module.exports = router;
