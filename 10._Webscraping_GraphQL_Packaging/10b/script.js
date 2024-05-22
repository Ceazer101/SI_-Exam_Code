document.addEventListener('DOMContentLoaded', () => {
    const stripe = Stripe('pk_test_51PJHHhC8X375Q960IloklRgaGfMvAgm7e0I5iDxUCLiplm2XnKTKfniPBJuq1M9u6gSI9tKqCAmpOkfwyzChXuRP001DlZuAzY');
    const elements = stripe.elements();
    const cardElement = elements.create('card');
    cardElement.mount('#card-element');
  
    const form = document.getElementById('payment-form');
    const errorMessage = document.getElementById('error-message');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });
  
      if (error) {
        errorMessage.textContent = error.message;
      } else {
        const response = await fetch('/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: 2000, // Amount in cents
            currency: 'usd',
          }),
        });
  
        const { clientSecret } = await response.json();
  
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });
  
        if (result.error) {
          errorMessage.textContent = result.error.message;
        } else {
          if (result.paymentIntent.status === 'succeeded') {
            errorMessage.textContent = 'Payment succeeded!';
            console.log(errorMessage.textContent)
          }
        }
      }
    });
  });
  