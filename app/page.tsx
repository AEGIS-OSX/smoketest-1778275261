"use client";

import { motion } from "framer-motion";
import HeroSection from "@/app/components/HeroSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import { ProjectImage } from "@/app/components/ProjectImage";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <div className="page-shell">
      <main className="page-main">
        <HeroSection />
        <FeaturesSection />

        <motion.section
          id="how"
          className="section-warm section-padding-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="section-container how-shell">
            <div className="section-intro">
              <p className="eyebrow">How it works</p>
              <h2 className="section-title">How it works</h2>
              <p className="section-lead">A quick three-step path from interest to a priority invite.</p>
            </div>

            <motion.div
              className="how-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              <motion.article className="how-step" variants={fadeUp}>
                <p className="step-index">1</p>
                <h3 className="step-title">Sign up for early access</h3>
                <p className="step-body">Enter your email and optional first name, then tap Get early access.</p>
              </motion.article>

              <motion.article className="how-step" variants={fadeUp}>
                <p className="step-index">2</p>
                <h3 className="step-title">Confirm your subscription</h3>
                <p className="step-body">Mailchimp will send a confirmation email. Click the link so we know you want in.</p>
              </motion.article>

              <motion.article className="how-step" variants={fadeUp}>
                <p className="step-index">3</p>
                <h3 className="step-title">We’ll invite you first</h3>
                <p className="step-body">When PawWalk arrives in your ZIP, you get a priority invite and instructions to book your first walk.</p>
              </motion.article>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="testimonials"
          className="section-light section-padding-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="section-container testimonials-shell">
            <div className="section-intro">
              <p className="eyebrow">Testimonials</p>
              <h2 className="section-title">PawWalk helps busy owners stay on schedule.</h2>
            </div>

            <div className="testimonials-grid">
              <div className="social-proof-frame">
                <ProjectImage id="social_proof" className="social-proof" />
              </div>

              <motion.div
                className="testimonial-list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
              >
                <motion.blockquote className="testimonial-item" variants={fadeUp}>
                  <p className="testimonial-text">“Punctual, calm, and great with my terrier. I can finally leave work without checking the clock.”</p>
                  <footer className="testimonial-attribution">— Maria, Brooklyn</footer>
                </motion.blockquote>

                <motion.blockquote className="testimonial-item" variants={fadeUp}>
                  <p className="testimonial-text">“Easy to use and the walker sent GPS updates. Felt safe letting someone new walk my dog.”</p>
                  <footer className="testimonial-attribution">— Jon, Seattle</footer>
                </motion.blockquote>

                <motion.blockquote className="testimonial-item" variants={fadeUp}>
                  <p className="testimonial-text">“Saved me from cancelling a meeting. Quick text, on time, and Cooper loved it.”</p>
                  <footer className="testimonial-attribution">— Priya, San Francisco</footer>
                </motion.blockquote>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="trust"
          className="section-light section-padding-md"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="section-container-narrow">
            <div className="trust-strip">
              <p className="eyebrow">Trust bar</p>
              <ul className="trust-list">
                <li className="trust-item">Insured service</li>
                <li className="trust-item">Vetted, local walkers</li>
                <li className="trust-item">GPS-tracked walks</li>
                <li className="trust-item">Launching in select ZIPs, sign up to see if we’re near you</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.footer
          id="footer"
          className="section-light section-padding-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="section-container footer-shell">
            <div className="footer-grid">
              <div className="footer-brand">
                <p className="eyebrow">PawWalk</p>
                <h2 className="section-title">Join the waitlist: enter your email to get early access and launch updates.</h2>
                <p className="privacy-copy">By joining the waitlist you agree to receive emails from PawWalk. You will receive a confirmation email to verify your address.</p>
                <p className="footer-meta">PawWalk connects urban dog owners with vetted, GPS-tracked walkers. Join the waitlist for early access and priority invites when we launch near you.</p>
                <div className="footer-links">
                  <a href="#hero" className="footer-link">PawWalk</a>
                  <a href="#features" className="footer-link">Features</a>
                  <a href="#how" className="footer-link">How it works</a>
                  <a href="#testimonials" className="footer-link">Testimonials</a>
                  <a href="#footer" className="footer-link">Privacy Policy</a>
                </div>
              </div>

              <div className="footer-form-shell">
                <div className="form-intro">
                  <p className="eyebrow">Get early access</p>
                  <h3 className="form-title">Join the waitlist: enter your email to get early access and launch updates.</h3>
                </div>

                <form className="signup-form">
                  <div className="field-row">
                    <div className="field-stack">
                      <label htmlFor="footer-email" className="field-label">
                        Email address
                      </label>
                      <input
                        id="footer-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="field-input"
                        placeholder="Email address"
                        aria-describedby="footer-form-status"
                      />
                    </div>

                    <div className="field-stack">
                      <label htmlFor="footer-first-name" className="field-label">
                        First name
                      </label>
                      <input
                        id="footer-first-name"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        className="field-input"
                        placeholder="First name (optional)"
                      />
                    </div>
                  </div>

                  <div className="consent-row">
                    <input id="footer-consent" name="consent" type="checkbox" required className="consent-checkbox" />
                    <label htmlFor="footer-consent" className="consent-label">
                      I agree to receive emails and accept the privacy policy. <a href="#footer" className="privacy-link">PawWalk Privacy Policy</a>
                    </label>
                  </div>

                  <button type="submit" className="primary-button">
                    Get early access
                  </button>

                  <p id="footer-form-status" className="form-status status-message-muted">Check your inbox to confirm your subscription.</p>
                  <p className="form-status status-message-success">Thanks. Check your inbox to confirm your subscription.</p>
                  <p className="form-status status-message-error">Please enter a valid email address.</p>
                  <p className="sr-only">Network error, please try again. You’re already on the list. Check your email for the confirmation message.</p>
                </form>
              </div>
            </div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
