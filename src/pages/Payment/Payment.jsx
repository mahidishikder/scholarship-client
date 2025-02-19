import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe('pk_test_51QfZqyRpZKbHxwE70Mc3wzn8zlMv9cywatS9Tb2AZ5QzYST6b0nHNXslWQydJ1Oq58GMD8oaU5O4KeDmYA695aEm00bWTXDE57');

function Payment() {
  const location = useLocation();

  const {
    applicationFees,
    universityName,
    scholarshipCategory,
    subjectCategory,
    serviceCharge,
    _id,
    universityCountry: universityLocation,
  } = location.state || {};
  console.log(serviceCharge)

  if (!applicationFees || !universityName || !scholarshipCategory) {
    return <div>Error: Missing required data!</div>;
  }

  const price = applicationFees;
  const UName = universityName;
  const SCategory = scholarshipCategory;
  const SubCategory = subjectCategory;
  const serviceChargee = serviceCharge
  const locationn = universityLocation

  console.log(price, UName, SCategory, SubCategory,serviceChargee,locationn);

  return (
    <div className="md:py-72 py-52 dark:bg-slate-900 bg-gray-100">
      <h1 className="md:text-3xl  text-2xl dark:text-[#4C45E7] font-bold text-center">Payment</h1>
      <div className="px-2">
        <Elements stripe={stripePromise}>
          <CheckoutForm 
            price={price} 
            UName={UName} 
            SCategory={SCategory} 
            SubCategory={SubCategory} 
            serviceChargee={serviceChargee}  
            _id={_id} 
            locationn={locationn}  
          />
        </Elements>
      </div>
    </div>
  );
}

export default Payment;

