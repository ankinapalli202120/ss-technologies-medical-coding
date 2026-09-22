import React from "react";
import { useNavigate } from "react-router-dom";

function DigitalProducts() {
  const navigate = useNavigate();

  const products = [
    {
      name: "IPDRG Materials",
      price: 499,
      category: "Medical Coding",
    },
    {
      name: "ICD-10-PCS Complete Materials",
      price: 399,
      category: "Medical Coding",
    },
    {
      name: "Surgery Coding Materials",
      price: 399,
      category: "Medical Coding",
    },
    {
      name: "CPC Question Papers",
      price: 299,
      category: "Question Papers",
    },
    {
      name: "CCS Question Papers",
      price: 299,
      category: "Question Papers",
    },
    {
      name: "CPT Question Papers",
      price: 299,
      category: "Question Papers",
    },
    {
      name: "ICD-10-PCS Question Papers",
      price: 299,
      category: "Question Papers",
    },
    {
      name: "ICD-10-CM Question Papers",
      price: 299,
      category: "Question Papers",
    },
    {
      name: "HCC Charts & Materials",
      price: 199,
      category: "Medical Coding",
    },
    {
      name: "E/M Charts & Materials",
      price: 199,
      category: "Medical Coding",
    },
    {
      name: "IVR Denials Materials",
      price: 299,
      category: "Medical Coding",
    },
    {
  name: "HCC Recorded Classes",
  price: 2000,
  category: "Recorded Classes",
},

{
  name: "E/M Recorded Classes",
  price: 2000,
  category: "Recorded Classes",
},

{
  name: "Surgery Recorded Classes",
  price: 5000,
  category: "Recorded Classes",
},

{
  name: "IPDRG Recorded Classes",
  price: 7000,
  category: "Recorded Classes",
},

{
  name: "CDIP Recorded Classes",
  price: 7000,
  category: "Recorded Classes",
},
    // CERTIFICATION COURSES

{
  name: "CPC - Online Classes",
  price: 10000,
  category: "CPC Certification",
},

{
  name: "CPC - Offline Classes",
  price: 15000,
  category: "CPC Certification",
},

{
  name: "CCS - Online Classes",
  price: 10000,
  category: "CCS Certification",
},

{
  name: "CCS - Offline Classes",
  price: 15000,
  category: "CCS Certification",
},

{
  name: "CCS-P - Online Classes",
  price: 10000,
  category: "CCS-P Certification",
},

{
  name: "CCS-P - Offline Classes",
  price: 15000,
  category: "CCS-P Certification",
},

{
  name: "CRC - Online Classes",
  price: 10000,
  category: "CRC Certification",
},

{
  name: "CRC - Offline Classes",
  price: 15000,
  category: "CRC Certification",
},

{
  name: "CDIP - Online Classes",
  price: 20000,
  category: "Certification",
},
{
  name: "Excel Training",
  price: 999,
  category: "Digital Skills Training",
},

{
  name: "Website Design",
  price: 1999,
  category: "Digital Skills Training",
},
    {
      name: "AI Video Creator eBook",
      price: null,
      category: "eBook",
    },
    {
      name: "Medical Coding eBook",
      price: null,
      category: "eBook",
    },
    {
      name: "YouTube AI Creator eBook",
      price: null,
      category: "eBook",
    },
    {
      name: "AI Prompts / AI Tools eBook",
      price: null,
      category: "eBook",
    },
  ];

  const handleBuyNow = (product) => {
    navigate("/ss-technologies-medical-coding/customer-details", {
      state: { product },
    });
  };

  return (
    <section className="digital-products-page">

      {/* HEADER */}
      <div className="digital-products-header">

        <p className="digital-products-small">
          SARAVU DIGITAL PRODUCTS
        </p>

        <h1>
          Learn More. Practice More. <span>Grow More.</span>
        </h1>

        <p>
          Premium Medical Coding materials, question papers,
          charts and AI-powered eBooks designed to support
          your learning and career growth.
        </p>

      </div>

      {/* PRODUCTS */}
      <div className="digital-products-grid">

        {products.map((product, index) => (
          <div
            className="digital-product-card"
            key={index}
          >

            <div className="product-icon">
              {product.category === "eBook" ? "📖" : "📚"}
            </div>

            <p className="product-category">
              {product.category}
            </p>

            <h2>
              {product.name}
            </h2>

            {product.price ? (
              <div className="product-price">
                ₹{product.price}
              </div>
            ) : (
              <div className="product-price coming-soon">
                Coming Soon
              </div>
            )}

            {product.price ? (
              <button
                className="buy-now-button"
                onClick={() => handleBuyNow(product)}
              >
                🛒 Buy Now
              </button>
            ) : (
              <button
                className="buy-now-button disabled-button"
                disabled
              >
                Coming Soon
              </button>
            )}

          </div>
        ))}

      </div>

      {/* INFORMATION */}
      <div className="digital-products-info">

        <h2>
          Secure Digital Product Access
        </h2>

        <p>
          After successful payment, customers will receive
          secure access to their purchased digital product.
          Download links will not be publicly exposed.
        </p>

        <p>
          Payment, customer details, order status and
          product access will be connected securely in
          the next stage.
        </p>

      </div>

    </section>
  );
}

export default DigitalProducts;