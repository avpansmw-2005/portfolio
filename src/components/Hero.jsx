import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { styles } from '../styles';
import { avneet, bwmap, worldmap } from '../assets';
import { getSystemInfo } from '../utils/systemInfo';
import { addEntry } from '../utils/firebaseService';
import { StarsCanvas } from './canvas';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const texts = ["Avneet", "Techie Avneet, lets build the future"];
  const description = "Senior Full Stack Developer with 5 years experience building scalable web platforms, intelligent AI systems, and cloud native solutions using React, Next.js, Node.js, and Azure.";
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const TYPING_SPEED = 20;
    const DELETING_SPEED = 20;
    const PAUSE_BEFORE_DELETE = 50;
    const PAUSE_AFTER_DELETE = 50;

    let intervalId;
    let timeoutId;

    const startTyping = () => {
      intervalId = setInterval(() => {
        const currentFullText = texts[textIndex];

        if (!isDeleting && charIndex < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        } else if (!isDeleting && charIndex === currentFullText.length) {
          clearInterval(intervalId);
          if (textIndex === 0) {
            timeoutId = setTimeout(() => {
              setIsDeleting(true);
              startTyping();
            }, PAUSE_BEFORE_DELETE);
          } else {
            setTimeout(() => setShowDescription(true), 300);
          }
        } else if (isDeleting && charIndex > 0) {
          setCurrentText(currentFullText.slice(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        } else if (isDeleting && charIndex === 0) {
          clearInterval(intervalId);
          setIsDeleting(false);
          setTextIndex(1);
          timeoutId = setTimeout(startTyping, PAUSE_AFTER_DELETE);
        }
      }, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    };

    startTyping();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [charIndex, isDeleting, textIndex]);

  useEffect(() => {
    const logVisit = async () => {
      try {
        const systemInfo = getSystemInfo();
        await addEntry({
          type: 'visit',
          ...systemInfo
        });
      } catch (error) {
        console.error('Error logging visit:', error);
      }
    };

    logVisit();
  }, []);

  return (
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto
        sm:bg-hero bg-hero-mobile bg-top bg-cover bg-no-repeat overflow-hidden">
        {/* World map background - masked to show only on the light gray (white) side */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-multiply sm:block hidden"
          style={{
            backgroundImage: `url(${bwmap})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            WebkitMaskImage: 'linear-gradient(135deg, black 60%, transparent 60.2%)',
            maskImage: 'linear-gradient(135deg, black 60%, transparent 60.2%)'
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.3] mix-blend-multiply sm:hidden block"
          style={{
            backgroundImage: `url(${worldmap})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            WebkitMaskImage: 'linear-gradient(137deg, black 60%, transparent 60.2%)',
            maskImage: 'linear-gradient(137deg, black 60%, transparent 60.2%)'
          }}
        />

        {/* Stars background — sits behind all content */}
        <div className="absolute inset-0 pointer-events-none">
          <StarsCanvas />
        </div>

        <div
          className={`absolute inset-0 sm:top-[230px] top-[200px]
          ${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start
          justify-start gap-3`}>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl  sm:text-5xl md:text-6xl font-mova font-bold text-eerieBlack mb-5 tracking-tight"
            >
              <span className="text-[#915EFF] bg-gradient-to-r from-[#915EFF] to-[#7c4dff] bg-clip-text text-transparent">I'm </span>
              <span className="text-eerieBlack">
                {currentText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-1 h-8 bg-gradient-to-b from-[#915EFF] to-[#7c4dff] ml-1"
              />
            </motion.div>

            <AnimatePresence>
              {showDescription && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut"
                  }}
                  className="mt-15 text-lg sm:text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed
                    font-light tracking-wide backdrop-blur-sm bg-black/40 p-5 rounded-lg
                    border border-[#915EFF]/10 shadow-lg"
                >
                  <span className="bg-gradient-to-r from-[#915EFF] to-[#7c4dff] bg-clip-text text-transparent font-medium">
                    {description.split(' ').slice(0, 2).join(' ')}
                  </span>
                  {' '}
                  {description.split(' ').slice(2).join(' ')}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        <div>
          <img
            className="absolute bottom-0 ml-[45vw]
            lg:ml-[70vw] md:ml-[40vw] xmd:ml-[50vw] 2xl:ml-[63vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={avneet}
            alt="avneet"
          />
        </div>
      </section>
  );
};

export default Hero;
