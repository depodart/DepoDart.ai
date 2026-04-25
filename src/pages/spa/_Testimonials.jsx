// _Testimonials.jsx — placeholder quote until real client quotes land
import { motion } from "framer-motion";
import { TESTIMONIALS } from "../../constants";
import { uiStyles, defaultSectionStyles } from "../../style";

const Testimonials = () => {
  const quote = TESTIMONIALS.items[0];
  if (!quote) return null;

  return (
    <section
      aria-label="Testimonials"
      className={`${defaultSectionStyles.paddingX} py-20 sm:py-28 border-y border-primary-light/10`}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <span className={uiStyles.eyebrow}>
            <span className={uiStyles.eyebrowDot} />
            {TESTIMONIALS.sectionSubText}
          </span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <span
            aria-hidden="true"
            className="absolute -top-6 -left-2 sm:-left-6 text-7xl sm:text-8xl font-serif leading-none text-secondary-dark/40"
          >
            &ldquo;
          </span>
          <p className="text-xl sm:text-2xl md:text-[28px] leading-relaxed text-primary-light font-medium px-2">
            {quote.quote}
          </p>
        </motion.blockquote>

        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-1 mt-2"
        >
          <p className="text-sm font-semibold text-primary-light">
            {quote.author}
          </p>
          <p className="text-xs text-primary-light/50">{quote.role}</p>
          {quote.isPlaceholder && (
            <span className="mt-3 text-[10px] uppercase tracking-[0.22em] text-tertiary-light/70 font-mono">
              Placeholder — client quotes coming soon
            </span>
          )}
        </motion.footer>
      </div>
    </section>
  );
};

export default Testimonials;
