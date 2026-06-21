'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    { q: "What's Sanvi's favorite color?", a: "Pink 💖" },
    { q: "What does Sanvi love most?", a: "Ice Cream 🍦" },
    { q: "Who is Sanvi's best friend?", a: "Manu ❤️" },
];

export default function QuizScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowAnswer(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(currentIndex + 1);
                setShowAnswer(false);
            }
        }, 4000);

        return () => clearTimeout(timer);
    }, [currentIndex, showAnswer]);

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center px-6 max-w-md w-full">
                <motion.h2
                    className="text-2xl font-dancing text-pink-600 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Fun Quiz 🤭
                </motion.h2>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="glass-card rounded-3xl p-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-4xl mb-4">{['🤔', '😄', '💭'][currentIndex]}</div>
                        <p className="text-lg text-gray-700 mb-4">{questions[currentIndex].q}</p>

                        <AnimatePresence>
                            {showAnswer && (
                                <motion.div
                                    className="text-2xl font-dancing text-pink-600"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    exit={{ scale: 0, rotate: 180 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {questions[currentIndex].a}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-center gap-2 mt-4">
                    {questions.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-pink-500' : 'bg-pink-200'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}