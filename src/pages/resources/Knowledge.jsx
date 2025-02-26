import React from 'react';
import { motion } from 'framer-motion';

const Knowledge = () => {
  const articles = [
    {
      title: "Understanding Terrain Analysis",
      description: "Learn about the fundamentals of terrain analysis and how DepoDart's AI technology revolutionizes this field.",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "AI in Environmental Monitoring",
      description: "Discover how artificial intelligence is transforming environmental monitoring and conservation efforts.",
      category: "AI & Environment",
      readTime: "8 min read"
    },
    {
      title: "Best Practices in Land Development",
      description: "Expert insights on sustainable land development practices and how technology can support better decision-making.",
      category: "Industry",
      readTime: "10 min read"
    },
    {
      title: "The Future of Urban Planning",
      description: "Explore how advanced terrain analysis is shaping the future of urban development and smart cities.",
      category: "Urban Planning",
      readTime: "7 min read"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-primary-dark pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-light mb-4">
            Knowledge Portal
          </h1>
          <p className="text-lg text-primary-light/80 max-w-2xl mx-auto">
            Explore our collection of articles, guides, and insights about terrain analysis, environmental monitoring, and sustainable development.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {articles.map((article, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-primary-medium p-6 rounded-lg hover:bg-primary-medium/80 transition-colors duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-tertiary-light px-3 py-1 rounded-full bg-tertiary-light/10">
                  {article.category}
                </span>
                <span className="text-sm text-primary-light/60">
                  {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-primary-light mb-3">
                {article.title}
              </h3>
              <p className="text-primary-light/70">
                {article.description}
              </p>
              <div className="mt-4">
                <a 
                  href={'https://pdf.sciencedirectassets.com/271770/1-s2.0-S0169136824X00086/1-s2.0-S0169136824003482/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLWVhc3QtMSJHMEUCIQCnpWRZU1AgEzbCxXxZlNBHmALoD6fuc3kq%2FWC%2Fe6b52gIgL6NYc4b8Mvl49OYrHicndXLsKosFgVGYUbCpEyQ8iFQqswUIZxAFGgwwNTkwMDM1NDY4NjUiDIbSucKPXYvzkLAeTSqQBTXeNKcpUs8%2F1vqObGULK%2BTccJ%2By9sSI6hU46bgfR1XZeftmzDo1MJ28LCMpIBQ8mxZT%2FLxXdAxo21KcZLPtm8FiuqhvDLj%2By9MLqSbOLbRCbuXZAI47NrWUfuBrk4lmclN25k6jwof7S8Bxc5Nm93QiJgs4I12vxF0A1mhUwAYfey1Dih5H3OS3rWPm1F2CO796g48JKaC6umqJW3pOp%2FjBIo7kUwcHWovONwGvW3ilOQuO0%2Fb5LMjSyOnZVE0ayVzjAMFvmx3RGjlYqvtDu2gaFo0mXpQvb3w6lbj7b%2BYaQCduss4seEDeMB1ZwOpqUaVIvrmvP5MKciZwKYyr%2BJ77PZCuAIjiSWPfNUPXSv%2F9WheN5SrI9WfDcbwgdZr4PxVhBFcZmtSFtYumfxsBIaXiqkYm3yqmj33l8bIXewlZ%2B2nMML97V%2FWPheGeO3Lq67dZSgyI9MdlWYl1lwuyD2%2FGkvStsLaoAPaliov2Zln5jdufgd0sqsgKp5WMuCjmikO%2FFfJS7le0hMUy0UgDoY1%2F49f5fVrw9rMWbN5ZKOHTBBRdUioI%2BDG52IZ5KYUXxQpoPGhEP9gt0%2FYNT26trg%2BDjjAkcxXDANmbHT5cYR4RYR5anKSWL89ITqFmelwskkfA6WV3oxVXFic4mFdmyaeHmQWFbGwtpZJOfLKGEoajbNA0U632aSPRfk%2FDTYz8u%2BhTY6yjoEx4ao5kbPXwG3fLaetfRL%2FZvzqS4antYiP6QH10d5Vj3XbI11hEv96G6bwjCPJxqi7YUlOZmKOGaOhAlVXXpfG7uYcDi%2BWL7ggtZRNR3ymICpSW%2FO1lGN%2BNHH8UYDusERTG2%2FHEvd%2FTZRTBzCNw8pyCa5pdKpG4MQEiMPSZ%2Fr0GOrEB4X5dEtQfQcMQj1LAkIsYYpFyfhRsvNgQGxfUjHT%2BkadJdNGu7fwbPACiwcGakPwTu3twrZnEvku2PDgRX6lbdC2Fsumskbjr4DXmBBSePEUEBVONNiFS2Qt3oY%2B40q7Hx9%2FfqcwmCi9nqbRjZA19spIoAG%2FfayBFjk1zM%2BWomRmN5LujVlJZIGbknX5bzuUKf4Ur2GwHh5g1ZVjIrKzV69vZ%2F4dZ74aMCLokmjXEjvYY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20250226T230730Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYZAGUMCWQ%2F20250226%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a7d5f9f244dd3d22e9c2fe6417d6bc660283cde65338303c648d72c5e06ef832&hash=2ae1d08eb1b1f54767ea3bf9ebd4bbba58aabd5bccdb270fb4eb9c1907a50eb7&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S0169136824003482&tid=spdf-3c91fd0b-4339-43cb-8a62-0aabe1008878&sid=5933c0028f28b945239a49a6c33231f09cbfgxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=06075d5357525e505703&rr=9183977d0deaac72&cc=ca&kca=eyJrZXkiOiJ3aURLcmw2VnhVaXZHVFY0V2RxZmdmQUxtYzVJS1BlQTE3R2t1UVBsRDhBWlM1YUNkNTJHMXdpWmxyRVhidHdCRXZDQUlncVNERkhxckowdlJoc09aZEF4NExHOWg3MFI5WnlJZ0x4bTdWbXdnRHNCeDdNZzcxQkdvelB2S0hEUXZUS2dtZnlsdFpNdkJTU0tpU1RtNWJUMmRGeDVTYU85dHB1SCtnckNmVW1uTVdzUHFRPT0iLCJpdiI6ImE3Y2VlNzRjMDZiODU2ZWU2M2Q3M2Y0ZjU3MGQ3Mjc0In0=_1740611263676'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary-light hover:text-tertiary-light/80 transition-colors duration-300"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Knowledge;
