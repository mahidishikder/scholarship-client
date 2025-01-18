import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../provider/AuthPorvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function CheckoutForm({ price }) {
  const navigate = useNavigate()
  const [transactionId, setTransactionId] = useState('')
  // Ensure price is a number
  const numericPrice = Number(price);
  console.log("Numeric Price:", numericPrice);
  const { user } = useContext(AuthContext)
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
          console.log("Client Secret:", res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        } else {
          setError("Failed to fetch client secret");
        }
      })
      .catch((err) => {
        console.error("Error creating payment intent:", err);
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

    if (card === null) {
      setError("Card Element not found.");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Payment error:", error);
      setError(error.message);
    } else {
      console.log("Payment method:", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email,
          name: user?.displayName
        }
      }
    })
    if (confirmError) {
      console.log('confirm errror')
    } else {
      console.log("payment intent", paymentIntent)
      if (paymentIntent.status === 'succeeded') {
        console.log('transaction id', paymentIntent.id)
        setTransactionId(paymentIntent.id)


        const payment = {
          email: user?.email,
          name: user?.displayName,
          price: numericPrice,
          date: new Date(),
          transactionId: paymentIntent.id
        }
        const res = await axiosPublic.post('/payment', payment)
        console.log(res.data)

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/ScholarshipForm')
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
      {transactionId && <p className="text-green-500 mt-5">Your transation id: {transactionId}</p>}
    </form>
  );
}

export default CheckoutForm;
