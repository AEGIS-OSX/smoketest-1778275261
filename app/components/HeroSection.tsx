"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const copyItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  const handleCtaClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("pawwalk_cta_click"));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("pawwalk_signup_submitted"));
    }
  };

  return (
    <motion.section
      id="hero"
      className="hero-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <header className="site-nav">
        <div className="site-nav-inner">
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

      <div className="hero-media" aria-hidden="true">
        <ProjectImage id="hero" className="hero-image" />
      </div>

      <div className="section-container hero-content-wrap">
        <motion.div
          className="hero-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p className="hero-eyebrow" variants={copyItem} transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}>
            Insured service • Vetted, local walkers • GPS-tracked walks
          </motion.p>
          <motion.h1 className="hero-title" variants={copyItem} transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}>
            PawWalk: Get a trusted dog walk, when you need it.
          </motion.h1>
          <motion.p className="hero-subhead" variants={copyItem} transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }}>
            For busy urban dog owners who want punctual, insured walkers and simple mobile booking. Enter your email to get early access and priority invite when PawWalk launches in your area.
          </motion.p>
          <motion.div className="hero-cta-row" variants={copyItem} transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}>
            <motion.a href="#hero-signup" className="primary-cta" onClick={handleCtaClick} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Get early access
            </motion.a>
            <p className="hero-cta-note">Launching in select ZIPs, sign up to see if we’re near you</p>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-form-panel"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
        >
          <p className="form-kicker">Get priority invite</p>
          <form id="hero-signup" className="signup-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="hero-email">Email address</label>
              <input id="hero-email" name="email" type="email" autoComplete="email" required aria-describedby="hero-email-hint" />
              <p id="hero-email-hint" className="field-hint">We’ll only use your email to send launch updates and useful onboarding information.</p>
            </div>
            <div className="form-field">
              <label htmlFor="hero-first-name">First name (optional)</label>
              <input id="hero-first-name" name="firstName" type="text" autoComplete="given-name" />
            </div>
            <label className="consent-check" htmlFor="hero-consent">
              <input id="hero-consent" name="consent" type="checkbox" required />
              <span>I agree to receive emails and accept the privacy policy.</span>
            </label>
            <motion.button type="submit" className="primary-cta form-submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Get early access
            </motion.button>
            <p className="form-status" role="status" aria-live="polite">Check your inbox to confirm your subscription.</p>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
