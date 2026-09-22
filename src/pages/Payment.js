import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../supabaseClient";

function Payment() {
  const location = useLocation();

  const product = location.state?.product;
  const customer = location.state?.customer;

  // Add your actual SARAVU UPI ID here
  const upiId = "8309751976@ybl";
  const [transactionId, setTransactionId] = useState("");
const [savingPayment, setSavingPayment] = useState(false);

  return (
    <section className="payment-page">

      <div className="payment-container">

        <p className="payment-small">
          SARAVU DIGITAL PRODUCTS
        </p>

        <h1>
          Secure Payment
        </h1>

        <p className="payment-description">
          Review your order and complete the payment using UPI.
        </p>

        {/* ORDER SUMMARY */}
        <div className="payment-order">

          <p>Order Summary</p>

          {product ? (
            <>
              <h2>{product.name}</h2>

              <div className="payment-price">
                ₹{product.price}
              </div>
            </>
          ) : (
            <p>Product details not available.</p>
          )}

        </div>

        {/* CUSTOMER DETAILS */}
        {customer && (
          <div className="payment-customer">

            <h3>Customer Details</h3>

            <p>
              <strong>Name:</strong> {customer.name}
            </p>

            <p>
              <strong>Mobile:</strong> {customer.phone}
            </p>

            <p>
              <strong>Email:</strong> {customer.email}
            </p>

          </div>
        )}

        {/* UPI PAYMENT */}
        <div className="upi-payment">

          <h2>📱 Pay Using UPI</h2>
          <div className="upi-qr">
    <img
      src="/saravu-upi-qr.jpeg"
      alt="SARAVU UPI QR"
    />
  </div>

          <p>
            Open your preferred UPI app and make the payment to the UPI ID below.
          </p>

          <div className="upi-id-box">
            <strong>UPI ID</strong>
            <p>{upiId}</p>
          </div>

          {product && (
            <div className="upi-amount">
              <strong>Amount to Pay</strong>
              <div>₹{product.price}</div>
            </div>
          )}

          <p className="upi-instruction">
            After completing the payment, keep your UPI transaction ID /
            reference number safely for confirmation.
          </p>
          <div className="upi-transaction-box">

  <label htmlFor="transactionId">
    UPI Transaction ID / Reference Number
  </label>

  <input
  id="transactionId"
  type="text"
  placeholder="Enter your UPI transaction ID"
  value={transactionId}
  onChange={(e) => setTransactionId(e.target.value)}
/>

</div>

          <button
            className="payment-button"
            type="button"
            onClick={async () => {
  if (!transactionId.trim()) {
    alert("Please enter your UPI Transaction ID / Reference Number.");
    return;
  }

  if (!product || !customer) {
    alert("Order or customer details are missing.");
    return;
  }

  try {
    setSavingPayment(true);

    const { error } = await supabase
      .from("payments")
      .insert([
        {
          customer_name: customer.name,
          customer_phone: customer.phone,
          customer_email: customer.email,
          product_name: product.name,
          amount: product.price,
          transaction_id: transactionId.trim(),
          payment_status: "Pending",
        },
      ]);

    if (error) {
      console.error("Payment save error:", error);
      alert("Payment details could not be saved. Please try again.");
      return;
    }

    alert(
      "Payment details submitted successfully. SARAVU will verify your payment and confirm your digital product."
    );

    setTransactionId("");
  } catch (error) {
    console.error("Unexpected error:", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setSavingPayment(false);
  }
}}
          >
  {savingPayment ? "Saving Payment..." : "✅ I Have Made the Payment"}
</button>

        </div>

        <p className="payment-note">
          Your digital product will be provided after payment confirmation.
        </p>

      </div>

    </section>
  );
}

export default Payment;