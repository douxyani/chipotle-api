const express = require("express");
const tokenDB = require("./models/tokenDB");
const router = express.Router();

router.get('/', async (req, res) => {
  res.send('hi')
})

router.post("/tokens", async (req, res) => {
  console.log(req.body)
  const doc = await tokenDB.findOneAndUpdate({
    id: req.body.id
  }, {
    pushToken: req.body.token
  }, {
    upsert: true,
    returnDocument: true
  })
  console.log(doc)
  res.send({ status: 'ok' });
});

router.post('/tokens/notis/:id', async (req, res) => {
  try {
    console.log(req.body)

    await tokenDB.findOneAndUpdate({
      id: req.params.id
    }, {
      ...req.body
    });
    res.send({ status: 'ok' });
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
})

router.get('/tokens/notis/:id', async (req, res) => {
  try {
    const data = await tokenDB.findOne({
      id: req.params.id
    })

    res.send({ status: 'ok', data: JSON.stringify(data) });
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
})

router.delete("/tokens/:id", async (req, res) => {
  try {
    await tokenDB.findOneAndDelete({ id: req.params.id });
    res.status(204).send({ status: 'ok' });
  } catch {
    res.status(404);
    res.send({ error: "User doesn't exist!" });
  }
});

module.exports = router;
