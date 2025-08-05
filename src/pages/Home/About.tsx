import { motion } from 'motion/react'
import { AboutInfos } from "../../data/AboutInfos";

export default function About() {
    return (
        <div className={`bg-black min-h-[80vh] w-full p-10 md:p-20 relative`}>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`text-4xl md:text-6xl text-center font-semibold 
            background-clip-text text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BFE2FF]`}>
                {
                    'Conheça a Inteligência por Trás das suas Cartas'.split('').map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: (1 + index) / 40 }}
                        >
                            {char}
                        </motion.span>
                    ))
                }
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 2.5 }}
                className={`text-white text-center mt-5 font-extralight text-md md:text-xl mb-20`}>
                {'Transforme suas experiências em palavras de impact. Gere Cartas de apresentação profissionais com o poder da IA.'.split('').map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, delay: (1 + index) / 30 }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.p>

            <ul className={`grid grid-cols-1 sm:px-20 lg:grid-cols-3 justify-center gap-10 mt-10`}>
                {
                    AboutInfos.map((info, index) => (
                        <motion.li
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, delay: (1 + index) / 7 }}
                            key={index}
                            className={`flex flex-col items-center gap-2 mb-10`}>
                            <div className={`flex mb-2
                    items-center justify-center p-3 w-max h-max rounded-2xl`}
                                style={{ background: "radial-gradient(100% 100% at 65% 35%, #0984e93a, #0984e960, #0984E9)" }}
                            >
                                {info.icon}
                            </div>
                            <h2 className={`text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-[#BFE2FF]`}>{info.title}</h2>
                            <p className={`text-white text-center font-extralight text-md md:text-md`}>
                                {info.description}
                            </p>
                        </motion.li>
                    ))
                }
            </ul>
        </div>
    );
}