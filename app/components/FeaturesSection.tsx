"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const featureListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const featureRowVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function FeaturesSection() {
  return (
    <motion.section
      id="features"
      className="section-light section-padding-xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="section-container features-shell">
        <div className="section-intro">
          <p className="eyebrow">What PawWalk does for you</p>
          <h2 className="section-title">What PawWalk does for you</h2>
          <p className="section-lead">Flexible scheduling, trusted walkers, and simple booking for busy city routines.</p>
        </div>

        <motion.div
          className="features-stack"
          variants={featureListVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.article className="feature-row" variants={featureRowVariants}>
            <div className="feature-media">
              <ProjectImage id="feature_1" className="feature-image" />
            </div>
            <div className="feature-copy">
              <p className="eyebrow">Flexible scheduling</p>
              <h3 className="feature-title">Flexible scheduling</h3>
              <p className="feature-body">Schedule a walk for today, tonight, or every weekday. Choose one-off walks or set a recurring slot that matches your commute.</p>
            </div>
          </motion.article>

          <motion.article className="feature-row reverse" variants={featureRowVariants}>
            <div className="feature-media">
              <ProjectImage id="feature_2" className="feature-image" />
            </div>
            <div className="feature-copy">
              <p className="eyebrow">Trusted walkers</p>
              <h3 className="feature-title">Vetted walkers and simple safety</h3>
              <p className="feature-body">Walkers are screened, insured, and selected for punctuality and care. Each walk includes GPS tracking so you can follow the route in real time.</p>
            </div>
          </motion.article>

          <motion.article className="feature-row" variants={featureRowVariants}>
            <div className="feature-media">
              <ProjectImage id="feature_3" className="feature-image" />
            </div>
            <div className="feature-copy">
              <p className="eyebrow">Easy mobile booking</p>
              <h3 className="feature-title">Easy mobile booking</h3>
              <p className="feature-body">Book and manage walks from your phone. No apps to learn, no long forms, just an email to get started and a tap to schedule when we open in your neighborhood.</p>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </motion.section>
  );
}