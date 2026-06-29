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
                className="relative w-full max-w-[95%] sm:max-w-[90%] md:max-w-2xl h-[450px] sm:h-[500px] md:h-[600px] mx-auto"
            >
                {/* Envelope Bottom */}
                <div className="absolute bottom-0 w-full h-[160px] sm:h-[180px] md:h-[220px] bg-pink-300 rounded-[25px] sm:rounded-[30px] md:rounded-[40px] shadow-2xl" />

                {/* Heart Seal */}
                <motion.div
                    className="absolute left-1/2 bottom-[115px] sm:bottom-[135px] md:bottom-[170px] -translate-x-1/2 text-4xl sm:text-5xl md:text-6xl z-20"
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
                        h-[380px] sm:h-[410px] md:h-[460px]
                        bg-[#fffaf5]
                        rounded-[25px] sm:rounded-[30px] md:rounded-[35px]
                        border-[4px] sm:border-[6px] md:border-[8px]
                        border-pink-100
                        shadow-[0_20px_80px_rgba(0,0,0,.15)]
                        px-6 sm:px-8 md:px-10
                        py-5 sm:py-6 md:py-8
                        overflow-y-auto
                    "
                >
                    {/* Header */}
                    <div className="text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 md:mb-2">
                            💌
                        </div>

                        <h1 className="font-dancing text-2xl sm:text-3xl md:text-4xl text-pink-600 font-bold">
                            Dear Kavya ❤️
                        </h1>

                        <div className="w-20 sm:w-28 md:w-32 h-0.5 sm:h-1 bg-pink-300 rounded-full mx-auto mt-2 sm:mt-3 md:mt-3 mb-3 sm:mb-4 md:mb-5" />
                    </div>

                    {/* Letter Text - Reduced line height */}
                    <p className="font-dancing text-lg sm:text-xl md:text-2xl text-pink-500 leading-[28px] sm:leading-[32px] md:leading-[40px] whitespace-pre-wrap">
                        {displayText}

                        {!isComplete && (
                            <motion.span
                                className="inline-block w-[2px] sm:w-[3px] h-5 sm:h-6 md:h-7 bg-pink-500 ml-1"
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
                            className="mt-6 sm:mt-8 md:mt-10 text-right"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <p className="font-dancing text-xl sm:text-2xl md:text-3xl text-pink-400">
                                With Love,
                            </p>

                            <h2 className="font-dancing text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                                Paras ❤️
                            </h2>

                            <motion.div
                                className="text-2xl sm:text-3xl md:text-4xl mt-1 sm:mt-2 md:mt-3"
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
