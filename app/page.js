"use client";

import { useState, useRef } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowUpRight,
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
    service: "1. Luxury Sedans (BMW 5 Series, Mercedes C-Class)",
    location: "Hyderabad / Shamshabad Airport (RGIA)",
    notes: "",
  });

  const fleet = [
    {
      id: "bentley-spur",
      name: "Bentley Flying Spur",
      category: "luxury",
      priceDaily: "₹18,500",
      priceWeekly: "₹15,000",
      priceMonthly: "₹12,000",
      seats: "5 Seats",
      transmission: "Automatic",
      fuel: "Petrol V8",
      image: "/images/fleet-bentley.jpg",
    },
    {
      id: "rolls-spectre",
      name: "Rolls-Royce Spectre",
      category: "luxury",
      priceDaily: "₹32,000",
      priceWeekly: "₹28,000",
      priceMonthly: "₹24,000",
      seats: "4 Seats",
      transmission: "Automatic",
      fuel: "Electric",
      image: "/images/fleet-rolls-spectre.jpg",
    },
    {
      id: "mclaren-720s",
      name: "McLaren 720S Spider",
      category: "luxury",
      priceDaily: "₹28,000",
      priceWeekly: "₹24,000",
      priceMonthly: "₹20,000",
      seats: "2 Seats",
      transmission: "Automatic",
      fuel: "Petrol Twin-Turbo",
      image: "/images/fleet-mclaren.jpg",
    },
    {
      id: "ferrari-296",
      name: "Ferrari 296 GTB",
      category: "luxury",
      priceDaily: "₹29,500",
      priceWeekly: "₹25,000",
      priceMonthly: "₹21,000",
      seats: "2 Seats",
      transmission: "Automatic",
      fuel: "Hybrid V6",
      image: "/images/fleet-ferrari.jpg",
    },
    {
      id: "bmw-3-gl",
      name: "BMW 3 Series Gran Limousine",
      category: "sedan",
      priceDaily: "₹7,500",
      priceWeekly: "₹6,200",
      priceMonthly: "₹5,200",
      seats: "5 Seats",
      transmission: "Automatic",
      fuel: "Petrol Turbo",
      image: "/images/fleet-bmw-3.jpg",
    },
    {
      id: "merc-c200",
      name: "Mercedes-Benz C200",
      category: "sedan",
      priceDaily: "₹8,200",
      priceWeekly: "₹6,900",
      priceMonthly: "₹5,800",
      seats: "5 Seats",
      transmission: "Automatic 9G",
      fuel: "Mild Hybrid",
      image: "/images/fleet-merc-c.jpg",
    },
    {
      id: "honda-city",
      name: "Honda City ZX",
      category: "sedan",
      priceDaily: "₹2,300",
      priceWeekly: "₹1,900",
      priceMonthly: "₹1,600",
      seats: "5 Seats",
      transmission: "Automatic CVT",
      fuel: "Petrol i-VTEC",
      image: "/images/fleet-honda-city.jpg",
    },
    {
      id: "suv-velar",
      name: "Range Rover Velar LWB",
      category: "suv-7",
      priceDaily: "₹11,500",
      priceWeekly: "₹9,200",
      priceMonthly: "₹7,800",
      seats: "7 Seats",
      transmission: "Automatic",
      fuel: "Diesel Turbo",
      image: "/images/fleet-suv.jpg",
    },
    {
      id: "fortuner-7",
      name: "Toyota Fortuner 4x4",
      category: "suv-7",
      priceDaily: "₹5,800",
      priceWeekly: "₹4,900",
      priceMonthly: "₹4,200",
      seats: "7 Seats",
      transmission: "Automatic 4x4",
      fuel: "Diesel",
      image: "/images/fleet-fortuner.jpg",
    },
    {
      id: "innova-crysta",
      name: "Toyota Innova Crysta ZX",
      category: "suv-7",
      priceDaily: "₹3,800",
      priceWeekly: "₹3,200",
      priceMonthly: "₹2,700",
      seats: "7 Seats",
      transmission: "Automatic",
      fuel: "Diesel",
      image: "/images/fleet-innova.jpg",
    },
    {
      id: "mini-cooper",
      name: "Mini Cooper S JCW",
      category: "hatchback",
      priceDaily: "₹4,800",
      priceWeekly: "₹3,900",
      priceMonthly: "₹3,200",
      seats: "5 Seats",
      transmission: "Automatic",
      fuel: "Petrol Turbo",
      image: "/images/fleet-mini.jpg",
    },
    {
      id: "i20-nline",
      name: "Hyundai i20 N-Line Turbo",
      category: "hatchback",
      priceDaily: "₹2,200",
      priceWeekly: "₹1,800",
      priceMonthly: "₹1,500",
      seats: "5 Seats",
      transmission: "Automatic DCT",
      fuel: "Petrol Turbo",
      image: "/images/fleet-i20.jpg",
    },
    {
      id: "swift-dzire",
      name: "Maruti Swift ZXi+",
      category: "hatchback",
      priceDaily: "₹1,800",
      priceWeekly: "₹1,450",
      priceMonthly: "₹1,200",
      seats: "5 Seats",
      transmission: "Manual & AGS",
      fuel: "Petrol",
      image: "/images/fleet-swift.jpg",
    },
    {
      id: "tata-nexon-ev",
      name: "Tata Nexon Fearless EV",
      category: "mini-suv",
      priceDaily: "₹2,800",
      priceWeekly: "₹2,300",
      priceMonthly: "₹1,950",
      seats: "5 Seats",
      transmission: "Automatic",
      fuel: "Electric 465km",
      image: "/images/fleet-nexon.jpg",
    },
    {
      id: "kia-sonet",
      name: "Kia Sonet GTX+ Turbo",
      category: "mini-suv",
      priceDaily: "₹2,400",
      priceWeekly: "₹2,000",
      priceMonthly: "₹1,700",
      seats: "5 Seats",
      transmission: "Automatic DCT",
      fuel: "Diesel / Petrol",
      image: "/images/fleet-sonet.jpg",
    },
    {
      id: "suv-creta",
      name: "Hyundai Creta SX(O)",
      category: "suv-5",
      priceDaily: "₹2,600",
      priceWeekly: "₹2,100",
      priceMonthly: "₹1,800",
      seats: "5 Seats",
      transmission: "Automatic & Manual",
      fuel: "Diesel / Petrol",
      image: "/images/fleet-creta.jpg",
    },
    {
      id: "kia-seltos",
      name: "Kia Seltos X-Line",
      category: "suv-5",
      priceDaily: "₹2,700",
      priceWeekly: "₹2,250",
      priceMonthly: "₹1,900",
      seats: "5 Seats",
      transmission: "Automatic",
      fuel: "Diesel / Petrol",
      image: "/images/fleet-seltos.jpg",
    },
    {
      id: "xuv-700",
      name: "Mahindra XUV700 AX7",
      category: "suv-5",
      priceDaily: "₹3,600",
      priceWeekly: "₹3,000",
      priceMonthly: "₹2,500",
      seats: "5 Seats",
      transmission: "Automatic AWD",
      fuel: "Diesel mHawk",
      image: "/images/fleet-xuv700.jpg",
    },
  ];

  const categories = [
    { id: "all", name: `All Fleet (${fleet.length})` },
    { id: "hatchback", name: `5-Seater Hatchbacks (${fleet.filter((c) => c.category === "hatchback").length})` },
    { id: "mini-suv", name: `Mini SUVs (${fleet.filter((c) => c.category === "mini-suv").length})` },
    { id: "suv-5", name: `5-Seater SUVs (${fleet.filter((c) => c.category === "suv-5").length})` },
    { id: "suv-7", name: `7-Seater SUVs & MUVs (${fleet.filter((c) => c.category === "suv-7").length})` },
    { id: "sedan", name: `5-Seater Sedans (${fleet.filter((c) => c.category === "sedan").length})` },
    { id: "luxury", name: `Luxury & Exotic (${fleet.filter((c) => c.category === "luxury").length})` },
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
      const modalMessage = `*NEW CAR RESERVATION - RENC HYDERABAD*
• Car: ${selectedCarModal.name}
• Transmission: ${selectedCarModal.transmission}
• Plan: ${durationPlan === "monthly" ? "Monthly Subscription" : durationPlan === "weekly" ? "Weekly 7-Day" : "Daily Rental"}
• Rate: ${durationPlan === "monthly" ? selectedCarModal.priceMonthly : durationPlan === "weekly" ? selectedCarModal.priceWeekly : selectedCarModal.priceDaily}/day
• Pickup Location: ${pickupLocation}`;

      const modalWaUrl = `https://wa.me/919642642604?text=${encodeURIComponent(modalMessage)}`;
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

    const message = `*NEW FAST BOOKING RESERVATION - RENC HYDERABAD*
• Name: ${fastBookingForm.name || "Customer"}
• Phone: ${fastBookingForm.phone}
• Vehicle / Service: ${fastBookingForm.service}
• Pickup Location: ${fastBookingForm.location}
• Requirement & Notes: ${fastBookingForm.notes || "Standard rental inquiry"}`;

    const waUrl = `https://wa.me/919642642604?text=${encodeURIComponent(message)}`;
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
              <span className="brand-title">RENC</span>
              <span className="brand-tagline">CAR RENTALS HYDERABAD</span>
            </div>
          </a>

          {/* Center Navigation Links (Home, Services, About, Gallery) */}
          <ul className="nav-center-menu">
            <li><a href="#hero" className="active">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
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
            <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontWeight: 700 }}>Services</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontWeight: 700 }}>About</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} style={{ color: "#ffffff", fontWeight: 700 }}>Gallery</a>
            <a
              href="tel:+919642642604"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#ffffff",
                color: "#ff4800",
                padding: "10px 18px",
                borderRadius: "50px",
                fontWeight: 800,
                fontSize: "0.88rem",
                marginTop: "4px",
                width: "fit-content",
                boxShadow: "0 4px 12px rgba(0,0,0,0.12)"
              }}
            >
              <Phone size={15} />
              <span>Call Dispatch: +91 96426 42604</span>
            </a>
          </div>
        )}
      </header>

      <main>
        {/* ========================================================
            1. HERO SECTION (RentQ Style)
            - Main big heading restricted strictly to 600px width
            - Peach floating booking bar with 4 input cards
            - Centered orange "View All Cars" button
            - Symmetrical front-facing 3-car showcase (Red in center, white on sides)
            ======================================================== */}
        <section className="hero-rentq-section" id="hero">
          {/* Responsive Hero Background Image */}
          <picture className="hero-rentq-bg-wrap">
            <source media="(max-width: 768px)" srcSet="/images/hero-fleet-mobile.jpg?v=6" />
            <img
              src="/images/hero-fleet-4k.png"
              alt="RENC lineup of modern rental cars in Hyderabad: hatchbacks, sedans, compact SUVs and luxury cars"
              className="hero-rentq-bg-image"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={1920}
              height={1080}
            />
          </picture>

          {/* Overlay Content Sitting Directly on the Background Image */}
          <div className="container hero-rentq-overlay-content">
            {/* MANDATORY USER REQUIREMENT: Main big heading only 600px width */}
            <h1 className="rentq-main-heading" id="hero-main-heading">
              Daily, Weekly &amp;<br className="heading-mobile-break" /> Monthly Car Rentals<br className="heading-mobile-break" /> in Hyderabad
            </h1>
            <div className="heading-accent-line"></div>

            <p className="hero-rentq-subtext">
              Explore Hyderabad&apos;s most popular, top-demanding self drive cars with <strong>Manual &amp; Automatic</strong> transmissions. Choose between <strong>Daily Deals</strong>, <strong>Weekly Rentals</strong>, or <strong>Monthly Subscriptions</strong> with doorstep delivery.
            </p>

            {/* Interactive Duration Plan Selector (Image 2) */}
            <div className="hero-plan-tabs-wrap">
              <button
                type="button"
                className={`hero-plan-tab-btn ${durationPlan === "daily" ? "active" : ""}`}
                onClick={() => setDurationPlan("daily")}
              >
                <Calendar size={15} />
                <span>Daily</span>
              </button>
              <button
                type="button"
                className={`hero-plan-tab-btn ${durationPlan === "weekly" ? "active" : ""}`}
                onClick={() => setDurationPlan("weekly")}
              >
                <Clock size={15} />
                <span>Weekly</span>
                <span className="hero-plan-tab-badge">7-Day</span>
              </button>
              <button
                type="button"
                className={`hero-plan-tab-btn ${durationPlan === "monthly" ? "active" : ""}`}
                onClick={() => setDurationPlan("monthly")}
              >
                <Zap size={15} />
                <span>Monthly</span>
                <span className="hero-plan-tab-badge badge-deal">Deal</span>
              </button>
            </div>

            {/* Call To Action 2 Buttons in Hero Section */}
            <div className="hero-cta-btn-group">
              <a href="#gallery" className="hero-cta-btn-primary">
                <span>Explore Fleet</span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href="https://wa.me/919642642604?text=Hello%20RENC%2C%20I%20want%20to%20rent%20a%20car"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-btn-secondary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25d366" style={{ flexShrink: 0 }}>
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15ZM16.57 14.39C16.32 14.27 15.1 13.67 14.87 13.58C14.64 13.5 14.48 13.45 14.31 13.7C14.15 13.95 13.67 14.52 13.53 14.68C13.38 14.85 13.24 14.87 12.99 14.75C12.74 14.62 11.94 14.36 10.99 13.52C10.25 12.86 9.75 12.05 9.61 11.8C9.46 11.55 9.59 11.42 9.72 11.3C9.83 11.19 9.97 11.01 10.09 10.87C10.22 10.73 10.26 10.62 10.34 10.46C10.42 10.29 10.38 10.15 10.32 10.03C10.26 9.9 9.76 8.68 9.56 8.17C9.36 7.67 9.16 7.74 9.01 7.73C8.87 7.72 8.71 7.72 8.54 7.72C8.38 7.72 8.11 7.78 7.89 8.03C7.66 8.27 7.02 8.87 7.02 10.1C7.02 11.33 7.91 12.51 8.04 12.68C8.16 12.84 9.79 15.36 12.28 16.43C12.87 16.69 13.33 16.84 13.69 16.96C14.29 17.15 14.83 17.12 15.26 17.06C15.74 16.99 16.74 16.45 16.95 15.87C17.16 15.29 17.16 14.79 17.09 14.68C17.03 14.57 16.82 14.51 16.57 14.39Z" />
                </svg>
                <span>Instant Booking</span>
              </a>
            </div>


          </div>
        </section>

        {/* ========================================================
            2. SERVICES SECTION (Second in sequence)
            ======================================================== */}
        <section className="section-padding bg-warm" id="services">
          <div className="container">
            <div className="services-header-flex">
              <div>
                <div className="section-tag">
                  <span className="dot"></span>
                  <span>Our Services</span>
                </div>
                <h2 className="section-title">
                  Explore our wide range of rental services
                </h2>
              </div>
            </div>

            {/* Services Carousel with Left & Right Side Arrow Navigation */}
            <div className="services-carousel-outer">
              <button
                type="button"
                className="services-nav-btn services-nav-prev"
                onClick={() => scrollServices("left")}
                aria-label="Previous service"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="services-scroll-track" ref={servicesTrackRef}>
              {/* Card 1: Car Rental With Driver */}
              <div className="service-card-premium">
                <div className="service-card-media-framed">
                  <img
                    src="/images/about-driver.jpg"
                    alt="Car rental with professional chauffeur in Hyderabad"
                    className="service-card-img"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={260}
                  />
                </div>
                <div className="service-card-content">
                  <h3 className="service-title-text">Car Rental With Driver</h3>
                  <p className="service-sub-text">
                    Uniformed English &amp; Telugu chauffeurs for city commutes and outstation tours.
                  </p>
                  <ul className="service-perks-list">
                    <li><Check size={14} className="check-icon" /> Verified &amp; Trained Chauffeurs</li>
                    <li><Check size={14} className="check-icon" /> Fuel &amp; Toll Inclusive Packages</li>
                  </ul>
                </div>
              </div>

              {/* Card 2: Business Car Rental */}
              <div className="service-card-premium">
                <div className="service-card-media-framed">
                  <img
                    src="/images/fleet-bentley.jpg"
                    alt="Corporate luxury car rental for business executives in Hyderabad"
                    className="service-card-img"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={260}
                  />
                </div>
                <div className="service-card-content">
                  <h3 className="service-title-text">Business Car Rental</h3>
                  <p className="service-sub-text">
                    Executive luxury sedans tailored for corporate delegates, summits, and client meetings.
                  </p>
                  <ul className="service-perks-list">
                    <li><Check size={14} className="check-icon" /> GST Invoicing &amp; Corporate Billing</li>
                    <li><Check size={14} className="check-icon" /> Dedicated 24/7 Account Manager</li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Airport Transfer (RGIA) */}
              <div className="service-card-premium">
                <div className="service-card-media-framed">
                  <img
                    src="/images/fleet-suv.jpg"
                    alt="Airport transfer car rental at Rajiv Gandhi International Airport RGIA Shamshabad"
                    className="service-card-img"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={260}
                  />
                </div>
                <div className="service-card-content">
                  <h3 className="service-title-text">Airport Transfer</h3>
                  <p className="service-sub-text">
                    Guaranteed on-time pickup and drop-off directly at Rajiv Gandhi International Airport.
                  </p>
                  <ul className="service-perks-list">
                    <li><Check size={14} className="check-icon" /> Real-Time Flight Delay Tracking</li>
                    <li><Check size={14} className="check-icon" /> 60 Mins Complimentary Waiting</li>
                  </ul>
                </div>
              </div>

              {/* Card 4: Self-Drive Rentals */}
              <div className="service-card-premium">
                <div className="service-card-media-framed">
                  <img
                    src="/images/fleet-mini.jpg"
                    alt="Affordable self drive car rental with zero security deposit in Hyderabad"
                    className="service-card-img"
                    loading="lazy"
                    decoding="async"
                    width={400}
                    height={260}
                  />
                </div>
                <div className="service-card-content">
                  <h3 className="service-title-text">Self-Drive Rentals</h3>
                  <p className="service-sub-text">
                    Complete freedom with verified manual and automatic transmission cars.
                  </p>
                  <ul className="service-perks-list">
                    <li><Check size={14} className="check-icon" /> Zero Security Deposit Required</li>
                    <li><Check size={14} className="check-icon" /> Doorstep Delivery &amp; 24/7 RSA</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
                type="button"
                className="services-nav-btn services-nav-next"
                onClick={() => scrollServices("right")}
                aria-label="Next service"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. ABOUT US SECTION (Third in sequence)
            ======================================================== */}
        <section className="section-padding bg-white" id="about">
          <div className="container">
            <div className="about-split-layout">
              {/* Left Column: Twin Overlapping Circular Photos of Indian Service Men in Orange T-Shirts */}
              <div className="about-circles-cluster">
                {/* Back / Top-Left Capsule Arch: Indian serviceman in orange polo t-shirt sitting in car with open door */}
                <div className="about-circle-main">
                  <img
                    src="/images/about-service-arch.jpg"
                    alt="Indian car rental service professional in orange polo t-shirt sitting in luxury car with open door"
                    className="about-circle-img"
                    loading="lazy"
                    decoding="async"
                    width={320}
                    height={320}
                  />
                </div>

                {/* Front / Bottom-Right Overlapping Circle: Indian serviceman in orange t-shirt handing car keys */}
                <div className="about-circle-overlap">
                  <img
                    src="/images/about-service-2.jpg"
                    alt="Indian car rental executive in orange polo t-shirt handing over car keys to customer"
                    className="about-circle-img"
                    loading="lazy"
                    decoding="async"
                    width={320}
                    height={320}
                  />
                </div>
              </div>

              {/* Right Column: Content matching reference design */}
              <div className="about-content-col">
                <div className="about-tag-badge">
                  <span className="about-tag-square"></span>
                  <span>About Us</span>
                </div>

                <h2 className="about-main-heading">
                  Your trusted partner in reliable car rental
                </h2>

                <p className="about-lead-desc">
                  We are committed to delivering seamless self-drive freedom across Hyderabad. From pristine compact hatchbacks to executive luxury sedans and flagship SUVs, our fleet is fully serviced, sanitized, and ready for your next adventure.
                </p>

                <div className="about-features-card-list">
                  {/* Feature 1: Easy Booking Process */}
                  <div className="about-feature-item">
                    <div className="about-feature-icon-circle">
                      <Smartphone size={22} />
                    </div>
                    <div>
                      <h3 className="about-feature-title">
                        Easy Booking Process
                      </h3>
                      <p className="about-feature-text">
                        We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service.
                      </p>
                    </div>
                  </div>

                  {/* Feature Divider */}
                  <div className="about-feature-divider" />

                  {/* Feature 2: Convenient Pick-Up & Return Process */}
                  <div className="about-feature-item">
                    <div className="about-feature-icon-circle">
                      <KeyRound size={22} />
                    </div>
                    <div>
                      <h3 className="about-feature-title">
                        Convenient Pick-Up &amp; Return Process
                      </h3>
                      <p className="about-feature-text">
                        We Have Optimized The Booking Process So That Our Clients Can Experience The Easiest And The Safest Service.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Us Button */}
                <div className="about-btn-pair">
                  <a href="#contact" className="about-btn-pill">
                    Contact Us
                  </a>
                </div>
              </div>
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
          </div>
        </section>

        {/* ========================================================
            5.5 PHOTO GALLERY SECTION (After Testimonials)
            - Light background, 3-column masonry grid
            ======================================================== */}
        <section className="photo-gallery-section" id="photo-gallery">
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
              {/* Column 1 — tall then short */}
              <div className="gallery-masonry-item gm-tall">
                <img
                  src="/images/gallery-1-keys.jpg"
                  alt="RENC service executive handing over car keys to customer in Hyderabad"
                  className="gallery-masonry-img"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={480}
                />
              </div>
              <div className="gallery-masonry-item gm-short">
                <img
                  src="/images/gallery-4-interior.jpg"
                  alt="Premium rental car interior with modern dashboard and sunroof"
                  className="gallery-masonry-img"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={260}
                />
              </div>

              {/* Column 2 — short then tall */}
              <div className="gallery-masonry-item gm-short">
                <img
                  src="/images/gallery-2-highway.jpg"
                  alt="Luxury rental car on Hyderabad highway at golden hour"
                  className="gallery-masonry-img"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={260}
                />
              </div>
              <div className="gallery-masonry-item gm-tall">
                <img
                  src="/images/about-driver.jpg"
                  alt="RENC professional driver ready for customer pickup"
                  className="gallery-masonry-img"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={480}
                />
              </div>

              {/* Column 3 — mid then mid */}
              <div className="gallery-masonry-item gm-mid">
                <img
                  src="/images/gallery-3-inspection.jpg"
                  alt="RENC staff inspecting rental car before handover"
                  className="gallery-masonry-img"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={340}
                />
              </div>
              <div className="gallery-masonry-item gm-mid">
                <img
                  src="/images/about-service-1.jpg"
                  alt="RENC service team delivering excellent car rental experience"
                  className="gallery-masonry-img"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={340}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. GALLERY / FLEET SECTION (Sixth in sequence)
            - Professional & Designed Matching Image 2
            ======================================================== */}
        <section className="fleet-section-premium" id="gallery">
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
                          height={320}
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
                        style={{ padding: "10px 16px", fontSize: "0.86rem", borderRadius: "10px", marginTop: 0 }}
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
                        href={`https://wa.me/919642642604?text=${encodeURIComponent(
                          `*RENC HYDERABAD INQUIRY*\nName: ${fastBookingForm.name}\nPhone: ${fastBookingForm.phone}\nService: ${fastBookingForm.service}\nLocation: ${fastBookingForm.location}\nNotes: ${fastBookingForm.notes}`
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
                          <option value="1. Luxury Sedans (BMW 5 Series, Mercedes C-Class)">
                            1. Luxury Sedans (BMW 5 Series, Mercedes)
                          </option>
                          <option value="2. Premium SUVs & 4x4 (Fortuner, Thar, Scorpio-N)">
                            2. Premium SUVs &amp; 4x4 (Fortuner, Thar)
                          </option>
                          <option value="3. Self-Drive Hatchbacks (Swift, Baleno, i20)">
                            3. Self-Drive Hatchbacks (Swift, Baleno)
                          </option>
                          <option value="4. Airport Express RGIA 24/7 Delivery">
                            4. Airport Express RGIA 24/7 Delivery
                          </option>
                          <option value="5. 7-Seater Family MUVs (Innova Crysta, Ertiga)">
                            5. 7-Seater Family MUVs (Innova Crysta)
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
                  title="RENC Car Rentals Location Map"
                  src="https://maps.google.com/maps?q=Royal%20Cars%20and%20Luxury%20Cars,%20Asif%20Nagar%20Rd,%20opp.%20Pista%20House,%20Hyderabad,%20Telangana%20500006&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="map-google-iframe"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Floating Google Business Card matching reference design */}
                <div className="map-google-business-card">
                  <div className="map-card-company">RENC CAR RENTALS</div>
                  <div className="map-card-category">Luxury &amp; Self-Drive Car Rental Service</div>
                  <div className="map-card-address">
                    2nd Floor, Asif Nagar Rd, Opp. Pista House, Hyderabad, Telangana 500006, India
                  </div>

                  <div className="map-card-ratings">
                    <span className="map-rating-score">4.9</span>
                    <div className="map-rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="#f59e0b" stroke="#f59e0b" />
                      ))}
                    </div>
                    <a
                      href="https://maps.app.goo.gl/QSiM8KGGAvzYerpS8?g_st=aw"
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
                    href="https://maps.app.goo.gl/QSiM8KGGAvzYerpS8?g_st=aw"
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
                    RENC CAR RENTALS...
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
                  <span className="brand-title" style={{ color: "#ffffff" }}>RENC</span>
                  <span className="brand-tagline" style={{ color: "var(--rentq-orange)" }}>
                    CAR RENTALS HYDERABAD
                  </span>
                </div>
              </a>
              <p style={{ fontSize: "0.86rem", color: "#94a3b8", lineHeight: 1.65, maxWidth: "310px" }}>
                Daily, Weekly &amp; Monthly self drive car rentals in Hyderabad with Manual &amp; Automatic transmissions. Doorstep delivery and airport pickup across Hyderabad.
              </p>
              {/* Official Social Media Channels (SEOptimer Social Media Compliance) */}
              <div className="footer-social-row">
                <a
                  href="https://www.facebook.com/renccarrentalshyd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill"
                  aria-label="Follow RENC Car Rentals on Facebook"
                  title="Facebook"
                >
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a
                  href="https://www.instagram.com/renccarrentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill"
                  aria-label="Follow RENC Car Rentals on Instagram"
                  title="Instagram"
                >
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a
                  href="https://x.com/renccarrentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill"
                  aria-label="Follow RENC Car Rentals on X"
                  title="X (Twitter)"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/renccarrentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill"
                  aria-label="Connect with RENC Car Rentals on LinkedIn"
                  title="LinkedIn"
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a
                  href="https://www.youtube.com/@renccarrentals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-pill"
                  aria-label="Subscribe to RENC Car Rentals on YouTube"
                  title="YouTube"
                >
                  <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
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
                  <a href="#gallery" className="footer-nav-link">
                    <span className="footer-nav-chevron">&gt;</span> Our Fleet
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
                    <div><a href="tel:+919642642604" itemProp="telephone">+91 96426 42604</a></div>
                    <div><a href="tel:+919642642604">+91 96426 42604</a></div>
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
                      href="https://maps.app.goo.gl/QSiM8KGGAvzYerpS8?g_st=aw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-maps-action-link"
                    >
                      View location on Google Maps
                    </a>
                  </div>
                </div>

                <div className="footer-contact-row">
                  <Clock size={18} className="footer-contact-icon" />
                  <div className="footer-contact-text">
                    <div>7:00 AM – 11:30 PM (Daily)</div>
                    <div style={{ color: "#94a3b8", fontSize: "0.8rem", marginTop: "2px" }}>
                      24/7 Delivery &amp; Drop-off at Airport
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright & Edone Solutions Credit Line */}
          <div className="footer-bottom-flex">
            <div>
              &copy; 2026 RENC Car Rentals Hyderabad. All rights reserved.
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
        href="https://wa.me/919642642604?text=Hello%20RENC%2C%20I%20want%20to%20rent%20a%20car"
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
                    style={{ width: "120px", height: "70px", objectFit: "contain", borderRadius: "8px", background: "#f8f9fa" }}
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
