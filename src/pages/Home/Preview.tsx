import { motion } from 'motion/react'
import Video from '/video/preview.mp4';
import FooterVideo from '/video/video1.mp4';
import { Link } from 'react-router'
export default function Preview() {
    return (
        <div className={`relative flex justify-center flex-col py-40 md:py-20 lg:p-50 px-5 md:px-20  min-h-[50vh] w-full`}>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`text-4xl md:text-6xl text-center font-semibold 
            background-clip-text text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BFE2FF] mb-15 md:mb-5`}>
                {'Tenha uma Experiência Incrível'.split('').map((char, index) => (
                    <motion.span
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2, delay: (1 + index) / 30 }}
                        key={index}>
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={`relative flex flex-col items-center gap-10 rounded-2xl px-5 py-10 md:py-5 md:px-10 before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:p-1 before:z-[0] before:bg-gradient-to-b before:transparent before:to-[#72C0FF] before:mask-custom backdrop-blur-lg`}
            >
                <motion.video
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    viewport={{ once: true }}
                    src={Video}
                    autoPlay
                    loop
                    muted
                    className="rounded-2xl"
                ></motion.video>

                <Link to='/chat'>
                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className={`bg-[#0984E9] text-white relative p-1 w-45 md:w-75 rounded-md md:rounded-lg cursor-pointer hover:bg-[#0984E9]/50 trasition-colors z-10 duration-200 hover:cursor-pointer`}>Ir para o Chat</motion.button>
                </Link>
            </motion.div>

            <div className={`w-full h-full absolute inset-0 z-[-1] bg-black`}> {/*  Background preto */}

                <div className={`w-full h-max absolute bottom-0 `}>
                    <div className={`w-full h-[50%] bg-gradient-to-b to-transparent via-black from-black absolute `} />
                    <motion.video
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        viewport={{ once: true }}
                        className={`relative w-full h-[50%] object-cover z-[-1]`}
                        src={FooterVideo}
                        autoPlay
                        loop
                        muted
                    >
                    </motion.video>
                </div>
            </div>
        </div>


    );
}