import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function CustomerDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  return (
    <section className="customer-details-page">

      <div className="customer-details-container">

        <p className="customer-details-small">
          SARAVU DIGITAL PRODUCTS
        </p>

        <h1>
          Customer Details
        </h1>

        <p className="customer-details-description">
          Please enter your details to continue with your purchase.
        </p>

        {/* SELECTED PRODUCT */}
        {product && (
          <div className="selected-product">

            <p>Selected Product</p>

            <h2>{product.name}</h2>

            <strong>
              ₹{product.price}
            </strong>

          </div>
        )}

        {/* CUSTOMER FORM */}
        <form
          className="customer-details-form"
          onSubmit={(e) => {
            e.preventDefault();

            const formData = new FormData(e.target);

            navigate("/ss-technologies-medical-coding/payment", {
              state: {
                product,
                customer: {
                  name: formData.get("name"),
                  phone: formData.get("phone"),
                  email: formData.get("email"),
                },
              },
            });
          }}
        >

          <label>
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />

          <label>
            Mobile Number
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />

          <label>
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />

          <button type="submit">
            Continue to Payment
          </button>

        </form>

      </div>

    </section>
  );
}

export default CustomerDetails;