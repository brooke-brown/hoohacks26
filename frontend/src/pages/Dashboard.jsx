import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SAMPLE_POSTS = [
  { id: 1, author: "Sarah Robinson", initials: "SR", date: "March 21, 2026", body: "Does anyone have recommendations for a good math curriculum for a 4th grader who loves hands-on learning? We've tried a few but nothing has really clicked yet!", tag: "Math" },
  { id: 2, author: "Tom Martinez", initials: "TM", date: "March 20, 2026", body: "Just wanted to share that our co-op is hosting a science fair next month! All homeschool families welcome. DM me for details.", tag: "Events" },
  { id: 3, author: "Lisa Park", initials: "LP", date: "March 19, 2026", body: "We just finished our first year of homeschooling and I can't believe how much my kids have grown. So grateful for this community!", tag: "General" },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const firstName = "firstName"; // TODO: REPLACE WITH REAL USER DATA FROM BACKEND

  const navItems = [
    {
      label: "My Profile",
      key: "profile",
      items: ["View profile", "Edit profile", "My children"],
    },
    {
      label: "My Co-Ops",
      key: "coops",
      items: ["Browse co-ops", "My co-ops", "Create a co-op"],
    },
    {
      label: "Settings",
      key: "settings",
      items: ["Account settings", "Notifications", "Privacy"],
    },
    {
      label: "FAQ",
      key: "faq",
      items: ["Getting started", "Contact support"],
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&family=Lora:wght@600&display=swap');

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; max-height: 200px; padding-top: 3rem; padding-bottom: 2rem; }
          to   { opacity: 0; max-height: 0; padding-top: 0; padding-bottom: 0; }
        }
        @keyframes feedIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .db-welcome-banner {
          text-align: center;
          animation: fadeDown 1.5s ease both, fadeOut 1.6s ease 2.5s both;
          padding: 3rem 2rem 2rem;
          overflow: hidden;
        }
        .db-feed-wrap {
          animation: feedIn 0.6s ease 2.8s both;
          opacity: 0;
        }
        .db-dropdown-menu {
            display: block;
            position: absolute;
            top: 40px;
            left: 0;
            background: #fff;
            border: 1px solid #F5BF9A;
            border-radius: 10px;
            padding: 6px;
            min-width: 160px;
            z-index: 100;
            opacity: 0;
            transform: translateY(-8px);
            pointer-events: none;
            transition: opacity 0.2s ease, transform 0.2s ease;
            }
        .db-dropdown:hover .db-dropdown-menu {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
        }
        .db-dropdown-item:hover { background: #FDF0E6; }
        .db-post-btn:hover { background: #C45A1A !important; }
        .db-logout-btn:hover { background: rgba(255,255,255,0.3) !important; }
      `}</style>

      <div style={styles.root}>
        {/* Navbar */}
        <div style={styles.nav}>
          <div style={styles.logo}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 19V6.5C4 5.4 4.9 4.5 6 4.5H18C19.1 4.5 20 5.4 20 6.5V19" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M4 19H20" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M9 4.5V12L12 10.5L15 12V4.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Homeschool Hub
          </div>

          <div style={styles.navLinks}>
            {navItems.map((item) => (
              <div key={item.key} className="db-dropdown" style={{ position: "relative" }}>
                <button
                  style={styles.dropdownBtn}
                >
                  {item.label}
                  <span style={styles.chevron} />
                </button>
                <div className="db-dropdown-menu">
                  {item.items.map((i) => (
                    <div key={i} className="db-dropdown-item" style={styles.dropdownItem}>{i}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="db-logout-btn"
            style={styles.logout}
            onClick={() => navigate("/")}
          >
            Log out
          </button>
        </div>

        {/* Welcome banner */}
        <div className="db-welcome-banner">
          <h1 style={styles.welcomeText}>Welcome, {firstName}!</h1>
        </div>

        {/* Feed */}
        <div className="db-feed-wrap" style={styles.feedWrap}>
          <div style={styles.feedHeader}>
            <h2 style={styles.feedTitle}>Community feed</h2>
            <button className="db-post-btn" style={styles.postBtn}>+ New post</button>
          </div>

          {SAMPLE_POSTS.map((post) => (
            <div key={post.id} style={styles.post}>
              <div style={styles.postAuthor}>
                <div style={styles.avatar}>{post.initials}</div>
                <div>
                  <p style={styles.authorName}>{post.author}</p>
                  <p style={styles.postDate}>{post.date}</p>
                </div>
              </div>
              <p style={styles.postBody}>{post.body}</p>
              <span style={styles.tag}>{post.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const styles = {
  root: { minHeight: "100vh", background: "#FDF0E6", fontFamily: "'Nunito', sans-serif" },
  nav: { background: "#E8620A", padding: "0 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "52px" },
  logo: { fontFamily: "'Lora', serif", color: "#fff", fontSize: "17px", display: "flex", alignItems: "center", gap: "8px" },
  navLinks: { display: "flex", alignItems: "center", gap: "4px" },
  dropdownBtn: { background: "none", border: "none", color: "#fff", fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 600, padding: "6px 12px", borderRadius: "8px", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" },
  chevron: { display: "inline-block", width: "8px", height: "8px", borderRight: "2px solid #fff", borderBottom: "2px solid #fff", transform: "rotate(45deg)", marginBottom: "2px" },
  dropdownItem: { display: "block", padding: "8px 12px", fontSize: "13px", color: "#9A3500", borderRadius: "6px", cursor: "pointer" },
  logout: { background: "rgba(255,255,255,0.2)", color: "#fff", border: "none", borderRadius: "8px", padding: "6px 14px", fontFamily: "'Nunito', sans-serif", fontSize: "13px", cursor: "pointer", fontWeight: 600 },
  welcomeText: { fontFamily: "'Lora', serif", fontSize: "36px", color: "#9A3500", margin: 0 },
  feedWrap: { padding: "0 2rem 2rem", maxWidth: "680px", margin: "0 auto" },
  feedHeader: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" },
  feedTitle: { fontFamily: "'Lora', serif", fontSize: "18px", color: "#9A3500", margin: 0 },
  postBtn: { background: "#E8620A", color: "#fff", border: "none", borderRadius: "8px", padding: "7px 16px", fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, cursor: "pointer" },
  post: { background: "#fff", borderRadius: "14px", border: "1px solid #F5BF9A", padding: "1.25rem 1.5rem", marginBottom: "1rem" },
  postAuthor: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" },
  avatar: { width: "36px", height: "36px", borderRadius: "50%", background: "#E8620A", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "13px", fontWeight: 700, flexShrink: 0 },
  authorName: { fontSize: "14px", fontWeight: 700, color: "#9A3500", margin: 0 },
  postDate: { fontSize: "11px", color: "#C45A1A", margin: 0 },
  postBody: { fontSize: "14px", color: "#3D1A00", lineHeight: 1.6, margin: 0 },
  tag: { display: "inline-block", background: "#FDF0E6", color: "#C45A1A", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", marginTop: "10px" },
};
