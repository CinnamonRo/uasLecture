import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FooterWithLogo() {
  const [isHovered, setIsHovered] = useState(false);

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  const logoVariants = {
    hover: { scale: 1.1 },
    initial: { scale: 1 },
  };

  const linkVariants = {
    hover: { scale: 1.0, backgroundColor: 'rgba(0, 0, 0, 0.1)', padding: '8px 16px', borderRadius: '8px' },
    initial: { scale: 1, backgroundColor: 'transparent', padding: '6px 12px', borderRadius: '6px' },
  };

  const linkTransition = {
    duration: 0.3,
    type: "spring",
    stiffness: 100,
  };

  return (
    <motion.footer
      className="w-full bg-white p-4"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <motion.img
          src="path_to_your_logo_image"
          alt="logo-ct"
          className="w-10"
          variants={logoVariants}
          whileHover="hover"
        />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <motion.li
            variants={linkVariants}
            whileHover="hover"
            transition={linkTransition}
          >
            <p
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </p>
          </motion.li>
          <motion.li
            variants={linkVariants}
            whileHover="hover"
            transition={linkTransition}
          >
            <p
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </p>
          </motion.li>
          <motion.li
            variants={linkVariants}
            whileHover="hover"
            transition={linkTransition}
          >
            <p
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </p>
          </motion.li>
          <motion.li
            variants={linkVariants}
            whileHover="hover"
            transition={linkTransition}
          >
            <p
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </p>
          </motion.li>
        </ul>
      </div>
    </motion.footer>
  );
}
