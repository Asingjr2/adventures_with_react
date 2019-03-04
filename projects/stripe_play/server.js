const app = require("express")();
const stripe = require("stripe")("");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 2000,
      currency: "usd", 
      description: "My first charge",
      source: req.body
    });

    res.json({status});
    console.log('transaction attempted')
  } catch (err) {
    console.log('there was an error', err);
    res.status(500).end();
  }
});

app.post("/real_charge", async (req, res) => {
  console.log('placing a real charge')
  res.status(200).end();
})

app.listen(9000, () => console.log("Listening on port 9000"));
