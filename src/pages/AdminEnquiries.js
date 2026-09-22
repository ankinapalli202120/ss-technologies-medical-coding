import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      window.location.href =
        "/ss-technologies-medical-coding/admin-login";
      return;
    }

    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Error fetching enquiries:", error);
    } else {
      setEnquiries(data || []);
    }
    const { data: paymentData, error: paymentError } = await supabase
  .from("payments")
  .select("*")
  .order("id", { ascending: false });

if (paymentError) {
  console.error("Error fetching payments:", paymentError);
  alert("Payment records could not be loaded: " + paymentError.message);
} else {
  setPayments(paymentData || []);
}

    setLoading(false);
  };

  // STATUS UPDATE
  const handleStatusChange = async (id, newStatus) => {
    setUpdatingId(id);

    const { error } = await supabase
      .from("enquiries")
      .update({ status: newStatus })
      .eq("id", id);

    if (error) {
      console.error("Error updating status:", error);
      alert("❌ Status update failed.");
    } else {
      setEnquiries((currentEnquiries) =>
        currentEnquiries.map((enquiry) =>
          enquiry.id === id
            ? { ...enquiry, status: newStatus }
            : enquiry
        )
      );
    }

    setUpdatingId(null);
  };

  // LOGOUT
  const handleLogout = async () => {
    await supabase.auth.signOut();

    window.location.href =
      "/ss-technologies-medical-coding/admin-login";
  };

  if (loading) {
    return (
      <section className="admin-enquiries-page">
        <div className="admin-enquiries-container">
          <p>🔐 Checking admin access...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="admin-enquiries-page">
      <div className="admin-enquiries-container">

        <div className="admin-header">
          <div>
            <h1>📋 Student Enquiries</h1>

            <p>
              View and manage enquiries submitted through the SARAVU website.
            </p>
          </div>

          <button onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>

        {enquiries.length === 0 ? (
          <p>📭 No enquiries found.</p>
        ) : (
          <div className="enquiries-table-wrapper">
 

            <table className="enquiries-table">

              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>Message</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
  {enquiries.map((enquiry) => (
    <tr key={enquiry.id}>
      <td>{enquiry.id}</td>

      <td>{enquiry.name}</td>

      <td>{enquiry.phone}</td>

      <td>{enquiry.email || "-"}</td>

      <td>{enquiry.course}</td>

      <td>{enquiry.message || "-"}</td>

      <td>
        <select
          className={`status-select status-${enquiry.status || "new"}`}
          value={enquiry.status || "new"}
          disabled={updatingId === enquiry.id}
          onChange={(e) =>
            handleStatusChange(enquiry.id, e.target.value)
          }
        >
          <option value="new">🆕 New</option>
          <option value="contacted">📞 Contacted</option>
          <option value="resolved">✅ Resolved</option>
          <option value="cancelled">❌ Cancelled</option>
        </select>

        {updatingId === enquiry.id && (
          <small> Updating...</small>
        )}
      </td>
    </tr>
  ))}
</tbody>

</table>
</div>
)}

{/* PAYMENT VERIFICATION */}
<div className="payment-verification-section">

  <h2>💳 Payment Verification</h2>

  {payments.length === 0 ? (
    <p>📭 No payments found.</p>
  ) : (
    <div className="enquiries-table-wrapper">

      <table className="enquiries-table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Transaction ID</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <tr key={payment.id}>

              <td>{payment.id}</td>

              <td>{payment.customer_name}</td>

              <td>{payment.customer_phone}</td>

              <td>{payment.customer_email || "-"}</td>

              <td>{payment.product_name}</td>

              <td>₹{payment.amount}</td>

              <td>{payment.transaction_id}</td>

              <td>
                <select
                  value={payment.payment_status || "Pending"}
                  onChange={async (e) => {
                    const newStatus = e.target.value;

                    const { error } = await supabase
                      .from("payments")
                      .update({
                        payment_status: newStatus,
                      })
                      .eq("id", payment.id);

                    if (error) {
                      console.error(
                        "Payment status update error:",
                        error
                      );
                      alert("❌ Payment status update failed.");
                    } else {
                      setPayments((currentPayments) =>
                        currentPayments.map((item) =>
                          item.id === payment.id
                            ? {
                                ...item,
                                payment_status: newStatus,
                              }
                            : item
                        )
                      );
                    }
                  }}
                >
                  <option value="Pending">⏳ Pending</option>
                  <option value="Verified">✅ Verified</option>
                  <option value="Rejected">❌ Rejected</option>
                </select>
              </td>

            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )}

</div>

      </div>
    </section>
  );
}

export default AdminEnquiries;