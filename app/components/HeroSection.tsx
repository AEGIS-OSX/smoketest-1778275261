"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "invalid" | "submitted">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail);

    if (!isValidEmail) {
      setStatus("invalid");
      return;
    }

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("pawwalk_cta_click", { detail: { location: "hero_inline" } }));
      window.dispatchEvent(new CustomEvent("pawwalk_signup_submitted", { detail: { method: "inline_hero" } }));
    }

    setStatus("submitted");
    setEmail(normalizedEmail);
    setFirstName(firstName);
    setConsent(consent);
  };

  return (
    <motion.section
      id="hero"
      className="hero-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-labelledby="hero-heading"
    >
      <header className="site-nav">
        <div className="section-container site-nav-inner">
          <Link href="#hero" className="brand-mark">
            PawWalk
          </Link>
          <nav aria-label="Primary navigation">
            <ul className="nav-list">
              <li>
                <Link href="#features" className="nav-link">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how" className="nav-link">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="nav-link">
                  Testimonials
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="section-container hero-grid">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
          >
            PawWalk early access
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="hero-title"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            PawWalk: Get a trusted dog walk, when you need it.
          </motion.h1>
          <motion.p
            className="hero-subhead"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
            For busy urban dog owners who want punctual, insured walkers and simple mobile booking. Enter your email to get early access and priority invite when PawWalk launches in your area.
          </motion.p>
          <motion.div
            className="hero-trust"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            aria-label="Trust highlights"
          >
            <span className="hero-trust-item">Insured service</span>
            <span className="hero-trust-item">Vetted, local walkers</span>
            <span className="hero-trust-item">GPS-tracked walks</span>
          </motion.div>
          <motion.div
            className="hero-image-frame"
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
          >
            <ProjectImage id="hero" className="hero-image" />
          </motion.div>
        </div>

        <motion.div
          className="hero-form-shell"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
        >
          <div className="form-intro">
            <p className="eyebrow">Get early access</p>
            <h2 className="form-title">Get early access</h2>
            <p className="field-help">We’ll only use your email to send launch updates and useful onboarding information.</p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit} noValidate>
            <div className="field-stack">
              <label htmlFor="hero-email" className="field-label">
                Email address
              </label>
              <input
                id="hero-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="field-input"
                placeholder="Email address"
                aria-describedby="hero-email-hint hero-form-status"
                aria-invalid={status === "invalid"}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <p id="hero-email-hint" className="field-hint">
                We’ll only use your email to send launch updates and useful onboarding information.
              </p>
            </div>

            <div className="field-stack">
              <label htmlFor="hero-first-name" className="field-label">
                First name (optional)
              </label>
              <input
                id="hero-first-name"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="field-input"
                placeholder="First name (optional)"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>

            <div className="consent-row">
              <input
                id="hero-consent"
                name="consent"
                type="checkbox"
                required
                className="consent-checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />
              <label htmlFor="hero-consent" className="consent-label">
                I agree to receive emails and accept the privacy policy. <Link href="#footer" className="privacy-link">PawWalk Privacy Policy</Link>
              </label>
            </div>

            <motion.button type="submit" className="primary-button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Get early access
            </motion.button>

            <p id="hero-form-status" className="form-status status-message-muted" aria-live="polite">
              {status === "submitted" ? "Check your inbox to confirm your subscription." : "We’ll only use your email to send launch updates and useful onboarding information."}
            </p>
            <p className="form-status status-message-success" aria-live="polite">
              {status === "submitted" ? "Thanks. Check your inbox to confirm your subscription." : ""}
            </p>
            <p className="form-status status-message-error" aria-live="polite">
              {status === "invalid" ? "Please enter a valid email address." : ""}
            </p>
            <p className="sr-only">Network error, please try again. You’re already on the list. Check your email for the confirmation message.</p>
          </form>

          <Link href="#how" className="secondary-link">
            Learn how PawWalk works
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}