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
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-60px); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(60px);  opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
        .hs-left  { animation: slideInLeft  0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .hs-right { animation: slideInRight 0.7s cubic-bezier(0.22,1,0.36,1) both; }
        .hs-input:focus {
          border-color: #1D9E75 !important;
          box-shadow: 0 0 0 3px rgba(29,158,117,0.15);
          outline: none;
        }
      `}</style>

      <div style={styles.root}>
        <div className="hs-left" style={styles.left}>
          <div style={styles.iconBox}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M4 19V6.5C4 5.4 4.9 4.5 6 4.5H18C19.1 4.5 20 5.4 20 6.5V19" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M4 19H20" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M9 4.5V12L12 10.5L15 12V4.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 style={styles.title}>Welcome to Homeschool Hub</h1>
          <p style={styles.tagline}>Your all-in-one platform for managing and tracking your homeschool journey.</p>
        </div>

        <div className="hs-right" style={styles.right}>
          <div style={styles.card}>
            <h2 style={styles.formTitle}>Sign in</h2>
            <p style={styles.formSub}>Enter your credentials to continue</p>

            <form onSubmit={handleSubmit} noValidate>
              <div style={styles.field}>
                <label style={styles.label}>Email</label>
                <input className="hs-input" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Password</label>
                <input className="hs-input" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
              </div>
              {error && <p style={styles.error}>{error}</p>}
              <button type="submit" disabled={loading} style={styles.btn}>
                {loading ? "Signing in..." : "Login"}
              </button>
            </form>

            <p style={styles.signup}>
              Don&apos;t have an account?{" "}
              <button onClick={() => console.log("go to register")} style={styles.signupLink}>Create Account</button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  root: { 
    display: "flex", 
    minHeight: "100vh", 
    fontFamily: "'Nunito', sans-serif", 
    overflow: "hidden" },
  left: { 
    flex: 1, 
    background: "#0F6E56", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center", 
    padding: "3rem 2.5rem" },
  right: { 
    flex: 1, 
    background: "#e1f5ee", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    padding: "2.5rem" },
  iconBox: { width: "64px", height: "64px", background: "rgba(255,255,255,0.15)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" },
  title: { fontFamily: "'Lora', serif", fontSize: "28px", fontWeight: 600, color: "#fff", margin: "0 0 12px", textAlign: "center", lineHeight: 1.3 },
  tagline: { fontSize: "14px", color: "#9fe1cb", textAlign: "center", lineHeight: 1.6, margin: 0, maxWidth: "260px" },
  card: { width: "100%", maxWidth: "340px" },
  formTitle: { fontFamily: "'Lora', serif", fontSize: "22px", fontWeight: 600, color: "#085041", margin: "0 0 6px" },
  formSub: { fontSize: "13px", color: "#0F6E56", margin: "0 0 1.75rem" },
  field: { marginBottom: "1rem" },
  label: { display: "block", fontSize: "11px", fontWeight: 700, color: "#0F6E56", marginBottom: "5px", letterSpacing: "0.06em", textTransform: "uppercase" },
  input: { width: "100%", boxSizing: "border-box", padding: "10px 14px", fontSize: "14px", fontFamily: "'Nunito', sans-serif", border: "1.5px solid #9fe1cb", borderRadius: "10px", background: "#fff", color: "#04342C", outline: "none" },
  error: { fontSize: "13px", color: "#A32D2D", background: "#FCEBEB", borderRadius: "8px", padding: "8px 12px", margin: "0 0 0.75rem" },
  btn: { width: "100%", padding: "11px", background: "#0F6E56", color: "#fff", border: "none", borderRadius: "10px", fontSize: "15px", fontFamily: "'Nunito', sans-serif", fontWeight: 700, cursor: "pointer", marginTop: "0.5rem" },
  signup: { textAlign: "center", fontSize: "13px", color: "#0F6E56", margin: "1.25rem 0 0", padding: "12px 16px", background: "#9fe1cb", borderRadius: "10px" },
  signupLink: { color: "#085041", fontWeight: 700, background: "none", border: "none", cursor: "pointer", fontSize: "13px", fontFamily: "'Nunito', sans-serif", padding: 0 },
};

