"use client";

import { useState, useRef } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowUpRight,
  ArrowRight,
  Shield,
  Truck,
  Zap,
  Check,
  Star,
  Phone,
  MessageCircle,
  X,
  User,
  SlidersHorizontal,
  Briefcase,
  Plane,
  Car,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Menu,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ShoppingBag,
  Search,
  Globe,
  Mail,
  Smartphone,
  KeyRound,
  RotateCw,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  // Services Horizontal Scroll ref & handler
  const servicesTrackRef = useRef(null);
  const scrollServices = (direction) => {
    if (servicesTrackRef.current) {
      const card = servicesTrackRef.current.querySelector(".service-card-premium");
      const cardWidth = card ? card.offsetWidth + 20 : 330;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      servicesTrackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Reviews Horizontal Scroll ref & handler
  const reviewsTrackRef = useRef(null);
  const scrollReviews = (direction) => {
    if (reviewsTrackRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      reviewsTrackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Booking state
  // Booking & Filter state
  const [pickupLocation, setPickupLocation] = useState("Shamshabad Airport (RGIA)");
  const [durationPlan, setDurationPlan] = useState("daily");
  const [transmissionType, setTransmissionType] = useState("all");

  // Fleet category filter
  const [selectedCategory, setSelectedCategory] = useState("all");

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Active Hub
  const [activeHub, setActiveHub] = useState(0);

  // Modal & Form states
  const [selectedCarModal, setSelectedCarModal] = useState(null);
  const [isBookedSuccess, setIsBookedSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Fast Booking & Contact State (Design Replica)
  const [fastBookingForm, setFastBookingForm] = useState({
    name: "",
    phone: "",
    service: "1. Self-Drive Hatchbacks (Swift, Baleno, Kwid)",
    location: "Hyderabad / Shamshabad Airport (RGIA)",
    notes: "",
  });

  const fleet = [
    {
      id: "renault-kwid",
      name: "Renault Kwid",
      category: "hatchback",
      type: "Hatchback",
      priceDaily: "₹1,500",
      priceWeekly: "₹1,250",
      priceMonthly: "₹1,000",
      seats: "5 Seats",
      transmission: "Manual & AMT",
      fuel: "Petrol (22 km/l)",
      image: "/images/fleet-kwid.png",
    },
    {
      id: "maruti-spresso",
      name: "Maruti S-Presso",
      category: "hatchback",
      type: "Hatchback",
      priceDaily: "₹1,500",
      priceWeekly: "₹1,250",
      priceMonthly: "₹1,000",
      seats: "5 Seats",
      transmission: "Manual & AGS",
      fuel: "Petrol (24 km/l)",
      image: "/images/fleet-spresso.jpg",
    },
    {
      id: "maruti-swift",
      name: "Maruti Swift",
      category: "hatchback",
      type: "Hatchback",
      priceDaily: "₹2,000",
      priceWeekly: "₹1,700",
      priceMonthly: "₹1,400",
      seats: "5 Seats",
      transmission: "Manual & Automatic",
      fuel: "Petrol (23 km/l)",
      image: "/images/fleet-swift.jpg",
    },
    {
      id: "maruti-baleno",
      name: "Maruti Baleno",
      category: "premium-hatch",
      type: "Premium Hatchback",
      priceDaily: "₹2,200",
      priceWeekly: "₹1,850",
      priceMonthly: "₹1,500",
      seats: "5 Seats",
      transmission: "Manual & AGS",
      fuel: "Petrol (22 km/l)",
      image: "/images/fleet-baleno.png",
    },
    {
      id: "hyundai-i20",
      name: "Hyundai i20",
      category: "premium-hatch",
      type: "Premium Hatchback",
      priceDaily: "₹2,500",
      priceWeekly: "₹2,100",
      priceMonthly: "₹1,700",
      seats: "5 Seats",
      transmission: "Automatic & Manual",
      fuel: "Petrol (20 km/l)",
      image: "/images/fleet-i20.jpg",
    },
    {
      id: "toyota-glanza",
      name: "Toyota Glanza",
      category: "premium-hatch",
      type: "Premium Hatchback",
      priceDaily: "₹2,500",
      priceWeekly: "₹2,100",
      priceMonthly: "₹1,700",
      seats: "5 Seats",
      transmission: "Automatic & Manual",
      fuel: "Petrol (22 km/l)",
      image: "/images/fleet-glanza.jpg",
    },
    {
      id: "tata-punch",
      name: "Tata Punch",
      category: "compact-suv",
      type: "Compact SUV",
      priceDaily: "₹2,500",
      priceWeekly: "₹2,100",
      priceMonthly: "₹1,700",
      seats: "5 Seats",
      transmission: "Manual & AMT",
      fuel: "Petrol (5-Star)",
      image: "/images/fleet-punch.png",
    },
    {
      id: "tata-nexon",
      name: "Tata Nexon",
      category: "compact-suv",
      type: "Compact SUV",
      priceDaily: "₹2,500",
      priceWeekly: "₹2,100",
      priceMonthly: "₹1,700",
      seats: "5 Seats",
      transmission: "Automatic & Manual",
      fuel: "Diesel / Petrol",
      image: "/images/fleet-nexon.jpg",
    },
    {
      id: "kia-seltos",
      name: "Kia Seltos",
      category: "suv",
      type: "SUV",
      priceDaily: "₹3,000",
      priceWeekly: "₹2,500",
      priceMonthly: "₹2,000",
      seats: "5 Seats",
      transmission: "Automatic & Manual",
      fuel: "Diesel / Petrol",
      image: "/images/fleet-seltos.jpg",
    },
    {
      id: "hyundai-creta",
      name: "Hyundai Creta",
      category: "suv",
      type: "SUV",
      priceDaily: "₹3,000",
      priceWeekly: "₹2,500",
      priceMonthly: "₹2,000",
      seats: "5 Seats",
      transmission: "Automatic & Manual",
      fuel: "Diesel / Petrol",
      image: "/images/fleet-creta.jpg",
    },
    {
      id: "maruti-ertiga",
      name: "Maruti Ertiga",
      category: "mpv-7",
      type: "7-Seater MPV",
      priceDaily: "₹3,000",
      priceWeekly: "₹2,500",
      priceMonthly: "₹2,000",
      seats: "7 Seats",
      transmission: "Manual & Automatic",
      fuel: "Petrol / Hybrid",
      image: "/images/fleet-ertiga.jpg",
    },
    {
      id: "maruti-xl6",
      name: "Maruti XL6",
      category: "mpv-7",
      type: "6-Seater MPV",
      priceDaily: "₹3,200",
      priceWeekly: "₹2,700",
      priceMonthly: "₹2,200",
      seats: "6 Captain Seats",
      transmission: "Automatic & Manual",
      fuel: "Petrol Hybrid",
      image: "/images/fleet-xl6.jpg",
    },
    {
      id: "mahindra-xuv500",
      name: "Mahindra XUV500",
      category: "mpv-7",
      type: "7-Seater SUV",
      priceDaily: "₹3,500",
      priceWeekly: "₹2,900",
      priceMonthly: "₹2,400",
      seats: "7 Seats",
      transmission: "Automatic & Manual",
      fuel: "mHawk Diesel",
      image: "/images/fleet-xuv700.jpg",
    },
    {
      id: "kia-carens",
      name: "Kia Carens",
      category: "mpv-7",
      type: "7-Seater MPV",
      priceDaily: "₹3,500",
      priceWeekly: "₹2,900",
      priceMonthly: "₹2,400",
      seats: "7 Seats",
      transmission: "Automatic & Manual",
      fuel: "Diesel / Petrol",
      image: "/images/fleet-carens.jpg",
    },
    {
      id: "toyota-innova",
      name: "Toyota Innova Crysta",
      category: "mpv-7",
      type: "7-Seater MPV",
      priceDaily: "₹3,500",
      priceWeekly: "₹2,950",
      priceMonthly: "₹2,450",
      seats: "7 Seats",
      transmission: "Automatic & Manual",
      fuel: "Diesel 2.4L",
      image: "/images/fleet-innova.jpg",
    },
  ];

  const categories = [
    { id: "all", name: `All Fleet (${fleet.length})` },
    { id: "hatchback", name: `Hatchbacks (${fleet.filter((c) => c.category === "hatchback").length})` },
    { id: "premium-hatch", name: `Premium Hatchbacks (${fleet.filter((c) => c.category === "premium-hatch").length})` },
    { id: "compact-suv", name: `Compact SUVs (${fleet.filter((c) => c.category === "compact-suv").length})` },
    { id: "suv", name: `5-Seater SUVs (${fleet.filter((c) => c.category === "suv").length})` },
    { id: "mpv-7", name: `7-Seater MPVs & SUVs (${fleet.filter((c) => c.category === "mpv-7").length})` },
  ];

  const filteredFleet =
    selectedCategory === "all"
      ? fleet
      : fleet.filter((car) => car.category === selectedCategory);

  const hyderabadHubs = [
    {
      title: "Shamshabad Airport (RGIA)",
      badge: "Express Terminal Pickup",
      address: "Car Pickup Bay 4, Beside Terminal 1 Exit, Shamshabad",
      timing: "24/7 Delivery & Drop-off",
      phone: "+91 9100-247-365",
    },
    {
      title: "Hitec City & Madhapur",
      badge: "IT Hub Center",
      address: "Near Cyber Towers Metro Station, Madhapur",
      timing: "7:00 AM - 11:30 PM",
      phone: "+91 9100-247-366",
    },
    {
      title: "Gachibowli Financial District",
      badge: "Corporate Delivery",
      address: "Waverock Building Road, Nanakramguda, Gachibowli",
      timing: "7:00 AM - 11:00 PM",
      phone: "+91 9100-247-367",
    },
    {
      title: "Asif Nagar & Mehdipatnam",
      badge: "Main Office & Fleet Hub",
      address: "2nd Floor, Asif Nagar Rd, Opp. Pista House, Hyderabad 500006",
      timing: "8:00 AM - 11:00 PM",
      phone: "+91 9100-247-368",
    },
  ];

  const faqs = [
    {
      q: "What documents are required for car rental?",
      a: "Only a valid original Driving License (at least 1 year old) and an Aadhaar Card or Passport for identity verification. Our quick digital KYC takes under 2 minutes with zero physical paperwork.",
    },
    {
      q: "How does doorstep delivery and airport pickup work?",
      a: "Select your desired location—whether Rajiv Gandhi International Airport (RGIA), your residence, or hotel. Our executive brings the sanitized, fueled car to you within 60 minutes for a seamless key handover.",
    },
    {
      q: "What are the Daily Deals, Weekly Rentals & Monthly Subscriptions?",
      a: "Daily rentals give you total 24-hour flexibility. Weekly rentals (7+ days) automatically apply up to 25% savings. Monthly subscriptions offer the lowest rate per day with free maintenance, insurance, and doorstep sanitization.",
    },
    {
      q: "What is the security deposit and how fast is it refunded?",
      a: "Security deposits are minimal (starting at just ₹2,000 for hatchbacks to ₹10,000 for luxury exotics). All deposits are refunded directly to your original bank/UPI account within 24 hours of vehicle return.",
    },
    {
      q: "Are both Manual and Automatic transmission cars available?",
      a: "Yes! You can choose between smooth Automatic transmissions (paddle shift / torque converter) and engaging Manual gearboxes across our entire Hyderabad fleet of hatchbacks, sedans, and SUVs.",
    },
  ];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsBookedSuccess(true);

    if (selectedCarModal) {
      const modalMessage = `*NEW CAR RESERVATION - ROYAL CARS & LUXURY CARS HYDERABAD*
• Car: ${selectedCarModal.name}
• Transmission: ${selectedCarModal.transmission}
• Plan: ${durationPlan === "monthly" ? "Monthly Subscription" : durationPlan === "weekly" ? "Weekly 7-Day" : "Daily Rental"}
• Rate: ${durationPlan === "monthly" ? selectedCarModal.priceMonthly : durationPlan === "weekly" ? selectedCarModal.priceWeekly : selectedCarModal.priceDaily}/day
• Pickup Location: ${pickupLocation}`;

      const modalWaUrl = `https://wa.me/917396662420?text=${encodeURIComponent(modalMessage)}`;
      setTimeout(() => {
        if (typeof window !== "undefined") {
          window.location.href = modalWaUrl;
        }
      }, 700);
    }

    setTimeout(() => {
      setIsBookedSuccess(false);
      setSelectedCarModal(null);
    }, 2500);
  };

  const handleFastBookingSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);

    const message = `*NEW CONTACT & BOOKING INQUIRY - ROYAL CARS & LUXURY CARS HYDERABAD*
• Name: ${fastBookingForm.name || "Customer"}
• Phone: ${fastBookingForm.phone}
• Vehicle / Service: ${fastBookingForm.service}
• Pickup Location: ${fastBookingForm.location}
• Requirement & Notes: ${fastBookingForm.notes || "Standard rental inquiry"}`;

    const waUrl = `https://wa.me/917396662420?text=${encodeURIComponent(message)}`;
    if (typeof window !== "undefined") {
      window.location.href = waUrl;
    }
  };

  return (
    <>
      {/* ========================================================
          MAIN NAVBAR (RENC Navigation)
          ======================================================== */}
      <header className="rentq-navbar">
        <div className="container nav-inner-rentq">
          {/* Brand Logo on the Left */}
          <a href="#hero" className="brand-logo-custom" id="brand-logo">
            <div className="brand-symbol">
              <Car size={22} strokeWidth={2.4} />
            </div>
            <div className="brand-text-block">
              <span className="brand-title">Royal Cars</span>
              <span className="brand-tagline">LUXURY CARS</span>
            </div>
          </a>

          {/* Center Navigation Links (Home, About, Services, Fleet, Gallery) */}
          <ul className="nav-center-menu">
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#fleet">Fleet</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>

          {/* Right Action (Book Now CTA) */}
          <div className="nav-right-action">
            <a href="#contact" className="nav-book-pill">
              <span>Book Now</span>
            </a>
            <button
              className="icon-btn-pill mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div style={{
            background: "#ff4800",
            padding: "16px 24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }}>
            <a href="#hero" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontWeight: 700 }}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontWeight: 700 }}>About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontWeight: 700 }}>Services</a>
            <a href="#fleet" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontWeight: 700 }}>Fleet</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontWeight: 700 }}>Gallery</a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                background: "#000000",
                color: "#ffffff",
                padding: "10px 22px",
                borderRadius: "50px",
                fontWeight: 800,
                fontSize: "0.92rem",
                marginTop: "6px",
                width: "fit-content",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)"
              }}
            >
              <span>Book Now</span>
            </a>
          </div>
        )}
      </header>

      <main>
        {/* ========================================================
            1. HERO SECTION — Split Layout Matching User Provided Image
            ======================================================== */}
        <section className="hero-custom-split-section" id="hero">
          {/* Background Image: 4K Ultra High-Res Custom Render Matching User Style */}
          <div className="hero-custom-bg-wrap">
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/hero-mobile-orange-sedan.jpg" />
              <img
                src="/images/hero-orange-split-4k.jpg"
                alt="Royal Cars Hyderabad - Daily, Weekly & Monthly Self Drive Rentals"
                className="hero-custom-bg-img"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={1920}
                height={720}
                onError={(e) => {
                  e.target.src = "/images/hero-mobile-user.jpg";
                }}
              />
            </picture>
          </div>

          <div className="container hero-custom-overlay-content">
            <div className="hero-custom-left-block">
              <span className="hero-custom-tag">BEST CAR RENTAL DEALS</span>
              <h1 className="hero-custom-heading">
                Daily, Weekly &amp;<br />
                Monthly Car Rentals<br />
                <span className="hero-custom-heading-accent">in Hyderabad</span>
              </h1>
              <div className="hero-custom-accent-line" />

              {/* Action Buttons */}
              <div className="hero-custom-btn-group">
                <a href="#fleet" className="hero-custom-btn-primary">
                  <span>Explore Fleet</span>
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="https://wa.me/917396662420?text=Hello%20Royal%20Cars%2C%20I%20want%20to%20rent%20a%20car"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-custom-btn-secondary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#25d366" style={{ flexShrink: 0 }}>
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.39C16.32 14.27 15.1 13.67 14.87 13.58C14.64 13.5 14.48 13.45 14.31 13.7C14.15 13.95 13.67 14.52 13.53 14.68C13.38 14.85 13.24 14.87 12.99 14.75C12.74 14.62 11.94 14.36 10.99 13.52C10.25 12.86 9.75 12.05 9.61 11.8C9.46 11.55 9.59 11.42 9.72 11.3C9.83 11.19 9.97 11.01 10.09 10.87C10.22 10.73 10.26 10.62 10.34 10.46C10.42 10.29 10.38 10.15 10.32 10.03C10.26 9.9 9.76 8.68 9.56 8.17C9.36 7.67 9.16 7.74 9.01 7.73C8.87 7.72 8.71 7.72 8.54 7.72C8.38 7.72 8.11 7.78 7.89 8.03C7.66 8.27 7.02 8.87 7.02 10.1C7.02 11.33 7.91 12.51 8.04 12.68C8.16 12.84 9.79 15.36 12.28 16.43C12.87 16.69 13.33 16.84 13.69 16.96C14.29 17.15 14.83 17.12 15.26 17.06C15.74 16.99 16.74 16.45 16.95 15.87C17.16 15.29 17.16 14.79 17.09 14.68C17.03 14.57 16.82 14.51 16.57 14.39Z" />
                  </svg>
                  <span>Instant Booking</span>
                </a>
              </div>
            </div>

            {/* Mobile-Only Feature Bar matching user reference */}
            <div className="hero-mobile-features-bar">
              <a href="#fleet" className="hero-mobile-feature-col">
                <Car size={24} className="hero-mf-icon" />
                <span className="hero-mf-title">Explore</span>
                <span className="hero-mf-sub">Fleet</span>
              </a>
              <div className="hero-mobile-feature-sep" />
              <a
                href="https://wa.me/917396662420?text=Hello%20Royal%20Cars%2C%20I%20want%20to%20rent%20a%20car"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-mobile-feature-col"
              >
                <Zap size={24} className="hero-mf-icon" />
                <span className="hero-mf-title">Instant</span>
                <span className="hero-mf-sub">Booking</span>
              </a>
              <div className="hero-mobile-feature-sep" />
              <div className="hero-mobile-feature-col">
                <Shield size={24} className="hero-mf-icon" />
                <span className="hero-mf-title">Safe &amp;</span>
                <span className="hero-mf-sub">Reliable</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. ABOUT US SECTION (Design Ref: Large Primary Photo + Inset Secondary + Badge + Features)
            ======================================================== */}
        <section className="section-padding about-modern-section" id="about">
          <div className="container">
            <div className="about-modern-layout">
              {/* Left Column: Asymmetric Framing Photo Cluster */}
              <div className="about-modern-visual-col">
                {/* Vertical Ghost Typography */}
                <div className="about-modern-vertical-word" aria-hidden="true">
                  ROYAL
                </div>

                {/* Primary Large Rectangular Photo (Driver Handover) */}
                <div className="about-modern-photo-main">
                  <img
                    src="/images/about-service-arch.jpg"
                    alt="Royal Cars Hyderabad premium fleet handover service"
                    className="about-modern-img"
                    loading="lazy"
                    decoding="async"
                    width={520}
                    height={460}
                  />
                </div>

                {/* Overlapping Secondary Inset Photo (Detailing & Quality Inspection) */}
                <div className="about-modern-photo-inset">
                  <img
                    src="/images/gallery-3-inspection.jpg"
                    alt="Royal Cars comprehensive vehicle inspection and quality preparation"
                    className="about-modern-img"
                    loading="lazy"
                    decoding="async"
                    width={320}
                    height={260}
                  />
                </div>

                {/* Deep Navy Floating Badge with Accent Stripe */}
                <div className="about-modern-badge">
                  <span className="about-modern-badge-stripe" />
                  <span className="about-modern-badge-text">#1 Rated Car Rentals in Hyderabad</span>
                </div>
              </div>

              {/* Right Column: Content matching the reference layout & hierarchy */}
              <div className="about-modern-content-col">
                <div className="about-modern-tagline">
                  <span className="about-modern-tag-line" />
                  <span>About Company</span>
                </div>

                <h2 className="about-modern-heading">
                  Hyderabad&apos;s trusted car rental company.
                </h2>

                <p className="about-modern-lead">
                  Seamless self-drive and luxury car rentals across Hyderabad with zero security deposit and instant doorstep delivery.
                </p>

                {/* 2 Square Orange Feature Cards */}
                <div className="about-modern-features-list">
                  {/* Feature 1: Doorstep Delivery */}
                  <div className="about-modern-feature-card">
                    <div className="about-modern-feature-icon-box">
                      <Truck size={24} strokeWidth={2.2} />
                    </div>
                    <div className="about-modern-feature-body">
                      <h3 className="about-modern-feature-title">
                        Doorstep Delivery
                      </h3>
                      <p className="about-modern-feature-desc">
                        Instant drop-off &amp; pickup across Hyderabad within 60 minutes.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2: Quality Certified & Maintained */}
                  <div className="about-modern-feature-card">
                    <div className="about-modern-feature-icon-box">
                      <CheckCircle2 size={24} strokeWidth={2.2} />
                    </div>
                    <div className="about-modern-feature-body">
                      <h3 className="about-modern-feature-title">
                        Inspected &amp; Certified
                      </h3>
                      <p className="about-modern-feature-desc">
                        Sanitized vehicles with comprehensive insurance and 24/7 RSA.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Discover Fleet Button (Navy matching reference styling) */}
                <div className="about-modern-action-wrap">
                  <a href="#fleet" className="about-modern-btn">
                    DISCOVER FLEET
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. SERVICES SECTION (Matching Auntri / Reference Design)
            - Split Header: Tag & Heading on Left, Orange Button on Right
            - Cards with Top Image, Overlapping Circle Icon, Angled Cut Corner
            - Card 1: Vibrant Orange Card with White Button (Highlighted)
            - Card 2: Clean White Card with Dark Link & Arrow
            ======================================================== */}
        <section className="section-padding bg-warm" id="services">
          <div className="container">
            {/* Header row */}
            <div className="svc-ref-header">
              <div className="svc-ref-header-left">
                <div className="svc-ref-tag">
                  <span className="svc-ref-tag-icon">
                    <Sparkles size={13} />
                  </span>
                  <span>OUR SERVICES</span>
                </div>
                <h2 className="svc-ref-title">
                  Ways To Get Your Car In Hyderabad
                </h2>
              </div>
            </div>

            {/* Cards Grid matching Reference Image */}
            <div className="svc-ref-grid">
              {/* Card 1: Doorstep Car Delivery (Orange Theme with White Button) */}
              <div className="svc-ref-card">
                <div className="svc-ref-img-box">
                  <img
                    src="/images/gallery-1-keys.jpg"
                    alt="Doorstep self-drive car delivery in Hyderabad"
                    className="svc-ref-img"
                    loading="lazy"
                    decoding="async"
                    width={480}
                    height={250}
                  />
                </div>
                <div className="svc-ref-content-box svc-ref-orange-box">
                  <h3 className="svc-ref-card-title title-white">
                    Doorstep Car Delivery
                  </h3>
                  <p className="svc-ref-card-desc desc-white">
                    Sanitized self-drive or luxury car delivered right to your home, office, hotel, or RGIA airport anywhere in Hyderabad within 60 minutes.
                  </p>
                  <a
                    href="https://wa.me/917396662420?text=Hi%20Royal%20Cars%2C%20I%20would%20like%20to%20book%20a%20Doorstep%20Car%20Delivery%20in%20Hyderabad."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="svc-ref-btn-white"
                  >
                    <span>BOOK NOW</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>

              {/* Card 2: Hub Self-Pickup (White Theme with Dark Link) */}
              <div className="svc-ref-card">
                <div className="svc-ref-img-box">
                  <img
                    src="/images/about-driver.jpg"
                    alt="Customer visiting Royal Cars Hyderabad hub for car pickup"
                    className="svc-ref-img"
                    loading="lazy"
                    decoding="async"
                    width={480}
                    height={250}
                  />
                </div>
                <div className="svc-ref-content-box svc-ref-white-box">
                  <h3 className="svc-ref-card-title title-dark">
                    Hub Self-Pickup
                  </h3>
                  <p className="svc-ref-card-desc desc-slate">
                    Visit our central Hyderabad hub in person. Inspect your preferred vehicle, test-drive, complete instant 2-minute digital verification, and drive away immediately.
                  </p>
                  <a
                    href="https://wa.me/917396662420?text=Hi%20Royal%20Cars%2C%20I%20would%20like%20to%20visit%20your%20Hyderabad%20hub%20to%20pick%20up%20a%20car."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="svc-ref-link-dark"
                  >
                    <span>BOOK NOW</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. FLEET CATALOG SECTION (Fourth in sequence, after Services)
            - Professional & Designed Matching Image 2
            ======================================================== */}
        <section className="fleet-section-premium" id="fleet">
          <div className="container">
            {/* Header matching Image 2 */}
            <div className="fleet-showcase-header">
              <h2 className="fleet-showcase-title">
                Daily, Weekly &amp; Monthly Car Rentals In Hyderabad
              </h2>
              <div className="fleet-showcase-accent-bar" />
              <p className="fleet-showcase-subtext">
                Explore top self-drive cars in Hyderabad with Manual &amp; Automatic transmissions on flexible Daily, Weekly, or Monthly plans.
              </p>
            </div>

            {/* Duration Plan Selector Tabs from Image 2 */}
            <div className="fleet-plan-selector-wrap">
              <div className="fleet-plan-bar">
                <button
                  type="button"
                  className={`fleet-plan-btn ${durationPlan === "daily" ? "active" : ""}`}
                  onClick={() => setDurationPlan("daily")}
                >
                  <Calendar size={16} />
                  <span>Daily</span>
                </button>

                <button
                  type="button"
                  className={`fleet-plan-btn ${durationPlan === "weekly" ? "active" : ""}`}
                  onClick={() => setDurationPlan("weekly")}
                >
                  <Calendar size={16} />
                  <span>Weekly</span>
                  <span className="fleet-badge-weekly">7-Day</span>
                </button>

                <button
                  type="button"
                  className={`fleet-plan-btn ${durationPlan === "monthly" ? "active" : ""}`}
                  onClick={() => setDurationPlan("monthly")}
                >
                  <RotateCw size={15} />
                  <span>Monthly</span>
                  <span className="fleet-badge-deal">Deal</span>
                </button>
              </div>
            </div>

            {/* Category Filter Pills from Image 2 */}
            <div className="fleet-category-pills-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`fleet-category-pill ${
                    selectedCategory === cat.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Live Filtered Cars Grid */}
            <div className="fleet-grid-rentq" style={{ marginTop: "36px" }}>
              {filteredFleet.map((car) => {
                const activePrice =
                  durationPlan === "monthly"
                    ? car.priceMonthly
                    : durationPlan === "weekly"
                    ? car.priceWeekly
                    : car.priceDaily;

                return (
                  <div key={car.id} className="car-catalog-card">
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                        <h3 style={{ fontSize: "1.08rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.25 }}>
                          {car.name}
                        </h3>
                      </div>
                      <div style={{ fontSize: "0.76rem", color: "#64748b", textTransform: "capitalize", fontWeight: 600, marginBottom: "8px" }}>
                        {categories.find((c) => c.id === car.category)?.name.split("(")[0].trim() || car.category}
                      </div>

                      <div className="car-photo-area">
                        <img
                          src={car.image}
                          alt={`${car.name} — ${car.seats}, ${car.transmission}, ${car.fuel} car rental in Hyderabad`}
                          loading="lazy"
                          decoding="async"
                          width={480}
                          height={270}
                        />
                      </div>

                      <div className="car-specs-ribbon">
                        <span>{car.seats}</span>
                        <span>•</span>
                        <span>{car.transmission}</span>
                        <span>•</span>
                        <span>{car.fuel}</span>
                      </div>
                    </div>

                    <div>
                      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "14px" }}>
                        <div>
                          <span style={{ fontSize: "1.35rem", fontWeight: 850, color: "var(--rentq-orange)" }}>
                            {activePrice}
                          </span>
                          <span style={{ fontSize: "0.78rem", color: "#64748b", fontWeight: 600 }}> / day</span>
                        </div>
                        <span style={{ fontSize: "0.7rem", background: "#f1f5f9", padding: "3px 8px", borderRadius: "6px", color: "#475569", fontWeight: 700, textTransform: "uppercase" }}>
                          {durationPlan} Plan
                        </span>
                      </div>

                      <button
                        type="button"
                        className="booking-submit-whatsapp-btn"
                        style={{ padding: "10px 16px", fontSize: "0.86rem", borderRadius: "10px", marginTop: 0, background: "#000000", color: "#ffffff" }}
                        onClick={() => setSelectedCarModal(car)}
                      >
                        <span>Book Now</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        
        {/* ========================================================
            4. HOW IT WORKS SECTION (Fourth in sequence)
            ======================================================== */}
        <section className="section-padding bg-white" id="how-it-works">
          <div className="container">
            <div className="section-header-center">
              <div className="section-tag">
                <span className="dot"></span>
                <span>How It Works</span>
              </div>
              <h2 className="section-title">
                Streamlined processes for a hassle-free experience
              </h2>
            </div>

            <div className="how-it-works-grid">
              {/* Step 1: Choose Your Vehicle */}
              <div className="how-step-card">
                <div className="how-step-illustration-wrap">
                  <img
                    src="/images/how-step-1.jpg"
                    alt="Illustration of customer choosing a rental car on mobile"
                    className="how-step-illustration"
                    loading="lazy"
                    decoding="async"
                    width={220}
                    height={160}
                  />
                </div>
                <span className="how-step-tag">Step 01</span>
                <h3 className="how-step-title">
                  Choose Your Vehicle
                </h3>
                <p className="how-step-desc">
                  Browse 38+ verified cars—from hatchbacks to executive sedans and luxury SUVs with Manual or Automatic transmission.
                </p>
              </div>

              {/* Step 2: Select Dates & Hub */}
              <div className="how-step-card">
                <div className="how-step-illustration-wrap">
                  <img
                    src="/images/how-step-2.jpg"
                    alt="Illustration of customer picking calendar dates and delivery map location"
                    className="how-step-illustration"
                    loading="lazy"
                    decoding="async"
                    width={220}
                    height={160}
                  />
                </div>
                <span className="how-step-tag">Step 02</span>
                <h3 className="how-step-title">
                  Select Dates &amp; Hub
                </h3>
                <p className="how-step-desc">
                  Pick your rental duration (Daily Deals, Weekly 7-Day, or Monthly) and choose Doorstep Delivery or 24/7 Airport pickup.
                </p>
              </div>

              {/* Step 3: 2-Min Digital KYC */}
              <div className="how-step-card">
                <div className="how-step-illustration-wrap">
                  <img
                    src="/images/how-step-3.jpg"
                    alt="Illustration of instant driving license KYC approval on phone"
                    className="how-step-illustration"
                    loading="lazy"
                    decoding="async"
                    width={220}
                    height={160}
                  />
                </div>
                <span className="how-step-tag">Step 03</span>
                <h3 className="how-step-title">
                  2-Min Digital KYC
                </h3>
                <p className="how-step-desc">
                  Upload your Driving License and Govt ID online for instant automated verification with zero paperwork hassle.
                </p>
              </div>

              {/* Step 4: Confirm & Pay */}
              <div className="how-step-card">
                <div className="how-step-illustration-wrap">
                  <img
                    src="/images/how-step-4.jpg"
                    alt="Illustration of secure online card payment and success receipt"
                    className="how-step-illustration"
                    loading="lazy"
                    decoding="async"
                    width={220}
                    height={160}
                  />
                </div>
                <span className="how-step-tag">Step 04</span>
                <h3 className="how-step-title">
                  Confirm &amp; Pay
                </h3>
                <p className="how-step-desc">
                  Lock your car with 100% transparent pricing, zero hidden charges, and minimal refundable security deposit.
                </p>
              </div>

              {/* Step 5: Doorstep Delivery */}
              <div className="how-step-card">
                <div className="how-step-illustration-wrap">
                  <img
                    src="/images/how-step-5.jpg"
                    alt="Illustration of attendant handing over car keys to happy customer"
                    className="how-step-illustration"
                    loading="lazy"
                    decoding="async"
                    width={220}
                    height={160}
                  />
                </div>
                <span className="how-step-tag">Step 05</span>
                <h3 className="how-step-title">
                  Doorstep Delivery
                </h3>
                <p className="how-step-desc">
                  Receive your sanitized car at your location with contactless key handover, digital inspection checklist, and 24/7 RSA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. TESTIMONIALS SECTION (Matching Reference Image)
            ======================================================== */}
        <section className="testimonials-section-warm" id="testimonials">
          <div className="container">
            <div className="reviews-header-center">
              <span className="reviews-tag-pill">CUSTOMER REVIEWS</span>
              <h2 className="reviews-main-title">
                What Our Customers <span className="reviews-title-accent">Say</span>
              </h2>
              <p className="reviews-subtext">
                Read feedback from hundreds of satisfied tourists, corporate leaders, and daily commuters who rent self-drive cars with us across Hyderabad.
              </p>
            </div>

            {/* Reviews Carousel with Side Navigation Arrows */}
            <div className="reviews-carousel-outer">
              <button
                type="button"
                className="reviews-nav-btn reviews-nav-prev"
                onClick={() => scrollReviews("left")}
                aria-label="Previous review"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="reviews-scroll-track" ref={reviewsTrackRef}>
                {/* Review Card 1 */}
                <div className="review-card-modern">
                  <div>
                    <div className="review-card-header">
                      <div className="review-stars-row">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={17} fill="#f59e0b" stroke="#f59e0b" />
                        ))}
                      </div>
                      <span className="review-verified-pill">
                        <Check size={12} strokeWidth={3} /> VERIFIED
                      </span>
                    </div>

                    <p className="review-quote-text">
                      &ldquo;The self-drive car delivery at Shamshabad Airport was punctual to the minute. Spotless sanitized Creta, smooth automatic gearbox, and the 2-minute digital KYC made everything seamless. Their customer care team on WhatsApp is also extremely responsive.&rdquo;
                    </p>
                  </div>

                  <div className="review-card-divider">
                    <div className="review-author-name">Rajeshwar G.</div>
                    <div className="review-author-detail">Corporate Executive • Hitec City</div>
                  </div>
                </div>

                {/* Review Card 2 */}
                <div className="review-card-modern">
                  <div>
                    <div className="review-card-header">
                      <div className="review-stars-row">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={17} fill="#f59e0b" stroke="#f59e0b" />
                        ))}
                      </div>
                      <span className="review-verified-pill">
                        <Check size={12} strokeWidth={3} /> VERIFIED
                      </span>
                    </div>

                    <p className="review-quote-text">
                      &ldquo;Super quick deployment and excellent customer experience. The luxury sedan was in pristine showroom condition with a valid FASTag. Zero security deposit hassle and GST invoice was provided immediately for our corporate audit. Will definitely continue our annual contract!&rdquo;
                    </p>
                  </div>

                  <div className="review-card-divider">
                    <div className="review-author-name">Kiran K.</div>
                    <div className="review-author-detail">Director • Gachibowli Financial District</div>
                  </div>
                </div>

                {/* Review Card 3 */}
                <div className="review-card-modern">
                  <div>
                    <div className="review-card-header">
                      <div className="review-stars-row">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={17} fill="#f59e0b" stroke="#f59e0b" />
                        ))}
                      </div>
                      <span className="review-verified-pill">
                        <Check size={12} strokeWidth={3} /> VERIFIED
                      </span>
                    </div>

                    <p className="review-quote-text">
                      &ldquo;Absolutely outstanding customer support! We booked a 7-seater Fortuner for our family weekend trip to Srisailam. The car drove like a dream on the highway and the refundable deposit was credited back into my bank account the very next morning without asking.&rdquo;
                    </p>
                  </div>

                  <div className="review-card-divider">
                    <div className="review-author-name">Sandhya Y.</div>
                    <div className="review-author-detail">Family Traveler • Jubilee Hills</div>
                  </div>
                </div>

                {/* Review Card 4 */}
                <div className="review-card-modern">
                  <div>
                    <div className="review-card-header">
                      <div className="review-stars-row">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={17} fill="#f59e0b" stroke="#f59e0b" />
                        ))}
                      </div>
                      <span className="review-verified-pill">
                        <Check size={12} strokeWidth={3} /> VERIFIED
                      </span>
                    </div>

                    <p className="review-quote-text">
                      &ldquo;Loved the self-drive freedom! The digital key handover was completely contactless, the fuel tank was 100% full, and the car was thoroughly sanitized. Best premium car rental service in Hyderabad by far.&rdquo;
                    </p>
                  </div>

                  <div className="review-card-divider">
                    <div className="review-author-name">Dr. Sneha Reddy</div>
                    <div className="review-author-detail">Surgeon • Banjara Hills</div>
                  </div>
                </div>

                {/* Review Card 5 */}
                <div className="review-card-modern">
                  <div>
                    <div className="review-card-header">
                      <div className="review-stars-row">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={17} fill="#f59e0b" stroke="#f59e0b" />
                        ))}
                      </div>
                      <span className="review-verified-pill">
                        <Check size={12} strokeWidth={3} /> VERIFIED
                      </span>
                    </div>

                    <p className="review-quote-text">
                      &ldquo;Their monthly car subscription is perfect for my IT tenure in Hyderabad. No car loan stress, zero maintenance hassle, and reliable doorstep vehicle replacement whenever servicing is due.&rdquo;
                    </p>
                  </div>

                  <div className="review-card-divider">
                    <div className="review-author-name">Karthik Murthy</div>
                    <div className="review-author-detail">Tech VP • Madhapur Hub</div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="reviews-nav-btn reviews-nav-next"
                onClick={() => scrollReviews("right")}
                aria-label="Next review"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Bottom Controls for mobile / responsive so arrows never cover card text */}
            <div className="reviews-bottom-controls">
              <button
                type="button"
                className="reviews-bottom-nav-btn"
                onClick={() => scrollReviews("left")}
                aria-label="Previous review"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="reviews-swipe-hint">
                <span>Swipe or tap arrows</span>
              </div>
              <button
                type="button"
                className="reviews-bottom-nav-btn"
                onClick={() => scrollReviews("right")}
                aria-label="Next review"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================
            5.5 PHOTO GALLERY SECTION (After Testimonials)
            - Light background, 3-column masonry grid
            ======================================================== */}
        <section className="photo-gallery-section" id="gallery">
          <div className="container">
            <div className="gallery-header-center">
              <div className="section-tag">
                <span className="dot"></span>
                <span>From Our Gallery</span>
              </div>
              <h2 className="gallery-main-title">
                See Our Service <span className="gallery-title-accent">In Action</span>
              </h2>
              <p className="gallery-subtext">
                Moments from our daily operations across Hyderabad — every handover, every journey, every smile.
              </p>
            </div>
            <div className="gallery-divider"></div>

            <div className="gallery-masonry-grid">
              {/* Column 1 — Real customer car delivery handovers */}
              <div className="gallery-masonry-item gm-tall">
                <img
                  src="/images/customer-delivery-5.jpg"
                  alt="Customer taking delivery of Mahindra Thar rental in Hyderabad"
                  className="gallery-masonry-img"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={520}
                />
              </div>
              <div className="gallery-masonry-item gm-short">
                <img
                  src="/images/customer-delivery-2.jpg"
                  alt="Customer with Suzuki XL6 rental car delivery"
                  className="gallery-masonry-img"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={320}
                />
              </div>

              {/* Column 2 */}
              <div className="gallery-masonry-item gm-short">
                <img
                  src="/images/customer-delivery-3.jpg"
                  alt="Customer with Baleno rental car delivery in Hyderabad"
                  className="gallery-masonry-img"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={320}
                />
              </div>
              <div className="gallery-masonry-item gm-tall">
                <img
                  src="/images/customer-delivery-1.jpg"
                  alt="Customer receiving Volkswagen Polo self-drive car"
                  className="gallery-masonry-img"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={520}
                />
              </div>

              {/* Column 3 */}
              <div className="gallery-masonry-item gm-short">
                <img
                  src="/images/customer-delivery-4.jpg"
                  alt="Customer with Maruti Suzuki car delivery in Hyderabad"
                  className="gallery-masonry-img"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={320}
                />
              </div>
              <div className="gallery-masonry-item gm-tall">
                <img
                  src="/images/customer-delivery-6.jpg"
                  alt="Customer with blue Maruti Suzuki Swift rental delivery in Hyderabad"
                  className="gallery-masonry-img"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={520}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            7. FAQ SECTION (Seventh in sequence)
            - Matching Reference Image (Two-Column Split, Brand Colors)
            ======================================================== */}
        <section className="section-padding bg-white" id="faq">
          <div className="container">
            <div className="faq-modern-split-grid">
              {/* Left Column: Heading, Badge, Subtitle */}
              <div className="faq-modern-left-col">
                <div className="faq-badge-pill">
                  <span className="faq-badge-icon-wrap">
                    <HelpCircle size={13} strokeWidth={2.4} />
                  </span>
                  <span>Frequently asked questions</span>
                </div>

                <h2 className="faq-modern-title">
                  Frequently asked<br />
                  <span className="faq-title-accent">questions</span>
                </h2>

                <p className="faq-modern-subtext">
                  Choose a rental plan that fits your travel needs and budget. Transparent pricing, no hidden fees, and seamless self-drive car rentals across Hyderabad.
                </p>
              </div>

              {/* Right Column: Rounded Accordion Cards Stack */}
              <div className="faq-modern-cards-stack">
                {faqs.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className={`faq-modern-card ${isOpen ? "open" : ""}`}
                    >
                      <button
                        type="button"
                        className="faq-modern-trigger"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        aria-expanded={isOpen}
                      >
                        <span className="faq-modern-q-text">{item.q}</span>
                        <div className="faq-modern-chevron-circle">
                          {isOpen ? (
                            <ChevronUp size={18} strokeWidth={2.5} />
                          ) : (
                            <ChevronDown size={18} strokeWidth={2.5} />
                          )}
                        </div>
                      </button>

                      <div className="faq-modern-body">
                        <p className="faq-modern-answer">{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            8. LOCATION & CONTACT SECTION (Fast Booking & Google Map)
            ======================================================== */}
        <section className="fast-booking-section" id="contact">
          <div className="container">
            <div className="section-header-row" style={{ marginBottom: "26px" }}>
              <div>
                <div className="section-tag">
                  <MapPin size={14} />
                  <span>Locations &amp; Contact</span>
                </div>
                <h2 className="section-title">Find Us in Hyderabad &amp; Book Instantly</h2>
              </div>
              <p className="section-subtitle">
                Visit our dispatch hubs across Hyderabad or schedule instant 60-minute doorstep sanitized car delivery.
              </p>
            </div>

            <div className="fast-booking-grid">
              {/* Left Column: Golden Fast Booking Card (Reference Design Replica) */}
              <div className="fast-booking-gold-card">
                <div>
                  <div className="booking-badge-pill">
                    <Sparkles size={14} color="#fde047" fill="#fde047" />
                    <span>FAST BOOKING</span>
                  </div>

                  <h3 className="booking-gold-title">
                    Schedule <span className="title-white">Your Rental Car</span> Today!
                  </h3>

                  <p className="booking-gold-subtitle">
                    Fill out the quick form below for immediate doorstep delivery, transparent pricing, and instant WhatsApp confirmation.
                  </p>
                </div>

                {contactSubmitted ? (
                  <div className="booking-success-box">
                    <CheckCircle2 size={46} color="#0d2a1c" style={{ margin: "0 auto 12px auto" }} />
                    <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0d2a1c", marginBottom: "8px" }}>
                      Reservation Request Sent!
                    </h4>
                    <p style={{ fontSize: "0.92rem", color: "#143a27", lineHeight: 1.5, marginBottom: "18px" }}>
                      Thank you! Our Hyderabad dispatch team has received your details and WhatsApp message. We will confirm your vehicle availability within 10 minutes.
                    </p>
                    <div className="booking-success-actions">
                      <a
                        href={`https://wa.me/917396662420?text=${encodeURIComponent(
                          `*ROYAL CARS & LUXURY CARS INQUIRY*\nName: ${fastBookingForm.name}\nPhone: ${fastBookingForm.phone}\nService: ${fastBookingForm.service}\nLocation: ${fastBookingForm.location}\nNotes: ${fastBookingForm.notes}`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="booking-submit-whatsapp-btn"
                        style={{ width: "auto", padding: "11px 22px", fontSize: "0.9rem" }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#25d366">
                          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.39C16.32 14.27 15.1 13.67 14.87 13.58C14.64 13.5 14.48 13.45 14.31 13.7C14.15 13.95 13.67 14.52 13.53 14.68C13.38 14.85 13.24 14.87 12.99 14.75C12.74 14.62 11.94 14.36 10.99 13.52C10.25 12.86 9.75 12.05 9.61 11.8C9.46 11.55 9.59 11.42 9.72 11.3C9.83 11.19 9.97 11.01 10.09 10.87C10.22 10.73 10.26 10.62 10.34 10.46C10.42 10.29 10.38 10.15 10.32 10.03C10.26 9.9 9.76 8.68 9.56 8.17C9.36 7.67 9.16 7.74 9.01 7.73C8.87 7.72 8.71 7.72 8.54 7.72C8.38 7.72 8.11 7.78 7.89 8.03C7.66 8.27 7.02 8.87 7.02 10.1C7.02 11.33 7.91 12.51 8.04 12.68C8.16 12.84 9.79 15.36 12.28 16.43C12.87 16.69 13.33 16.84 13.69 16.96C14.29 17.15 14.83 17.12 15.26 17.06C15.74 16.99 16.74 16.45 16.95 15.87C17.16 15.29 17.16 14.79 17.09 14.68C17.03 14.57 16.82 14.51 16.57 14.39Z" />
                        </svg>
                        <span>Chat on WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setContactSubmitted(false)}
                        style={{
                          background: "transparent",
                          border: "1.5px solid #0d2a1c",
                          color: "#0d2a1c",
                          padding: "10px 18px",
                          borderRadius: "14px",
                          fontWeight: 700,
                          fontSize: "0.88rem",
                          cursor: "pointer",
                        }}
                      >
                        Book Another Car
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFastBookingSubmit} className="booking-form-grid">
                    {/* Row 1: Your Name & Phone Number */}
                    <div className="booking-form-row">
                      <div className="booking-field-group">
                        <label className="booking-field-label">YOUR NAME *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Suresh Patel"
                          value={fastBookingForm.name}
                          onChange={(e) =>
                            setFastBookingForm({ ...fastBookingForm, name: e.target.value })
                          }
                          className="booking-input-pill"
                        />
                      </div>
                      <div className="booking-field-group">
                        <label className="booking-field-label">PHONE NUMBER *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={fastBookingForm.phone}
                          onChange={(e) =>
                            setFastBookingForm({ ...fastBookingForm, phone: e.target.value })
                          }
                          className="booking-input-pill"
                        />
                      </div>
                    </div>

                    {/* Row 2: Select Service & Location/City */}
                    <div className="booking-form-row">
                      <div className="booking-field-group">
                        <label className="booking-field-label">SELECT SERVICE *</label>
                        <select
                          value={fastBookingForm.service}
                          onChange={(e) =>
                            setFastBookingForm({ ...fastBookingForm, service: e.target.value })
                          }
                          className="booking-select-pill"
                          required
                        >
                          <option value="1. Self-Drive Hatchbacks (Swift, Baleno, Kwid)">
                            1. Self-Drive Hatchbacks (Swift, Baleno, Kwid)
                          </option>
                          <option value="2. Compact SUVs (Tata Punch, Tata Nexon)">
                            2. Compact SUVs (Tata Punch, Tata Nexon)
                          </option>
                          <option value="3. 5-Seater SUVs (Creta, Seltos)">
                            3. 5-Seater SUVs (Creta, Seltos)
                          </option>
                          <option value="4. 7-Seater Family MPVs & SUVs (Ertiga, XL6, XUV, Innova)">
                            4. 7-Seater Family MPVs &amp; SUVs (Ertiga, XL6, XUV)
                          </option>
                          <option value="5. Doorstep Delivery Anywhere Across Hyderabad">
                            5. Doorstep Delivery Anywhere in Hyderabad
                          </option>
                          <option value="6. Monthly Subscription & Long-Term Rental">
                            6. Monthly Subscription &amp; Long-Term
                          </option>
                        </select>
                      </div>

                      <div className="booking-field-group">
                        <label className="booking-field-label">LOCATION / CITY *</label>
                        <select
                          value={fastBookingForm.location}
                          onChange={(e) =>
                            setFastBookingForm({ ...fastBookingForm, location: e.target.value })
                          }
                          className="booking-select-pill"
                          required
                        >
                          <option value="Hyderabad / Shamshabad Airport (RGIA)">
                            Hyderabad / Shamshabad Airport (RGIA)
                          </option>
                          <option value="Hyderabad / Madhapur & Hitec City">
                            Hyderabad / Madhapur &amp; Hitec City
                          </option>
                          <option value="Hyderabad / Jubilee & Banjara Hills">
                            Hyderabad / Jubilee &amp; Banjara Hills
                          </option>
                          <option value="Hyderabad / Gachibowli Financial District">
                            Hyderabad / Gachibowli Financial District
                          </option>
                          <option value="Hyderabad / Secunderabad & Begumpet">
                            Hyderabad / Secunderabad &amp; Begumpet
                          </option>
                          <option value="Doorstep Delivery Anywhere in Hyderabad">
                            Doorstep Delivery Anywhere in Hyderabad
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Requirement Details & Notes */}
                    <div className="booking-field-group">
                      <label className="booking-field-label">REQUIREMENT DETAILS &amp; NOTES</label>
                      <textarea
                        rows={3}
                        placeholder="Rental dates, self-drive or with driver, pickup timing, or specific car preferences..."
                        value={fastBookingForm.notes}
                        onChange={(e) =>
                          setFastBookingForm({ ...fastBookingForm, notes: e.target.value })
                        }
                        className="booking-textarea-pill"
                      />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="booking-submit-whatsapp-btn" id="btn-fast-booking">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#25d366" style={{ flexShrink: 0 }}>
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.39C16.32 14.27 15.1 13.67 14.87 13.58C14.64 13.5 14.48 13.45 14.31 13.7C14.15 13.95 13.67 14.52 13.53 14.68C13.38 14.85 13.24 14.87 12.99 14.75C12.74 14.62 11.94 14.36 10.99 13.52C10.25 12.86 9.75 12.05 9.61 11.8C9.46 11.55 9.59 11.42 9.72 11.3C9.83 11.19 9.97 11.01 10.09 10.87C10.22 10.73 10.26 10.62 10.34 10.46C10.42 10.29 10.38 10.15 10.32 10.03C10.26 9.9 9.76 8.68 9.56 8.17C9.36 7.67 9.16 7.74 9.01 7.73C8.87 7.72 8.71 7.72 8.54 7.72C8.38 7.72 8.11 7.78 7.89 8.03C7.66 8.27 7.02 8.87 7.02 10.1C7.02 11.33 7.91 12.51 8.04 12.68C8.16 12.84 9.79 15.36 12.28 16.43C12.87 16.69 13.33 16.84 13.69 16.96C14.29 17.15 14.83 17.12 15.26 17.06C15.74 16.99 16.74 16.45 16.95 15.87C17.16 15.29 17.16 14.79 17.09 14.68C17.03 14.57 16.82 14.51 16.57 14.39Z" />
                      </svg>
                      <span>Submit &amp; Send to WhatsApp</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Google Maps Card with Overlay Business Box (Reference Replica) */}
              <div className="fast-booking-map-card">
                {/* Embedded Real Hyderabad Google Map */}
                <iframe
                  title="Royal Cars and Luxury Cars Location Map"
                  src="https://maps.google.com/maps?q=Royal%20Cars%20and%20Luxury%20Cars,%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="map-google-iframe"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Floating Google Business Card matching reference design */}
                <div className="map-google-business-card">
                  <div className="map-card-company">ROYAL CARS &amp; LUXURY CARS</div>
                  <div className="map-card-category">Luxury &amp; Self-Drive Car Rental Service</div>
                  <div className="map-card-address">
                    Royal Cars and Luxury Cars, Hyderabad, Telangana, India
                  </div>

                  <div className="map-card-ratings">
                    <span className="map-rating-score">4.9</span>
                    <div className="map-rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="#f59e0b" stroke="#f59e0b" />
                      ))}
                    </div>
                    <a
                      href="https://maps.app.goo.gl/sEAwjY3juyM6mJ6Y6?g_st=iwb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-reviews-count"
                    >
                      (166)
                    </a>
                    <span className="map-info-circle" title="Google Verified Business Profile">
                      ⓘ
                    </span>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/sEAwjY3juyM6mJ6Y6?g_st=iwb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-open-btn"
                  >
                    <ExternalLink size={14} />
                    <span>Open in Maps</span>
                  </a>
                </div>

                {/* Pin on map with company marker badge */}
                <div className="map-visual-marker">
                  <div className="map-marker-pin-head">
                    <div className="map-marker-dot" />
                  </div>
                  <div className="map-marker-label">
                    ROYAL CARS &amp; LUXURY CARS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================
          9. FOOTER SECTION (Authentic Car Rental Content)
          ======================================================== */}
      <footer className="footer-rentq">
        <div className="container">
          <div className="footer-columns-rentq">
            {/* Column 1: Brand Logo & Description */}
            <div>
              <a href="#hero" className="brand-logo-custom" style={{ marginBottom: "16px", display: "inline-flex" }}>
                <div className="brand-symbol">
                  <Car size={22} strokeWidth={2.4} />
                </div>
                <div className="brand-text-block">
                  <span className="brand-title" style={{ color: "#ffffff" }}>Royal Cars</span>
                  <span className="brand-tagline" style={{ color: "var(--rentq-orange)" }}>
                    LUXURY CARS
                  </span>
                </div>
              </a>
              <p style={{ fontSize: "0.86rem", color: "#94a3b8", lineHeight: 1.65, maxWidth: "310px" }}>
                Daily, Weekly &amp; Monthly self drive car rentals in Hyderabad with Manual &amp; Automatic transmissions. Doorstep delivery and airport pickup across Hyderabad.
              </p>
            </div>

            {/* Column 2: Quick Links (Website Main Navigation) */}
            <div>
              <h3 className="footer-col-title">Quick Links</h3>
              <ul className="footer-nav-list">
                <li className="footer-link-item">
                  <a href="#hero" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> Home
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> Services
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#about" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> About Us
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#how-it-works" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> How It Works
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#fleet" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> Our Fleet
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#gallery" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> Photo Gallery
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#contact" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Services (Real Website Services) */}
            <div>
              <h3 className="footer-col-title">Services</h3>
              <ul className="footer-nav-list">
                <li className="footer-link-item">
                  <a href="#services" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> Car Rental With Driver
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> Business Car Rental
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> Airport Transfer
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#services" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> Self-Drive Rentals
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#faq" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> Terms &amp; Insurance
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Us (Real Website Details) */}
            <div itemScope itemType="https://schema.org/AutoRental">
              <h3 className="footer-col-title">Contact Us</h3>
              <div className="footer-contact-stack">
                <div className="footer-contact-row">
                  <Phone size={18} className="footer-contact-icon" />
                  <div className="footer-contact-text">
                    <div><a href="tel:+917396662420" itemProp="telephone">+91 73966 62420</a></div>
                  </div>
                </div>

                <div className="footer-contact-row">
                  <MapPin size={18} className="footer-contact-icon" />
                  <div className="footer-contact-text" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <div>
                      <span itemProp="streetAddress">2nd Floor, Asif Nagar Rd, Opp. Pista House</span>, <span itemProp="addressLocality">Hyderabad</span> <span itemProp="postalCode">500006</span>
                      <meta itemProp="addressRegion" content="Telangana" />
                      <meta itemProp="addressCountry" content="IN" />
                    </div>
                    <div style={{ color: "#64748b", fontSize: "0.78rem" }}>Feroz Gandhi Nagar, Asif Nagar North</div>
                    <a
                      href="https://maps.app.goo.gl/sEAwjY3juyM6mJ6Y6?g_st=iwb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-maps-action-link"
                    >
                      View location on Google Maps
                    </a>
                  </div>
                </div>


              </div>
            </div>
          </div>

          {/* Bottom Copyright & Edone Solutions Credit Line */}
          <div className="footer-bottom-flex">
            <div>
              &copy; 2026 Royal Cars &amp; Luxury Cars Hyderabad. All rights reserved.
            </div>
            <div className="footer-developer-credit">
              Designed &amp; Developed by{" "}
              <a href="https://edonesolutions.com" target="_blank" rel="noopener noreferrer">
                Edone Solutions
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat With Us Button */}
      <a
        href="https://wa.me/917396662420?text=Hello%20Royal%20Cars%2C%20I%20want%20to%20rent%20a%20car"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-chat-with-us"
        title="Chat With Us on WhatsApp"
        aria-label="Chat With Us on WhatsApp"
      >
        <span className="chat-bubble-white">
          <MessageCircle size={15} fill="#00a859" color="#00a859" />
        </span>
        <span>Chat With Us</span>
      </a>

      {/* Booking Modal */}
      {selectedCarModal && (
        <div className="rentq-modal-overlay" onClick={() => setSelectedCarModal(null)}>
          <div className="rentq-modal-window" onClick={(e) => e.stopPropagation()}>
            <button
              className="rentq-modal-close"
              onClick={() => setSelectedCarModal(null)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {isBookedSuccess ? (
              <div style={{ textAlign: "center", padding: "26px 10px" }}>
                <CheckCircle2 size={50} color="#ff4800" style={{ margin: "0 auto 14px auto" }} />
                <h3 style={{ fontSize: "1.45rem", marginBottom: "8px" }}>Booking Confirmed!</h3>
                <p style={{ color: "#64748b", fontSize: "0.92rem" }}>
                  Your reservation for the <strong>{selectedCarModal.name}</strong> is confirmed. Our team will contact you shortly to coordinate doorstep handover.
                </p>
              </div>
            ) : (
              <div>
                <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "18px" }}>
                  <img
                    src={selectedCarModal.image}
                    alt={`${selectedCarModal.name} rental booking`}
                    width={120}
                    height={70}
                    loading="lazy"
                    decoding="async"
                    style={{ width: "120px", height: "70px", objectFit: "cover", borderRadius: "8px", background: "#f8f9fa" }}
                  />
                  <div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700 }}>{selectedCarModal.name}</h3>
                    <div style={{ color: "#ff4800", fontWeight: 800, fontSize: "1.1rem" }}>
                      {durationPlan === "monthly"
                        ? selectedCarModal.priceMonthly
                        : durationPlan === "weekly"
                        ? selectedCarModal.priceWeekly
                        : selectedCarModal.priceDaily}
                      <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: 500 }}> / day</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleBookingSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>Plan Type</label>
                      <select
                        style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                        value={durationPlan}
                        onChange={(e) => setDurationPlan(e.target.value)}
                      >
                        <option value="daily">Daily Rental</option>
                        <option value="weekly">Weekly 7-Day</option>
                        <option value="monthly">Monthly Subscription</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>Transmission</label>
                      <input
                        type="text"
                        readOnly
                        value={selectedCarModal.transmission}
                        style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#f8fafc" }}
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>Phone Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#334155", marginBottom: "4px" }}>Pickup Location</label>
                    <select
                      style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #cbd5e1" }}
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                    >
                      {hyderabadHubs.map((h, i) => (
                        <option key={i} value={h.title}>{h.title}</option>
                      ))}
                      <option value="Custom Doorstep Delivery">Custom Doorstep Delivery</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="rentq-btn-view-cars"
                    style={{ width: "100%", justifyContent: "center", marginTop: "10px" }}
                  >
                    <span>Confirm Reservation</span>
                    <ArrowUpRight size={18} />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
