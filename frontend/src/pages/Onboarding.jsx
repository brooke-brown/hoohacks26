import { useState } from "react";

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(1);
  const [childCount, setChildCount] = useState(1);
  const [children, setChildren] = useState([]);

  const handleCountChange = (delta) => {
    setChildCount((prev) => Math.max(1, Math.min(10, prev + delta)));
  };

  const handleContinue = () => {
    const fields = Array.from({ length: childCount }, (_, i) => ({
      id: i + 1,
      name: "",
      age: "",
      grade: "",
    }));
    setChildren(fields);
    setStep(2);
  };

  const handleChildChange = (index, field, value) => {
    setChildren((prev) =>
      prev.map((child, i) => (i === index ? { ...child, [field]: value } : child))
    );
  };

  const handleFinish = () => {
    // TODO: save children data to backend
    console.log("Children data:", children);
    onComplete();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        <div style={styles.iconBox}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 19V6.5C4 5.4 4.9 4.5 6 4.5H18C19.1 4.5 20 5.4 20 6.5V19" stroke="#E8620A" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M4 19H20" stroke="#E8620A" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M9 4.5V12L12 10.5L15 12V4.5" stroke="#E8620A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {step === 1 && (
          <>
            <h1 style={styles.title}>Welcome to Homeschool Hub!</h1>
            <p style={styles.sub}>Let's get your family set up. How many children are you homeschooling?</p>
            <div style={styles.countRow}>
              <button style={styles.countBtn} onClick={() => handleCountChange(-1)}>−</button>
              <span style={styles.count}>{childCount}</span>
              <button style={styles.countBtn} onClick={() => handleCountChange(1)}>+</button>
            </div>
            <button style={styles.btn} onClick={handleContinue}>Continue</button>
          </>
        )}

        {step === 2 && (
          <>
            <h1 style={styles.title}>Tell us about your children</h1>
            <p style={styles.sub}>We'll use this to personalize your experience.</p>
            <div style={styles.scrollArea}>
              {children.map((child, index) => (
                <div key={child.id} style={styles.childSection}>
                  <p style={styles.childLabel}>Child #{child.id}</p>
                  <div style={styles.childRow}>
                    <div style={styles.field}>
                      <label style={styles.label}>Name</label>
                      <input
                        type="text"
                        placeholder="First name"
                        value={child.name}
                        onChange={(e) => handleChildChange(index, "name", e.target.value)}
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.field}>
                      <label style={styles.label}>Age</label>
                      <input
                        type="number"
                        placeholder="e.g. 8"
                        min="1"
                        max="18"
                        value={child.age}
                        onChange={(e) => handleChildChange(index, "age", e.target.value)}
                        style={styles.input}
                      />
                    </div>
                    <div style={styles.field}>
                      <label style={styles.label}>Grade</label>
                      <input
                        type="text"
                        placeholder="e.g. 3rd"
                        value={child.grade}
                        onChange={(e) => handleChildChange(index, "grade", e.target.value)}
                        style={styles.input}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button style={styles.btn} onClick={handleFinish}>Finish setup</button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  overlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "2rem", fontFamily: "'Nunito', sans-serif" },
  card: { background: "#fff", borderRadius: "20px", padding: "2.5rem", width: "100%", maxWidth: "460px", border: "1px solid #F5BF9A", maxHeight: "90vh", overflowY: "auto" },
  iconBox: { width: "48px", height: "48px", background: "#FDF0E6", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" },
  title: { fontFamily: "'Lora', serif", fontSize: "22px", color: "#9A3500", margin: "0 0 6px", textAlign: "center" },
  sub: { fontSize: "13px", color: "#C45A1A", margin: "0 0 1.75rem", textAlign: "center" },
  countRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", margin: "1.5rem 0" },
  countBtn: { width: "36px", height: "36px", borderRadius: "50%", background: "#E8620A", color: "#fff", border: "none", fontSize: "20px", cursor: "pointer", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Nunito', sans-serif" },
  count: { fontSize: "36px", fontFamily: "'Lora', serif", color: "#9A3500", minWidth: "40px", textAlign: "center" },
  btn: { width: "100%", padding: "11px", background: "#E8620A", color: "#fff", border: "none", borderRadius: "10px", fontSize: "15px", fontFamily: "'Nunito', sans-serif", fontWeight: 700, cursor: "pointer", marginTop: "1rem" },
  scrollArea: { maxHeight: "340px", overflowY: "auto", paddingRight: "4px" },
  childSection: { border: "1px solid #F5BF9A", borderRadius: "12px", padding: "1rem 1.25rem", marginBottom: "1rem" },
  childLabel: { fontSize: "12px", fontWeight: 700, color: "#E8620A", letterSpacing: "0.06em", textTransform: "uppercase", margin: "0 0 12px" },
  childRow: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" },
  field: { marginBottom: 0 },
  label: { display: "block", fontSize: "11px", fontWeight: 700, color: "#C45A1A", marginBottom: "4px", letterSpacing: "0.04em", textTransform: "uppercase" },
  input: { width: "100%", boxSizing: "border-box", padding: "8px 10px", fontSize: "13px", fontFamily: "'Nunito', sans-serif", border: "1.5px solid #F5BF9A", borderRadius: "8px", background: "#FDF0E6", color: "#3D1A00", outline: "none" },
};
