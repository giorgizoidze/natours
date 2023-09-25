import axios from 'axios';
const stripe = Stripe(
  'pk_test_51NtwjREakQ2GgJMkordYadK0yqx4ImgtgxgBTB3KgaTNDbnwgSlwM1AdxhAAvAYbBNLxjG1voYUz7XjLv2WamErz00pszyW48V',
);
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  try {
    const session = await axios({
      url: `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    });

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    showAlert('error', err);
  }
};
