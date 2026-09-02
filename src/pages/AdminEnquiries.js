import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

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

      </div>
    </section>
  );
}

export default AdminEnquiries;