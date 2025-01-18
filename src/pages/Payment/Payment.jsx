import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

// TODO
const stripePromise = loadStripe('pk_test_51QfZqyRpZKbHxwE70Mc3wzn8zlMv9cywatS9Tb2AZ5QzYST6b0nHNXslWQydJ1Oq58GMD8oaU5O4KeDmYA695aEm00bWTXDE57')
function Payment() {
  const location = useLocation();
  const {applicationFees } = location.state || {};
  const price = applicationFees;
  console.log(price)
  console.log('mahidi shikder')



  return (
    <div className="my-32">
  <h1 className="text-3xl font-bold text-center">Payment</h1>
  <div>
  <Elements stripe={stripePromise}>
      <CheckoutForm price={price} />
    </Elements>
  </div>
    </div>
  );
}

export default Payment;
