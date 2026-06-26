import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn } from '../utils/motion';
import { ComputersCanvas } from './canvas';

const AgenticAI = () => {
  return (
    <section className="relative w-full min-h-[600px] bg-eerieBlack/90 py-16 hidden lg:block">
      <div className={`${styles.padding} max-w-7xl mx-auto`}>
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text side */}
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-1"
          >
            <p className={styles.sectionSubText}>Powered by Innovation</p>
            <h2 className={styles.sectionHeadTextLight}>Agentic AI.</h2>
            <p className="mt-4 text-taupe text-lg leading-relaxed max-w-lg">
              Harnessing the power of autonomous AI agents with custom multi-steptool use pipelines, intelligent workflow automation, and real-time adaptive reasoning through LangChain and OpenAI integrations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Multi-Agent Systems', 'Tool Use Chains', 'Autonomous Reasoning'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-jet/50 border border-[#915EFF]/30 text-timberWolf text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 3D Scene */}
          <motion.div
            variants={fadeIn('left', 'tween', 0.4, 1)}
            className="flex-1 w-full h-[400px]"
          >
            <ComputersCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgenticAI;
