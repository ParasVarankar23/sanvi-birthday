"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const questions = [
    {
        q: "What's Olivia's favorite color?",
        a: "Pink 💖",
        emoji: "🎀",
    },
    {
        q: "What does Olivia love most?",
        a: "Ice Cream 🍦",
        emoji: "🍨",
    },
    {
        q: "Who is Olivia's best friend?",
        a: "Nicky ❤️",
        emoji: "💕",
    },
];

export default function QuizScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        const answerTimer = setTimeout(() => {
            setShowAnswer(true);
        }, 2000);

        return () => clearTimeout(answerTimer);
    }, [currentIndex]);

    useEffect(() => {
        const questionTimer = setTimeout(() => {
            if (showAnswer) {
                if (currentIndex < questions.length - 1) {
                    setCurrentIndex((prev) => prev + 1);
                    setShowAnswer(false);
                }
            }
        }, 4000);

        return () => clearTimeout(questionTimer);
    }, [currentIndex, showAnswer]);

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
            <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-pink-300/20 rounded-full blur-[100px] md:blur-[140px]" />
            <div className="absolute right-0 bottom-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-purple-300/20 rounded-full blur-[100px] md:blur-[140px]" />

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

            {/* Main Card */}
            <motion.div
                className="
                    relative z-10
                    w-full
                    max-w-[95%] sm:max-w-[90%] md:max-w-3xl
                    rounded-[30px] sm:rounded-[35px] md:rounded-[40px]
                    bg-white/20
                    backdrop-blur-3xl
                    border border-white/30
                    shadow-[0_20px_80px_rgba(236,72,153,0.15)]
                    mx-auto
                    flex flex-col justify-center
                "
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Inner Content */}
                <div className="
                    px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
                    py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16
                    w-full
                ">
                    {/* Title */}
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dancing text-pink-600 text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                    >
                        Fun Quiz 🤭
                    </motion.h1>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -40 }}
                            transition={{ duration: 0.5 }}
                            className="
                                bg-white/25
                                backdrop-blur-xl
                                rounded-[20px] sm:rounded-[25px] md:rounded-[30px] lg:rounded-[35px]
                                border border-white/30
                                shadow-lg
                                px-4 sm:px-6 md:px-8 lg:px-10
                                py-6 sm:py-8 md:py-10 lg:py-12
                            "
                        >
                            {/* Top Emoji */}
                            <motion.div
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center mb-3 sm:mb-4 md:mb-6 lg:mb-8"
                                animate={{
                                    scale: [1, 1.15, 1],
                                    rotate: [-5, 5, -5],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                {questions[currentIndex].emoji}
                            </motion.div>

                            {/* Question */}
                            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 leading-relaxed text-center px-2">
                                {questions[currentIndex].q}
                            </h2>

                            {/* Answer */}
                            <AnimatePresence>
                                {showAnswer && (
                                    <motion.div
                                        className="mt-4 sm:mt-6 md:mt-8 lg:mt-10"
                                        initial={{
                                            scale: 0,
                                            opacity: 0,
                                            rotate: -180,
                                        }}
                                        animate={{
                                            scale: 1,
                                            opacity: 1,
                                            rotate: 0,
                                        }}
                                        exit={{
                                            scale: 0,
                                            opacity: 0,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                        }}
                                    >
                                        <div className="text-3xl sm:text-4xl md:text-5xl text-center mb-2 sm:mb-3 md:mb-4">
                                            💖
                                        </div>

                                        <p className="font-dancing text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-pink-600 text-center">
                                            {questions[currentIndex].a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                        {questions.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "w-6 sm:w-8 md:w-10 h-2 sm:h-2.5 md:h-3 bg-pink-500"
                                        : "w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-pink-200"
                                    }`}
                                animate={{
                                    scale: index === currentIndex ? 1.2 : 1,
                                }}
                            />
                        ))}
                    </div>

                    {/* Bottom Quote */}
                    <motion.div
                        className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12"
                        animate={{
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        <p className="font-dancing text-lg sm:text-xl md:text-2xl lg:text-3xl text-pink-500 text-center px-2 sm:px-4">
                            "Every answer brings a smile ❤️"
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}