'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GiftBoxScreen() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center px-6">
                <motion.div
                    className="relative inline-block"
                    animate={isOpen ? { scale: 1.2 } : { scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="text-8xl relative">
                        {!isOpen ? '🎁' : '🎉'}
                        {isOpen && (
                            <>
                                <motion.span
                                    className="absolute -top-8 -right-8 text-4xl"
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    ✨
                                </motion.span>
                                <motion.span
                                    className="absolute -bottom-8 -left-8 text-4xl"
                                    initial={{ scale: 0, rotate: 180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    💫
                                </motion.span>
                                <motion.span
                                    className="absolute -top-8 -left-8 text-3xl"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    🌟
                                </motion.span>
                            </>
                        )}
                    </div>
                </motion.div>

                <motion.h2
                    className="text-2xl font-dancing text-pink-600 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    {isOpen ? "It's a Surprise! 🎊" : "A Special Gift for You 🎁"}
                </motion.h2>
            </div>
        </motion.div>
    );
}