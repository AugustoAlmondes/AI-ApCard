// import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import { motion } from 'motion/react'

export default function BotBalloon({ text, time, typing }: {
    text: string;
    time: string;
    typing?: boolean
}) {

    const response = text;
    const finishedRes = typing;

    return (
        <div className={`grid grid-cols-[auto_2fr] md:max-w-[50vw] mr-4`}>
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center"><RiRobot2Fill size={25} color="#0984E9" /></div>

            <div
                className={'relative bg-[#0984E9] text-md text-white pl-3 pr-5 py-4 rounded-xl ml-2 w-max max-w-[72vw] transition-transform duration-500'} >
                {
                    finishedRes ?
                        (
                            response.split('').map((char, index) => (
                                <motion.span
                                    className={`text-[#BFE2FF]`}
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.1, delay: (1 + index) / 150 }}
                                >
                                    {char}
                                </motion.span>
                            ))
                        ) :
                        (
                            <p className={`pl-2 flex gap-2 items-center`}>

                                {
                                    [0, 1, 2].map((num, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ y: 3 }}
                                            animate={{ y: -2 }}
                                            transition={{ duration: 0.5, delay: num * 0.1, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }}
                                        >
                                            <FaCircle size={6} />
                                        </motion.span>
                                    ))
                                }
                            </p>
                        )
                }

                <div className={`absolute bottom-[-23px] text-sm font-extralight left-2 opacity-30`}>{time}</div>
            </div>
        </div >
    );
}