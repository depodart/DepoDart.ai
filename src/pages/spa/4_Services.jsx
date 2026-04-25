// 4_Services.jsx — Products / platform cards
import { memo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { SectionWrapper } from "../../hoc";
import { projects, WORKS_TEXT } from "../../constants";
import { uiStyles } from "../../style";

const ProductCard = memo(({ id, name, description, tags, image, underDevelopment }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/services/${id}/details`);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: id * 0.1 }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-primary-light/10 bg-primary-light/[0.03] backdrop-blur-sm hover:border-secondary-dark/50 transition-all duration-500 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={`${name} — product screenshot`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        {underDevelopment && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-tertiary-light/95 text-primary-dark text-[10px] font-bold uppercase tracking-[0.18em] shadow-lg">
            In Development
          </span>
        )}
        {!underDevelopment && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-secondary-dark/95 text-primary-light text-[10px] font-bold uppercase tracking-[0.18em] shadow-lg">
            Live
          </span>
        )}
      </div>

      <div className="p-6 sm:p-8 flex flex-col gap-4">
        <h3 className="text-2xl sm:text-[26px] font-bold text-primary-light tracking-tight">
          {name}
        </h3>
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-primary-light/70">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-md bg-secondary-dark/15 text-secondary-dark border border-secondary-dark/20"
            >
              {tag.name}
            </span>
          ))}
        </div>
        <span className={`${uiStyles.btnGhost} mt-2`}>
          See details
          <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </div>
    </motion.article>
  );
});
ProductCard.displayName = "ProductCard";

const Services = () => {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-start gap-3 mb-12"
      >
        <span className={uiStyles.eyebrow}>
          <span className={uiStyles.eyebrowDot} />
          {WORKS_TEXT.sectionSubText}
        </span>
        <h2 className={uiStyles.sectionHeading}>
          {WORKS_TEXT.sectionHeading}
        </h2>
        <p className={uiStyles.sectionSubheading}>
          {WORKS_TEXT.description}
        </p>
      </motion.div>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <ProductCard
            key={`project-${index}`}
            {...project}
            id={index}
          />
        ))}
      </section>
    </main>
  );
};

export default SectionWrapper(Services, "products");
