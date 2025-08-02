// import './Home.module.css';
// import styles from './Home.module.css';
import Video from '/video/video2.mp4';
import { motion } from 'motion/react'

export default function Home() {
    return (
        <>
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
                <div className="relative z-10 flex flex-col items-center justify-center h-full">

                    <div className = {`flex items-center justify-center text-white text-[11px] font-extralight rounded-3xl px-1 py-1 border-1 border-[#0984E9] mb-10`}>
                        <p
                        className="mx-2">text AI by</p>
                        <p className = {`bg-[#0984E9] p-1 rounded-xl`}>Hugging Face</p>
                    </div>

                    <h1 className="text-6xl font-semibold mb-5
                    background-clip-text text-transparent bg-clip-text bg-gradient-to-r from-white to-[#BFE2FF]

                    before:content-['AI ApCard'] before:absolute before:text-red-400 before:-z-10 before:animate-text
                    ">AI ApCard</h1>

                    <p className = {`text-[#BFE2FF] font-thin text-center mb-10`}>
                        Transforme suas experiências em palavras de impacto. Gere cartas de apresentação profissionais com o poder da IA.
                    </p>

                    <div className={`flex items-center justify-center flex-col gap-4`}>
                        <button>teste</button>
                        <button>teste</button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}