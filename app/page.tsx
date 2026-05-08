"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const trustItems = [
  "Insured service",
  "Vetted, local walkers",
  "GPS-tracked walks",
  "Launching in select ZIPs, sign up to see if we’re near you"
];

const featureItems = [
  {
    id: "feature_1",
    title: "Flexible scheduling",
    copy: "Schedule a walk for today, tonight, or every weekday. Choose one-off walks or set a recurring slot that matches your commute."
  },
  {
    id: "feature_2",
    title: "Vetted walkers and simple safety",
    copy: "Walkers are screened, insured, and selected for punctuality and care. Each walk includes GPS tracking so you can follow the route in real time."
  },
  {
    id: "feature_3",
    title: "Easy mobile booking",
    copy: "Book and manage walks from your phone. No apps to learn, no long forms, just an email to get started and a tap to schedule when we open in your neighborhood."
  }
];

const steps = [
  {
    title: "Sign up for early access",
    copy: "Enter your email and optional first name, then tap Get early access."
  },
  {
    title: "Confirm your subscription",
    copy: "Mailchimp will send a confirmation email. Click the link so we know you want in."
  },
  {
    title: "We’ll invite you first",
    copy: "When PawWalk arrives in your ZIP, you get a priority invite and instructions to book your first walk."
  }
];

const testimonials = [
  {
    quote: "Punctual, calm, and great with my terrier. I can finally leave work without checking the clock.",
    attribution: "Maria, Brooklyn"
  },
  {
    quote: "Easy to use and the walker sent GPS updates. Felt safe letting someone new walk my dog.",
    attribution: "Jon, Seattle"
  },
  {
    quote: "Saved me from cancelling a meeting. Quick text, on time, and Cooper loved it.",
    attribution: "Priya, San Francisco"
  }
];

const sectionMotion = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const revealItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

function SignupForm({ id, compact = false }: { id: string; compact?: boolean }) {
  return (
    <form className={compact ? "signup-form signup-form-compact" : "signup-form"} aria-label="Join the PawWalk early access waitlist">
      <div className="form-fields">
        <label className="field-label" htmlFor={`${id}-email`}>
          Email address
        </label>
        <input className="field-input" id={`${id}-email`} name="email" type="email" autoComplete="email" required aria-describedby={`${id}-hint`} />
        <label className="field-label" htmlFor={`${id}-first-name`}>
          First name (optional)
        </label>
        <input className="field-input" id={`${id}-first-name`} name="firstName" type="text" autoComplete="given-name" />
      </div>
      <label className="consent-row" htmlFor={`${id}-consent`}>
        <input id={`${id}-consent`} name="consent" type="checkbox" required />
        <span>I agree to receive emails and accept the <a href="#privacy">privacy policy</a>.</span>
      </label>
      <p className="form-hint" id={`${id}-hint`}>
        We’ll only use your email to send launch updates and useful onboarding information.
      </p>
      <motion.button className="primary-cta" type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
        Get early access
      </motion.button>
    </form>
  );
}

export default function Home() {
  return (
    <main className="landing-page">
      <motion.section className="hero-section" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}>
        <div className="hero-copy">
          <motion.p className="hero-eyebrow" variants={revealItem} transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}>
            On-demand walks for busy city days
          </motion.p>
          <motion.h1 className="hero-title" variants={revealItem} transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}>
            PawWalk: Get a trusted dog walk, when you need it.
          </motion.h1>
          <motion.p className="hero-subhead" variants={revealItem} transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}>
            For busy urban dog owners who want punctual, insured walkers and simple mobile booking. Enter your email to get early access and priority invite when PawWalk launches in your area.
          </motion.p>
          <motion.div className="hero-form-panel" variants={revealItem} transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}>
            <SignupForm id="hero-signup" />
          </motion.div>
        </div>
        <motion.div className="hero-image-wrap" variants={revealItem} transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}>
          <ProjectImage id="hero" className="hero-image" />
        </motion.div>
      </motion.section>

      <motion.section className="trust-section" {...sectionMotion}>
        <ul className="trust-list" aria-label="PawWalk trust signals">
          {trustItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section className="features-section" {...sectionMotion}>
        <div className="section-kicker">What PawWalk does for you</div>
        <div className="feature-stack">
          {featureItems.map((feature, index) => (
            <motion.article className={index % 2 === 0 ? "feature-row" : "feature-row feature-row-reverse"} key={feature.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}>
              <div className="feature-copy">
                <h2>{feature.title}</h2>
                <p>{feature.copy}</p>
              </div>
              <ProjectImage id={feature.id as "feature_1" | "feature_2" | "feature_3"} className="feature-image" />
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="how-section" {...sectionMotion}>
        <div className="section-kicker">How it works</div>
        <div className="timeline-list">
          {steps.map((step) => (
            <article className="timeline-item" key={step.title}>
              <h2>{step.title}</h2>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </motion.section>

      <motion.section className="testimonials-section" {...sectionMotion}>
        <div className="testimonial-image-wrap">
          <ProjectImage id="social_proof" className="testimonial-image" />
        </div>
        <div className="testimonial-copy">
          <div className="section-kicker">Early owner feedback</div>
          <div className="testimonial-list">
            {testimonials.map((testimonial) => (
              <blockquote className="testimonial-quote" key={testimonial.attribution}>
                <p>“{testimonial.quote}”</p>
                <cite>— {testimonial.attribution}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="footer-signup-section" {...sectionMotion}>
        <div className="footer-signup-copy">
          <h2>Join the waitlist: enter your email to get early access and launch updates.</h2>
          <p id="privacy">By joining the waitlist you agree to receive emails from PawWalk. You will receive a confirmation email to verify your address. PawWalk Privacy Policy.</p>
        </div>
        <SignupForm id="footer-signup" compact />
      </motion.section>
    </main>
  );
}
