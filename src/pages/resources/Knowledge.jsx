import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { uiStyles } from "../../style";

const articles = [
  {
    title: "AI in Mineral Exploration",
    description:
      "The integration of AI into mineral exploration represents a paradigm shift in how the mining industry identifies and extracts critical resources. Machine learning, autonomous systems, and predictive analytics are overcoming long-standing challenges in discovery rates and operational cost.",
    category: "AI & Industry",
    readTime: "5 min read",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0169136824003482",
  },
  {
    title: "Big Data, New Frontiers in Mineral Exploration",
    description:
      "Recent advancements in public datasets and big-data analytics are transforming mineral exploration. New open-access platforms, AI-driven data integration, and collaborative geoscience projects are expanding exploration capability.",
    category: "AI & Industry",
    readTime: "8 min read",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0169136824003482",
  },
  {
    title: "New Technologies in Prospectivity Mapping",
    description:
      "Recent advancements in prospectivity mapping leverage AI, machine learning, and hyperspectral imaging to transform resource exploration.",
    category: "Industry",
    readTime: "10 min read",
    pdfUrl: "https://www.sciencedirect.com/science/article/pii/S0169136824003482",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Knowledge = () => {
  return (
    <div className="min-h-screen w-full bg-primary-dark pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-4 max-w-3xl mb-14"
        >
          <span className={uiStyles.eyebrow}>
            <span className={uiStyles.eyebrowDot} />
            RESEARCH & INSIGHTS
          </span>
          <h1 className={`${uiStyles.sectionHeading} text-[40px] sm:text-[56px] md:text-[64px]`}>
            Knowledge portal.
          </h1>
          <p className={`${uiStyles.sectionSubheading} text-[17px] sm:text-[19px]`}>
            Articles and insights on AI, big data, and prospectivity mapping in mineral exploration.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {articles.map((article) => (
            <motion.article
              key={article.title}
              variants={itemVariants}
              className={`${uiStyles.card} flex flex-col gap-4 h-full`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-secondary-dark px-2.5 py-1 rounded-md bg-secondary-dark/10 border border-secondary-dark/20">
                  {article.category}
                </span>
                <span className="text-xs text-primary-light/50">
                  {article.readTime}
                </span>
              </div>
              <h2 className="text-xl font-bold text-primary-light tracking-tight">
                {article.title}
              </h2>
              <p className="text-[14px] leading-relaxed text-primary-light/65 flex-1">
                {article.description}
              </p>
              <a
                href={article.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${uiStyles.btnGhost} mt-2`}
              >
                Read article
                <ArrowRight size={14} />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Knowledge;
