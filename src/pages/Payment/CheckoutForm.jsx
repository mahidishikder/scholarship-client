import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../provider/AuthPorvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function CheckoutForm({ price, UName, SCategory, SubCategory }) {
  const navigate = useNavigate();
  const [transactionId, setTransactionId] = useState("");
  const numericPrice = Number(price);
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (!numericPrice || isNaN(numericPrice)) {
      setError("Invalid price value");
      return;
    }

    axiosPublic
      .post("/create-payment-intent", { price: numericPrice })
      .then((res) => {
        if (res.data?.clientSecret) {
          setClientSecret(res.data.clientSecret);
        } else {
          setError("Failed to fetch client secret");
        }
      })
      .catch((err) => {
        setError("Error creating payment intent");
      });
  }, [axiosPublic, numericPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded yet.");
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setError("Card Element not found.");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      return;
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email,
          name: user?.displayName,
        },
      },
    });

    if (confirmError) {
      setError("Payment confirmation failed.");
      return;
    }

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        name: user?.displayName,
        price: numericPrice,
        date: new Date(),
        transactionId: paymentIntent.id,
      };

      const res = await axiosPublic.post("/payment", payment);

      if (res.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment successful",
          showConfirmButton: false,
          timer: 1500,
        });

        // Navigate to ScholarshipForm with state
        navigate("/ScholarshipForm", {
          state: {
            UName,
            SCategory,
            SubCategory,
            transactionId: paymentIntent.id,
          },
        });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Card Details
        </label>
        <div className="border border-gray-300 p-3 rounded-md shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  fontFamily: "Arial, sans-serif",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={!stripe}
        className="w-full py-2 px-4 bg-blue-600 text-white font-medium text-sm rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        Pay
      </button>
      <p className="text-red-500 mt-5">{error}</p>
      {transactionId && <p className="text-green-500 mt-5">Your transaction id: {transactionId}</p>}
    </form>
  );
}

export default CheckoutForm;
