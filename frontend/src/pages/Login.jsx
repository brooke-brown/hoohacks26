import { useState } from "react";

export default function Login() {
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
      // TODO: replace with your auth logic (e.g. fetch, Supabase, Firebase, etc.)
      console.log("Signing in with:", email);
      await new Promise((res) => setTimeout(res, 1000)); // placeholder
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.root}>
      {/* Left panel */}
      <div style={styles.left}>
        <div style={styles.logo}>Acme Corp</div>
        <div>
          <p style={styles.tagline}>
            Secure access to your enterprise workspace. Welcome back.
          </p>
          <div style={styles.dots}>
            <div style={{ ...styles.dot, ...styles.dotActive }} />
            <div style={styles.dot} />
            <div style={styles.dot} />
          </div>
        </div>
        <p style={styles.footer}>© 2026 Acme Corp. All rights reserved.</p>
      </div>

      {/* Right panel */}
      <div style={styles.right}>
        <div style={styles.card}>
          <h1 style={styles.heading}>Sign in</h1>
          <p style={styles.sub}>Enter your credentials to continue</p>

          <form onSubmit={handleSubmit} noValidate>
            <div style={styles.field}>
              <label style={styles.label}>Email address</label>
              <input
                type="email"
                placeholder="you@company.com"
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

            <button
              type="button"
              onClick={() => console.log("Forgot password")}
              style={styles.forgot}
            >
              Forgot password?
            </button>

            {error && <p style={styles.error}>{error}</p>}

            <button type="submit" disabled={loading} style={styles.submitBtn}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div style={styles.dividerRow}>
            <div style={styles.dividerLine} />
            <span style={styles.dividerText}>or</span>
            <div style={styles.dividerLine} />
          </div>

          <p style={styles.signupLink}>
            Don&apos;t have an account?{" "}
            <button
              onClick={() => console.log("Request access")}
              style={styles.linkBtn}
            >
              Request access
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'DM Sans', sans-serif",
  },
  left: {
    width: "280px",
    flexShrink: 0,
    background: "#0f1c2e",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "2.5rem",
  },
  logo: {
    fontFamily: "'DM Serif Display', serif",
    color: "#e8e0d0",
    fontSize: "22px",
    letterSpacing: "-0.5px",
  },
  tagline: {
    color: "#6b8aad",
    fontSize: "13px",
    lineHeight: 1.6,
    margin: "0 0 1.25rem",
  },
  dots: { display: "flex", gap: "6px" },
  dot: { width: "5px", height: "5px", borderRadius: "50%", background: "#1d3a56" },
  dotActive: { background: "#4a85b5" },
  footer: { color: "#3a5068", fontSize: "11px", margin: 0 },
  right: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2.5rem",
    background: "#fff",
  },
  card: { width: "100%", maxWidth: "340px" },
  heading: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: "26px",
    fontWeight: 400,
    color: "#111",
    margin: "0 0 6px",
  },
  sub: { fontSize: "13px", color: "#666", margin: "0 0 2rem" },
  field: { marginBottom: "1rem" },
  label: {
    display: "block",
    fontSize: "11px",
    fontWeight: 500,
    color: "#666",
    marginBottom: "5px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "9px 12px",
    fontSize: "14px",
    fontFamily: "'DM Sans', sans-serif",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#f9f9f9",
    color: "#111",
    outline: "none",
  },
  forgot: {
    display: "block",
    textAlign: "right",
    fontSize: "12px",
    color: "#378ADD",
    marginBottom: "1.25rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
    fontFamily: "'DM Sans', sans-serif",
  },
  error: {
    fontSize: "13px",
    color: "#c0392b",
    margin: "0 0 0.75rem",
    padding: "8px 12px",
    background: "#fdf0ef",
    borderRadius: "6px",
  },
  submitBtn: {
    width: "100%",
    padding: "10px",
    background: "#0f1c2e",
    color: "#e8e0d0",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    cursor: "pointer",
    letterSpacing: "0.02em",
  },
  dividerRow: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "1.25rem 0",
  },
  dividerLine: { flex: 1, height: "1px", background: "#eee" },
  dividerText: { fontSize: "11px", color: "#aaa", whiteSpace: "nowrap" },
  signupLink: {
    textAlign: "center",
    fontSize: "12px",
    color: "#666",
    margin: 0,
  },
  linkBtn: {
    color: "#378ADD",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "12px",
    fontFamily: "'DM Sans', sans-serif",
    padding: 0,
  },
};
