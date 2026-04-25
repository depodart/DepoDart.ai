// _FinalCta.jsx — last conversion moment before the footer
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { FINAL_CTA } from "../../constants";
import { brutal, defaultSectionStyles } from "../../style";

const FinalCta = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handlePrimary = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    navigate(FINAL_CTA.primary.path);
    window.scrollTo(0, 0);
  };

  const handleSecondary = () => {
    navigate(FINAL_CTA.secondary.path);
    window.scrollTo(0, 0);
  };

  return (
    <section
      aria-label="Get started"
      className={`${defaultSectionStyles.paddingX} py-20 sm:py-32 relative overflow-hidden bg-[#080F1F] border-t border-primary-light/10`}
    >
      {/* Subtle radial highlight — provides depth without decoration noise */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(210,59,12,0.10), transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[32px] sm:text-[44px] md:text-[56px] font-semibold text-primary-light tracking-tight leading-[1.1]"
        >
          {FINAL_CTA.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[15px] sm:text-[17px] leading-relaxed text-primary-light/65 max-w-2xl"
        >
          {FINAL_CTA.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <button type="button" onClick={handlePrimary} className={brutal.btnPrimary}>
            {FINAL_CTA.primary.text}
            <ArrowRightIcon className="w-4 h-4" />
          </button>
          <button type="button" onClick={handleSecondary} className={brutal.btnSecondary}>
            <BookOpenIcon className="w-4 h-4" />
            {FINAL_CTA.secondary.text}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;
