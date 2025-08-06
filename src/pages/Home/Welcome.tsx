import Video from '/video/video2.mp4';
import { motion } from 'motion/react'
import { Link } from 'react-router';
import scrollToDiv from '../../utils/scrollToDiv';
export default function Welcome() {
    return (
        <div id='home'>
            <motion.div className="h-screen w-full relative p-4 bg-black overflow-hidden">
                <motion.video
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full object-cover -scale-x-100"
                    src={Video}
                    autoPlay
                    loop
                    muted
                />
                <div
                    className="relative z-10 flex flex-col items-center justify-center h-full">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className={`flex items-center justify-center text-white text-[11px] font-extralight rounded-3xl px-1 py-1 border-1 border-[#0984E9] mb-6
                        `}>
                        <p
                            className="mx-2">text AI by</p>
                        <p className={`bg-[#0984E9] px-2 rounded-xl`}>Hugging Face</p>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="text-6xl md:text-8xl font-semibold mb-5
                        background-clip-text text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BFE2FF]
                        "
                    >
                        {
                            'AI ApCard'.split('').map((char, index) => (
                                <motion.span
                                    className={`text-[#BFE2FF]`}
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2, delay: (1 + index) / 5 }}
                                >
                                    {char}
                                </motion.span>
                            ))
                        }
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2.5 }}
                        className={`text-[#BFE2FF] md:text-xl font-thin text-center px-5 mb-10`}>
                        {

                            'Transforme suas experiências em palavras de impacto. Gere cartas de apresentação profissionais com o poder da IA.'.split('').map((char, index) => (
                                <motion.span
                                    className={`text-[#BFE2FF]`}
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2, delay: (index) / 30 }}
                                >
                                    {char}
                                </motion.span>
                            ))
                        }
                    </motion.p>

                    <motion.div

                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 3 }}
                        className={`flex items-center justify-center flex-col md:flex-row gap-4`}>
                        <Link to='/chat'>
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.9 }}
                                viewport={{ once: true }}
                                transition={{ delay: 3, duration: 1 }}
                                className={`bg-[#0984E9] text-white p-1 w-45 md:w-50 rounded-xl md:rounded-lg cursor-pointer hover:bg-[#0984E9]/50 trasition-colors duration-200`}>Começar</motion.button>
                        </Link>

                        <motion.hr
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4, duration: 1 }}
                            className={`w-[80%] border-1 border-[#BFE2FF]/60 md:rotate-90 md:h-0 md:w-10`} />

                        <motion.button
                            onClick={() => {
                                scrollToDiv('about')
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            viewport={{ once: true }}
                            transition={{ delay: 3.7, duration: 1 }}
                            className={`bg-transparent border-1 border-white/60 text-white p-1 w-45 md:w-50 rounded-xl md:rounded-lg cursor-pointer hover:bg-white/10 trasition-colors duration-200`}
                        >Sobre</motion.button>
                    </motion.div>
                </div>

                <div
                    className="absolute inset-0 w-full h-full pointer-events-none"
                >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/0 to-black" />
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
            </motion.div>
        </div>
    );
}