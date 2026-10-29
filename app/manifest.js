export default function manifest() {
  return {
    name: "RENC Car Rentals Hyderabad",
    short_name: "RENC Rentals",
    description: "Self-Drive, Luxury & Airport Car Hire Services in Hyderabad with Doorstep Delivery",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ff4800",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}

