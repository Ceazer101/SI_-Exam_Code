import express from 'express';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51PJHHhC8X375Q9607i0bTM3GDAgxj4QQuM2OrNhUmXXVqdvjj9YQ3ke1yyNK3y6GmjPKvINwwAyHATiF1WfGSCQU003SLP2kZS');

const app = express();
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
