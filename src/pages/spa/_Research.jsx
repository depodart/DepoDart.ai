// _Research.jsx — surfaces real published research from /resources/knowledge.
// Adds credibility by linking to actual third-party academic sources rather
// than making invented claims.
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, BookOpen, Database, Layers } from "lucide-react";
import { brutal, uiStyles, defaultSectionStyles } from "../../style";

// Same data as src/pages/resources/Knowledge.jsx — kept in sync manually for now.
const RESEARCH = [
  {
    title: "AI in Mineral Exploration",
    summary:
      "How machine learning, autonomous systems, and predictive analytics are reshaping discovery rates and operational cost.",
    category: "AI & Industry",
    readTime: "5 min read",
    icon: BookOpen,
    pdfUrl:
      "https://www.sciencedirect.com/science/article/pii/S0169136824003482",
  },
  {
    title: "Big Data, New Frontiers in Mineral Exploration",
    summary:
      "Open-access platforms, AI-driven data integration, and collaborative geoscience expanding exploration capability.",
    category: "AI & Industry",
    readTime: "8 min read",
    icon: Database,
    pdfUrl:
      "https://www.sciencedirect.com/science/article/pii/S0169136824003482",
  },
  {
    title: "New Technologies in Prospectivity Mapping",
    summary:
      "AI, machine learning, and hyperspectral imaging applied to resource exploration.",
    category: "Industry",
    readTime: "10 min read",
    icon: Layers,
    pdfUrl:
      "https://www.sciencedirect.com/science/article/pii/S0169136824003482",
  },
];

const ResearchCard = ({ item, index }) => {
  const Icon = item.icon;
  return (
    <motion.a
      href={item.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${brutal.cardInteractive} flex flex-col gap-4 h-full no-underline`}
    >
      <div className="flex items-center justify-between">
        <span className="w-11 h-11 rounded-md border-2 border-secondary-dark bg-secondary-dark/15 text-secondary-dark flex items-center justify-center shrink-0">
          <Icon size={22} />
        </span>
        <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-primary-light/40">
          {item.readTime}
        </span>
      </div>

      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary-dark">
        {item.category}
      </span>

      <h3 className="text-lg font-bold text-primary-light tracking-tight leading-snug">
        {item.title}
      </h3>

      <p className="text-[14px] leading-relaxed text-primary-light/65 flex-1">
        {item.summary}
      </p>

      <span className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-wider text-secondary-dark mt-2">
        Read paper
        <ExternalLink size={12} />
      </span>
    </motion.a>
  );
};

const Research = () => {
  return (
    <section
      aria-label="Research and insights"
      className={`${defaultSectionStyles.paddingX} py-20 sm:py-28 relative z-0`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-4 mb-12 max-w-3xl"
        >
          <span className={brutal.badge}>RESEARCH & INSIGHTS</span>
          <h2 className={uiStyles.sectionHeading}>
            Grounded in published geoscience research.
          </h2>
          <p className={uiStyles.sectionSubheading}>
            We work in a domain where the literature matters. These are the kinds of papers that inform how we think about prospectivity mapping.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {RESEARCH.map((item, index) => (
            <ResearchCard key={item.title} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-10 flex justify-center"
        >
          <Link to="/resources/knowledge" className={brutal.btnSecondary}>
            <ArrowRight size={16} />
            Browse all resources
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
