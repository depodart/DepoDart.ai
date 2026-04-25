// _LogoBar.jsx — "Trusted by" strip between Hero and About
import { motion } from "framer-motion";
import { LOGO_BAR } from "../../constants";
import { uiStyles, defaultSectionStyles } from "../../style";

const LogoBar = () => {
  return (
    <section
      aria-label="Partners and collaborators"
      className={`${defaultSectionStyles.paddingX} py-10 sm:py-14 border-y border-primary-light/10 bg-primary-dark/60`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className={uiStyles.eyebrow}>
            <span className={uiStyles.eyebrowDot} />
            {LOGO_BAR.eyebrow}
          </span>
          <p className="text-xs text-primary-light/40 font-mono tracking-wider">
            {LOGO_BAR.note}
          </p>
        </motion.div>

        <ul className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-6 items-center">
          {LOGO_BAR.logos.map((logo, idx) => (
            <motion.li
              key={logo.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="flex items-center justify-center h-12 text-primary-light/50 hover:text-primary-light/80 transition-colors duration-300"
              aria-label={logo.name}
              title={logo.name}
            >
              <span className="font-mono text-[13px] sm:text-sm uppercase tracking-[0.22em] font-semibold">
                {logo.short}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LogoBar;
