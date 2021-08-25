const express = require('express');
const path = require('path');
const compression = require('compression');
// const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 4000;

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  return next();
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.get('/', (req, res) => {
  res.send('Success!');
});

app.post('/payment', async (req, res) => {
  // const stripeLineItems = req.body.cartItems.map((item) => {
  //   return {
  //     price_data: {
  //       currency: 'cad',
  //       product_data: {
  //         name: item.name,
  //       },
  //       unit_amount: item.price * 100,
  //     },
  //     quantity: item.quantity,
  //   };
  // });

  // const session = await stripe.checkout.sessions.create({
  //   payment_method_types: ['card'],
  //   line_items: stripeLineItems,
  //   mode: 'payment',
  //   success_url: 'http://localhost:3000',
  //   cancel_url: 'http://localhost:3000/about',
  // });

  // res.redirect(303, session.url);

  const { token, amount } = req.body;
  const body = {
    source: token.id,
    amount,
    currency: 'cad',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      console.log(stripeRes);
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`Server initiated on port ${port}`);
});
