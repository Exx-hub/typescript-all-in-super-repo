import { useState } from "react";

export interface IBasicEnumsProps {}

// steps
// details
// shipping
// payment

enum ShoppingProcess {
  details = "Details",
  shipping = "Shipping",
  payment = "Payment",
}

// use unions over enums as possible

type CheckoutStep = "Details" | "Shipping" | "Payment";

function BasicEnums(props: IBasicEnumsProps) {
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>("Details");
  return (
    <div>
      {checkoutStep === "Details" && (
        <>
          <h1>Details</h1>
          <button type="button" onClick={() => setCheckoutStep("Shipping")}>
            Next
          </button>
        </>
      )}

      {checkoutStep === "Shipping" && (
        <>
          <h1>Shipping</h1>
          <button type="button" onClick={() => setCheckoutStep("Payment")}>
            Next
          </button>
        </>
      )}

      {checkoutStep === "Payment" && <h1>Payment</h1>}
    </div>
  );
}

export default BasicEnums;
