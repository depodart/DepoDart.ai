// _FinalCta.jsx — last conversion moment before the footer
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { FINAL_CTA } from "../../constants";
import { brutal, defaultSectionStyles } from "../../style";
import BauhausArt from "../../components/BauhausArt";

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
      className={`${defaultSectionStyles.paddingX} py-20 sm:py-32 relative overflow-hidden bg-[#0a0604] border-t-4 border-secondary-dark`}
    >
      {/* Bauhaus decorative composition */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div className="w-full max-w-5xl opacity-80">
          <BauhausArt kind="finalCta" />
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[32px] sm:text-[44px] md:text-[56px] font-bold text-primary-light tracking-tight leading-[1.1]"
        >
          {FINAL_CTA.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-[15px] sm:text-[17px] leading-relaxed text-primary-light/75 max-w-2xl"
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
          <button
            type="button"
            onClick={handlePrimary}
            className={brutal.btnPrimary}
          >
            {FINAL_CTA.primary.text}
            <ArrowRightIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleSecondary}
            className={brutal.btnSecondary}
          >
            <BookOpenIcon className="w-4 h-4" />
            {FINAL_CTA.secondary.text}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCta;
