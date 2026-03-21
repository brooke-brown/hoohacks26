import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.root}>
      <div style={styles.card}>
        {/* Brand */}
        <div style={styles.brand}>
          <div style={styles.iconBox}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M4 19V6.5C4 5.4 4.9 4.5 6 4.5H18C19.1 4.5 20 5.4 20 6.5V19" stroke="#3B6D11" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M4 19H20" stroke="#3B6D11" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M9 4.5V12L12 10.5L15 12V4.5" stroke="#3B6D11" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 style={styles.title}>Welcome to Homeschool Hub</h1>
          <p style={styles.sub}>Sign in to your account to continue</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div style={styles.field}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" disabled={loading} style={styles.btn}>
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <p style={styles.signup}>
          Don&apos;t have an account?{" "}
          <button onClick={() => navigate("/register")} style={styles.signupLink}>
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f0e8",
    padding: "2rem",
    fontFamily: "'Nunito', sans-serif",
  },
  card: {
    background: "#fff",
    borderRadius: "20px",
    padding: "2.5rem 2.5rem 2rem",
    width: "100%",
    maxWidth: "380px",
    border: "1px solid #e8e0d0",
  },
  brand: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "1.75rem",
  },
  iconBox: {
    width: "56px",
    height: "56px",
    background: "#eaf3de",
    borderRadius: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "12px",
  },
  title: {
    fontFamily: "'Lora', serif",
    fontSize: "22px",
    fontWeight: 600,
    color: "#27500A",
    margin: "0 0 4px",
    textAlign: "center",
  },
  sub: {
    fontSize: "13px",
    color: "#888780",
    margin: 0,
    textAlign: "center",
  },
  field: { marginBottom: "1rem" },
  label: {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    color: "#5F5E5A",
    marginBottom: "5px",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 14px",
    fontSize: "14px",
    fontFamily: "'Nunito', sans-serif",
    border: "1.5px solid #e0d8cc",
    borderRadius: "10px",
    background: "#faf8f4",
    color: "#2C2C2A",
    outline: "none",
  },
  error: {
    fontSize: "13px",
    color: "#A32D2D",
    background: "#FCEBEB",
    borderRadius: "8px",
    padding: "8px 12px",
    margin: "0 0 0.75rem",
  },
  btn: {
    width: "100%",
    padding: "11px",
    background: "#3B6D11",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    fontSize: "15px",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    cursor: "pointer",
    marginTop: "0.5rem",
  },
  signup: {
    textAlign: "center",
    fontSize: "13px",
    color: "#888780",
    margin: "1.25rem 0 0",
    padding: "12px 16px",
    background: "#eaf3de",
    borderRadius: "10px",
  },
  signupLink: {
    color: "#3B6D11",
    fontWeight: 700,
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "13px",
    fontFamily: "'Nunito', sans-serif",
    padding: 0,
  },
};
