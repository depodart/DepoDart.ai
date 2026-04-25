// 4_Services.jsx — "Our Products" / refined product cards
import { memo } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { SectionWrapper } from "../../hoc";
import { projects, WORKS_TEXT } from "../../constants";
import { uiStyles, brutal } from "../../style";
import TiltCard from "../../components/TiltCard";

const ProductCard = memo(({ id, name, description, tags, image, underDevelopment }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate(`/services/${id}/details`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: id * 0.1 }}
      className="h-full"
    >
      <TiltCard
        as={motion.article}
        onClick={handleClick}
        className={`${brutal.cardInteractive} flex flex-col p-0 overflow-hidden h-full`}
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-primary-light/10">
          <img
            src={image}
            alt={`${name} — product visual`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
          {underDevelopment ? (
            <span className={`${brutal.badgeGold} absolute top-4 left-4`}>
              In Development
            </span>
          ) : (
            <span className={`${brutal.badgeOrange} absolute top-4 left-4`}>
              Live
            </span>
          )}
        </div>

        <div className="p-6 sm:p-8 flex flex-col gap-4 flex-1">
          <h3 className="text-2xl font-semibold text-primary-light tracking-tight">
            {name}
          </h3>
          <p className="text-[14px] sm:text-[15px] leading-relaxed text-primary-light/60">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {tags.map((tag) => (
              <span
                key={tag.name}
                className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] rounded-full border border-primary-light/15 bg-primary-light/[0.04] text-primary-light/70"
              >
                {tag.name}
              </span>
            ))}
          </div>
          <span className={`${uiStyles.btnGhost} mt-3`}>
            See details
            <ArrowRightIcon className="w-4 h-4" />
          </span>
        </div>
      </TiltCard>
    </motion.div>
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
        className="flex flex-col items-start gap-4 mb-14 max-w-3xl"
      >
        <span className={brutal.badge}>{WORKS_TEXT.sectionSubText}</span>
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
