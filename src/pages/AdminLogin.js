import { useState } from "react";
import { supabase } from "../supabaseClient";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage("❌ Invalid email or password.");
      return;
    }

    setMessage("✅ Login successful!");

    window.location.href =
      "/ss-technologies-medical-coding/admin-enquiries";
  };

  return (
    <section className="admin-login-page">

      <div className="admin-login-card">

        <h1>🔐 Admin Login</h1>

        <p>Login to view student enquiries.</p>

        <form onSubmit={handleLogin}>

          <input
  type="email"
  placeholder="Admin Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  required
/>

<input
  type="password"
  placeholder="Admin Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  required
/>

<button type="submit">
  Login
</button>

        </form>

        {message && (
          <p>{message}</p>
        )}

      </div>

    </section>
  );
}

export default AdminLogin;