import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { uiStyles } from "../../style";

const faqData = [
  {
    question: "What is DepoDart?",
    answer:
      "DepoDart is exploration intelligence software for the mining industry. We help exploration teams bring their geological, geophysical, and geochemical data into a single analytical workflow.",
  },
  {
    question: "How accurate is DepoDart?",
    answer:
      "The accuracy of our models depends on the data used. Clients can choose to use public data, where roughly 1 in 4 deposits is detected, or provide high-definition data for the target area. In the latter case, accuracy will generally be higher — depending on the number of raster layers provided and their resolution.",
  },
  {
    question: "What industries can benefit from DepoDart?",
    answer:
      "DepoDart supports the mining industry by providing AI-driven geological insights to enhance mineral exploration — particularly for precious metals (gold, silver) and strategic minerals (cobalt, copper, lithium).",
  },
  {
    question: "How frequently is the training data updated?",
    answer:
      "We continuously integrate new data into the training set, adding approximately one new database per month. The process includes identifying the database, obtaining permissions, downloading, and reformatting.",
  },
  {
    question: "Can I export analysis results from DepoDart?",
    answer:
      "Yes. DepoDart allows you to export results as PDF reports, CSV data files, and GIS-compatible formats for integration with your existing tools.",
  },
  {
    question: "Is my data secure with DepoDart?",
    answer:
      "Yes. All data is encrypted in transit and at rest, and we comply with international data-protection standards. We also offer private cloud deployments for enterprise clients.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-primary-dark pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-4 max-w-3xl mb-14"
        >
          <span className={uiStyles.eyebrow}>
            <span className={uiStyles.eyebrowDot} />
            FREQUENTLY ASKED
          </span>
          <h1 className={`${uiStyles.sectionHeading} text-[40px] sm:text-[56px] md:text-[64px]`}>
            Questions we answer often.
          </h1>
          <p className={`${uiStyles.sectionSubheading} text-[17px] sm:text-[19px]`}>
            If you have a question we haven't covered, reach out — we reply within two business days.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          {faqData.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-xl border transition-all duration-300 ${
                  open
                    ? "border-secondary-dark/50 bg-primary-light/[0.04]"
                    : "border-primary-light/10 bg-primary-light/[0.02] hover:border-primary-light/20"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <h2 className="text-base sm:text-lg font-semibold text-primary-light">
                    {faq.question}
                  </h2>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-secondary-dark transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {open && (
                  <div className="px-6 pb-5 -mt-1">
                    <p className="text-[14px] sm:text-[15px] leading-relaxed text-primary-light/70">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
