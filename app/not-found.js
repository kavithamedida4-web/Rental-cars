export const metadata = {
  title: "404 - Page Not Found | RENC Car Rentals Hyderabad",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "100px 20px", fontFamily: "var(--font-main)" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#0f172a", marginBottom: "12px" }}>
        Page Not Found
      </h1>
      <p style={{ margin: "14px 0", color: "#64748b", fontSize: "1rem" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        style={{
          display: "inline-block",
          marginTop: "16px",
          background: "var(--rentq-orange)",
          color: "#ffffff",
          padding: "12px 24px",
          borderRadius: "8px",
          fontWeight: 700,
          textDecoration: "none",
        }}
      >
        Return to Homepage
      </a>
    </div>
  );
}
