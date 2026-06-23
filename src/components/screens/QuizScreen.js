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
            className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Glow */}
            <div className="absolute w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-[140px]" />
            <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-purple-300/20 rounded-full blur-[140px]" />

            {/* Sparkles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute text-xl"
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
          w-full max-w-3xl
          rounded-[40px]
          bg-white/20
          backdrop-blur-3xl
          border border-white/30
          shadow-[0_20px_80px_rgba(236,72,153,0.15)]
          px-10 py-14
          text-center
        "
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
            >
                {/* Title */}
                <motion.h1
                    className="font-dancing text-6xl text-pink-600 mb-12"
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
              rounded-[35px]
              border border-white/30
              shadow-lg
              px-10 py-12
            "
                    >
                        {/* Top Emoji */}
                        <motion.div
                            className="text-8xl mb-8"
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
                        <h2 className="text-3xl font-semibold text-gray-700 leading-relaxed">
                            {questions[currentIndex].q}
                        </h2>

                        {/* Answer */}
                        <AnimatePresence>
                            {showAnswer && (
                                <motion.div
                                    className="mt-10"
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
                                    <div className="text-5xl mb-4">
                                        💖
                                    </div>

                                    <p className="font-dancing text-5xl text-pink-600">
                                        {questions[currentIndex].a}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>

                {/* Progress Dots */}
                <div className="flex justify-center gap-4 mt-10">
                    {questions.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-full transition-all ${index === currentIndex
                                ? "w-10 h-3 bg-pink-500"
                                : "w-3 h-3 bg-pink-200"
                                }`}
                            animate={{
                                scale: index === currentIndex ? 1.2 : 1,
                            }}
                        />
                    ))}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    className="mt-12"
                    animate={{
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <p className="font-dancing text-3xl text-pink-500">
                        "Every answer brings a smile ❤️"
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}