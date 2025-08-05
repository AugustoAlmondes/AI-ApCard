import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import scrollToDiv from '../utils/scrollToDiv';

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', ref: 'home' },
    { name: 'Sobre', ref: 'about' },
    { name: 'Desenvolvedor', ref: 'https://augusto-almondes.netlify.app' },
    { name: 'Começar', ref: '#' }
  ];

  const handleNavClick = (item: { name: string; ref: string }) => {
    if (item.name === 'Desenvolvedor') {
      window.open(item.ref, '_blank');
    } else {
      scrollToDiv(item.ref);
    }
    setIsOpen(false); // Fecha o menu ao clicar em um item
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 4 }}
      className="w-full fixed top-0 left-0 z-50 backdrop-blur-sm bg-gradient-to-b from-black/40 to-transparent"
    >
      <div className={`container mx-auto px-5 md:px-2 ${scroll > 0 ? 'py-2' : 'py-5'} transition-all duration-300`}>
        <nav className="flex justify-between items-center">
          {/* Logo - visível em todas as telas */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 4.2 }}
          >
            <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BFE2FF]">
              AI ApCard
            </span>
          </motion.div>

          {/* Menu Desktop - escondido em mobile */}
          <motion.div
            className="hidden md:flex items-center gap-4 md:gap-8"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 4 + index * 0.1 }}
                onClick={() => handleNavClick(item)}
                className={`text-[#BFE2FF] hover:text-white hover:cursor-pointer transition-colors duration-200 px-3 py-1 rounded-md ${item.name === 'Começar' ? 'bg-[#0984E9] hover:bg-[#0984E9]/90 text-white' : ''}`}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Menu Hamburguer - apenas mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#BFE2FF] hover:text-white focus:outline-none"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Menu Mobile - aparece quando aberto */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 space-y-3"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => handleNavClick(item)}
                className={`block w-full ${item.name !== 'Começar' ? 'text-left':''} text-[#BFE2FF] hover:text-white transition-colors duration-200 px-3 py-2 rounded-md ${item.name === 'Começar' ? 'bg-[#0984E9] hover:bg-[#0984E9]/90 text-white text-center' : ''}`}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}