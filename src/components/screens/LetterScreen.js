"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const letter = `On your special day, I want you to know how incredibly special you are to me.

You've been a source of joy, laughter, and countless beautiful memories.

Your smile lights up the world, and your kindness touches everyone around you.

May your life be as beautiful as your heart, as bright as your smile, and as amazing as you are.`;

export default function LetterScreen() {
    const [displayText, setDisplayText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            if (index < letter.length) {
                setDisplayText(letter.slice(0, index + 1));
                index++;
            } else {
                setIsComplete(true);
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: i * 0.2,
    }));

    return (
        <motion.div
            className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-4 py-4 md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Background Glow */}
            <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-pink-300/20 blur-[100px] md:blur-[140px] rounded-full" />
            <div className="absolute right-0 bottom-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-purple-300/20 blur-[100px] md:blur-[140px] rounded-full" />

            {/* Sparkles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute text-base md:text-xl"
                    style={{
                        left: particle.left,
                        top: particle.top,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        delay: particle.delay,
                        repeat: Infinity,
                    }}
                >
                    ✨
                </motion.div>
            ))}

            {/* Main Container */}
            <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-2xl h-[500px] sm:h-[550px] md:h-[650px] mx-auto"
            >
                {/* Envelope Bottom */}
                <div className="absolute bottom-0 w-full h-[180px] sm:h-[200px] md:h-[250px] bg-pink-300 rounded-[25px] sm:rounded-[30px] md:rounded-[40px] shadow-2xl" />

                {/* Heart Seal */}
                <motion.div
                    className="absolute left-1/2 bottom-[130px] sm:bottom-[150px] md:bottom-[190px] -translate-x-1/2 text-4xl sm:text-5xl md:text-6xl z-20"
                    animate={{
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                    }}
                >
                    ❤️
                </motion.div>

                {/* Letter */}
                <motion.div
                    initial={{ y: 150 }}
                    animate={{ y: -30 }}
                    transition={{
                        duration: 1.3,
                    }}
                    className="
                        absolute left-1/2 -translate-x-1/2
                        w-[92%] sm:w-[95%] md:w-[600px]
                        h-[420px] sm:h-[450px] md:h-[500px]
                        bg-[#fffaf5]
                        rounded-[25px] sm:rounded-[30px] md:rounded-[35px]
                        border-[4px] sm:border-[6px] md:border-[8px]
                        border-pink-100
                        shadow-[0_20px_80px_rgba(0,0,0,.15)]
                        px-6 sm:px-8 md:px-12
                        py-6 sm:py-8 md:py-10
                        overflow-y-auto
                    "
                >
                    {/* Header */}
                    <div className="text-center">
                        <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 md:mb-3">
                            💌
                        </div>

                        <h1 className="font-dancing text-3xl sm:text-4xl md:text-5xl text-pink-600 font-bold">
                            Dear Olivia ❤️
                        </h1>

                        <div className="w-24 sm:w-32 md:w-40 h-0.5 sm:h-1 bg-pink-300 rounded-full mx-auto mt-3 sm:mt-4 md:mt-4 mb-4 sm:mb-6 md:mb-8" />
                    </div>

                    {/* Letter Text */}
                    <p className="font-dancing text-xl sm:text-2xl md:text-3xl text-pink-500 leading-[40px] sm:leading-[48px] md:leading-[58px] whitespace-pre-wrap">
                        {displayText}

                        {!isComplete && (
                            <motion.span
                                className="inline-block w-[2px] sm:w-[3px] h-6 sm:h-7 md:h-8 bg-pink-500 ml-1"
                                animate={{
                                    opacity: [0, 1],
                                }}
                                transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                }}
                            />
                        )}
                    </p>

                    {/* Signature */}
                    {isComplete && (
                        <motion.div
                            className="mt-8 sm:mt-10 md:mt-14 text-right"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <p className="font-dancing text-2xl sm:text-3xl md:text-4xl text-pink-400">
                                With Love,
                            </p>

                            <h2 className="font-dancing text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                                Paras ❤️
                            </h2>

                            <motion.div
                                className="text-3xl sm:text-4xl md:text-4xl mt-2 sm:mt-3 md:mt-4"
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                }}
                            >
                                💕
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}