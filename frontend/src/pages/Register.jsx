import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    emailComms: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      console.log("Registering:", form);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.root}>
      <div style={styles.card}>
        {/* Icon */}
        <div style={styles.iconBox}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 19V6.5C4 5.4 4.9 4.5 6 4.5H18C19.1 4.5 20 5.4 20 6.5V19" stroke="#E8620A" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M4 19H20" stroke="#E8620A" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M9 4.5V12L12 10.5L15 12V4.5" stroke="#E8620A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 style={styles.title}>Create your account</h1>
        <p style={styles.sub}>Join Homeschool Hub today</p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Name row */}
          <div style={styles.row}>
            <div style={styles.field}>
              <label style={styles.label}>First name</label>
              <input name="firstName" type="text" placeholder="first" value={form.firstName} onChange={handleChange} style={styles.input} />
            </div>
            <div style={styles.field}>
              <label style={styles.label}>Last name</label>
              <input name="lastName" type="text" placeholder="last" value={form.lastName} onChange={handleChange} style={styles.input} />
            </div>
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input name="email" type="email" placeholder="email" value={form.email} onChange={handleChange} style={styles.input} />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input name="password" type="password" placeholder="password" value={form.password} onChange={handleChange} style={styles.input} />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Confirm password</label>
            <input name="confirmPassword" type="password" placeholder="confirm password" value={form.confirmPassword} onChange={handleChange} style={styles.input} />
          </div>

          <label style={styles.checkbox}>
            <input name="emailComms" type="checkbox" checked={form.emailComms} onChange={handleChange} style={{ accentColor: "#E8620A", width: "16px", height: "16px", flexShrink: 0, marginTop: "2px" }} />
            I'd like to receive updates and tips from Homeschool Hub via email.
          </label>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" disabled={loading} style={styles.btn}>
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p style={styles.loginLink}>
          Already have an account?{" "}
          <button onClick={() => navigate('/')} style={styles.linkBtn}>Sign in</button>
        </p>
      </div>
    </div>
  );
}

const styles = {
  root: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FDF0E6", padding: "2rem", fontFamily: "'Nunito', sans-serif" },
  card: { background: "#fff", borderRadius: "20px", padding: "2.5rem", width: "100%", maxWidth: "420px", border: "1px solid #F5BF9A" },
  iconBox: { width: "48px", height: "48px", background: "#FDF0E6", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" },
  title: { fontFamily: "'Lora', serif", fontSize: "22px", fontWeight: 600, color: "#9A3500", margin: "0 0 4px", textAlign: "center" },
  sub: { fontSize: "13px", color: "#C45A1A", margin: "0 0 1.75rem", textAlign: "center" },
  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "1rem" },
  field: { marginBottom: "1rem" },
  label: { display: "block", fontSize: "11px", fontWeight: 700, color: "#C45A1A", marginBottom: "5px", letterSpacing: "0.06em", textTransform: "uppercase" },
  input: { width: "100%", boxSizing: "border-box", padding: "10px 14px", fontSize: "14px", fontFamily: "'Nunito', sans-serif", border: "1.5px solid #F5BF9A", borderRadius: "10px", background: "#FDF0E6", color: "#3D1A00", outline: "none" },
  checkbox: { display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#C45A1A", lineHeight: 1.4, marginBottom: "1.25rem", cursor: "pointer" },
  error: { fontSize: "13px", color: "#A32D2D", background: "#FCEBEB", borderRadius: "8px", padding: "8px 12px", margin: "0 0 0.75rem" },
  btn: { width: "100%", padding: "11px", background: "#E8620A", color: "#fff", border: "none", borderRadius: "10px", fontSize: "15px", fontFamily: "'Nunito', sans-serif", fontWeight: 700, cursor: "pointer" },
  loginLink: { textAlign: "center", fontSize: "13px", color: "#C45A1A", margin: "1rem 0 0" },
  linkBtn: { color: "#9A3500", fontWeight: 700, background: "none", border: "none", cursor: "pointer", fontSize: "13px", fontFamily: "'Nunito', sans-serif", padding: 0 },
};
