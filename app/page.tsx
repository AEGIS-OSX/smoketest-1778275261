"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="site-main">
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-labelledby="hero-heading"
      >
        <div className="hero-grid">
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
              className="hero-actions"
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
            >
              <motion.a className="primary-link" href="#signup" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
                Get early access
              </motion.a>
              <motion.a className="secondary-link" href="#how" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
                Learn how PawWalk works
              </motion.a>
            </motion.div>
            <div className="hero-image-frame">
              <ProjectImage id="hero" className="hero-image" />
            </div>
          </div>

          <aside id="signup" className="hero-form-card" aria-labelledby="hero-form-title">
            <div className="form-heading-block">
              <p className="eyebrow">Get early access</p>
              <h2 id="hero-form-title" className="section-title">
                Join the waitlist: enter your email to get early access and launch updates.
              </h2>
              <p className="field-help">
                We’ll only use your email to send launch updates and useful onboarding information.
              </p>
            </div>
            <form className="signup-form" aria-describedby="hero-form-status">
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
                />
              </div>
              <div className="consent-row">
                <input
                  id="hero-consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="consent-checkbox"
                  aria-describedby="hero-consent-copy"
                />
                <label id="hero-consent-copy" htmlFor="hero-consent" className="consent-label">
                  I agree to receive emails and accept the privacy policy. (required)
                </label>
              </div>
              <motion.button className="form-submit" type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
                Get early access
              </motion.button>
              <p id="hero-form-status" className="form-status" aria-live="polite">
                Check your inbox to confirm your subscription.
              </p>
            </form>
          </aside>
        </div>
      </motion.section>

      <motion.section
        id="how"
        className="how-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-labelledby="how-heading"
      >
        <p className="eyebrow">How it works</p>
        <h2 id="how-heading" className="section-title">Early access in three clear steps</h2>
        <div className="how-editorial-list">
          <article className="how-item">
            <h3>Sign up for early access</h3>
            <p>Enter your email and optional first name, then tap Get early access.</p>
          </article>
          <article className="how-item">
            <h3>Confirm your subscription</h3>
            <p>Mailchimp will send a confirmation email. Click the link so we know you want in.</p>
          </article>
          <article className="how-item">
            <h3>We’ll invite you first</h3>
            <p>When PawWalk arrives in your ZIP, you get a priority invite and instructions to book your first walk.</p>
          </article>
        </div>
      </motion.section>
    </main>
  );
}
