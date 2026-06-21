'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

export default function CakeScreen() {
    const [showConfetti, setShowConfetti] = useState(false);
    const [candlesLit, setCandlesLit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCandlesLit(true);
            setShowConfetti(true);

            setTimeout(() => setShowConfetti(false), 5000);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50">
            {showConfetti && <Confetti colors={['#ff6b9d', '#c084fc', '#f472b6', '#a78bfa']} />}

            <motion.div
                className="text-center px-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
            >
                <div className="relative inline-block">
                    <motion.div
                        className="text-8xl"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        🎂
                    </motion.div>

                    {/* Candles */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-1">
                        {[0, 1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="w-2 h-6 bg-gradient-to-t from-yellow-200 to-yellow-400 rounded-t"
                                animate={candlesLit ? {
                                    scaleY: [1, 1.2, 1],
                                    boxShadow: ['0 0 0px #fbbf24', '0 0 20px #fbbf24', '0 0 0px #fbbf24']
                                } : {}}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                        ))}
                    </div>
                </div>

                <motion.h2
                    className="text-3xl font-dancing text-pink-600 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Happy Birthday! 🎉
                </motion.h2>

                <motion.p
                    className="text-gray-500 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Make a wish! ✨
                </motion.p>
            </motion.div>
        </div>
    );
}