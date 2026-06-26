import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[200px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] leading-[30px] w-full">
        Over the past 5+ years, I've evolved from writing my first production API to architecting full-stack platforms that serve thousands of users. My sweet spot lies at the intersection of React/Next.js frontends, Node.js microservices, and intelligent AI systems.
        <br /><br />
        Currently, I'm building intelligent web applications as a Freelance Full Stack Developer, leveraging Generative AI, LangChain, and cloud native architectures on Azure. Previously, I honed my enterprise skills at MortgEdge as a Software Engineer Intern, delivering React-based financial solutions and secure API integrations.
        <br /><br />
        I thrive on transforming fuzzy requirements into clean, testable code — whether that's a real-time chatbot pipeline, a CI/CD deployment on Azure Container Registry, or a pixel-perfect UI. When I'm not debugging, you'll find me exploring agentic AI workflows or optimizing database queries.
      </motion.p>

      <div className="mt-20 flex flex-wrap sm:flex-nowrap gap-6 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
