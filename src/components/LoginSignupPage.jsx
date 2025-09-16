import React, { useState } from "react";

function LoginSignupPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Brand/title */}
        <h1 style={styles.title}>
          Welcome to <span style={{ color: "#217147" }}>KrishiSakhi</span>
        </h1>
        <p style={styles.subtitle}>
          Cultivate your future with smart farming
        </p>

        {/* Tab toggle */}
        <div style={styles.tabContainer}>
          <button
            onClick={() => setIsLogin(true)}
            style={{ ...styles.tab, ...(isLogin ? styles.activeTab : {}) }}
          >
            <span role="img" aria-label="login" style={{ marginRight: 7 }}>🔑</span>
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            style={{ ...styles.tab, ...(!isLogin ? styles.activeTab : {}) }}
          >
            <span role="img" aria-label="sign up" style={{ marginRight: 7 }}>🌱</span>
            Sign Up
          </button>
        </div>

        {/* Form */}
        {isLogin ? (
          <form style={styles.form}>
            <input
              type="email"
              placeholder="Email"
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Log In
            </button>
            <div style={styles.linkWrap}>
              {/* Button styled as a link (best for accessibility) */}
              <button
                type="button"
                style={styles.link}
                onClick={() => {
                  // Implement forgot password modal or navigation here
                }}
              >
                Forgot password?
              </button>
            </div>
          </form>
        ) : (
          <form style={styles.form}>
            <input
              type="text"
              placeholder="Full Name"
              required
              style={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              required
              style={styles.input}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "82vh",
    background: "linear-gradient(120deg, #f2f9f75f 65%, #e9f7df 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    background: "#fff",
    borderRadius: "18px",
    padding: "2.5rem 2rem 2rem 2rem",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 10px 36px 0px rgba(33,113,71,0.09), 0 1.5px 6px 0px rgba(68,47,0,0.07)",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    margin: "0 0 0.5rem 0",
    textAlign: "center",
    fontWeight: 700,
    fontSize: "1.7rem",
    letterSpacing: "0.01em",
  },
  subtitle: {
    color: "#217147",
    textAlign: "center",
    opacity: 0.82,
    fontSize: "1rem",
    margin: "0 0 1.5rem 0",
    fontWeight: 500,
  },
  tabContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "2rem",
    borderBottom: "2px solid #eee",
  },
  tab: {
    flex: 1,
    padding: "12px 0",
    border: "none",
    borderBottom: "4px solid transparent",
    background: "none",
    fontWeight: 600,
    color: "#477658",
    fontSize: "1.07rem",
    cursor: "pointer",
    transition: "color 0.2s, border-bottom-color 0.2s",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  activeTab: {
    color: "#217147",
    borderBottomColor: "#217147",
    fontWeight: 700,
    background: "linear-gradient(90deg,#eefaea 80%,#e9f7df 100%)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    height: "45px",
    marginBottom: "1rem",
    padding: "0 12px",
    borderRadius: "7px",
    border: "1px solid #dde1e5",
    fontSize: "1rem",
    outlineColor: "#217147",
    boxSizing: "border-box",
  },
  button: {
    backgroundColor: "#217147",
    color: "#fff",
    border: "none",
    borderRadius: "7px",
    padding: "12px",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "0.2rem",
    transition: "background-color 0.3s ease",
    boxShadow: "0 2px 14px 0px #c3eec7a3",
  },
  linkWrap: {
    marginTop: "0.2em",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  link: {
    background: "none",
    border: "none",
    padding: 0,
    color: "#217147",
    textDecoration: "underline",
    fontSize: "0.97rem",
    cursor: "pointer",
    fontWeight: 500,
    textAlign: "right",
  }
};

export default LoginSignupPage;
