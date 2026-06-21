'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const photos = [
    { id: 1, emoji: '😄', caption: 'Our endless laughter ❤️', color: 'from-pink-200 to-pink-100' },
    { id: 2, emoji: '🤪', caption: 'Crazy memories ✨', color: 'from-purple-200 to-pink-100' },
    { id: 3, emoji: '🥰', caption: 'Beautiful moments 🌸', color: 'from-pink-100 to-purple-200' },
];

export default function PhotoStoryScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % photos.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    className="text-center px-6 max-w-md"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className={`w-64 h-64 mx-auto rounded-3xl bg-gradient-to-br ${photos[currentIndex].color} shadow-2xl flex items-center justify-center mb-6`}
                        initial={{ rotate: -10 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-8xl">{photos[currentIndex].emoji}</span>
                    </motion.div>

                    <motion.p
                        className="text-2xl font-dancing text-pink-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        {photos[currentIndex].caption}
                    </motion.p>

                    <div className="flex justify-center gap-2 mt-4">
                        {photos.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-pink-500' : 'bg-pink-200'
                                    }`}
                                animate={{ scale: index === currentIndex ? 1.5 : 1 }}
                            />
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}