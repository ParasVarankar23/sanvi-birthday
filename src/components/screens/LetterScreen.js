'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const letter = `Dear Sanvi,

On your special day, I want you to know how incredibly special you are to me. You've been a source of joy, laughter, and countless beautiful memories.

Your smile lights up the world, and your kindness touches everyone around you. These 17 years have been filled with wonderful moments that I'll cherish forever.

May your life be as beautiful as your heart, as bright as your smile, and as amazing as you are.

With all my love,
Paras ❤️`;

export default function LetterScreen() {
    const [displayText, setDisplayText] = useState('');
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

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="glass-card rounded-3xl p-6 max-w-md w-full mx-6 max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9, rotate: -2 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-4">
                    <span className="text-4xl">💌</span>
                </div>
                <div className="prose prose-pink">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap font-light">
                        {displayText}
                        {!isComplete && (
                            <motion.span
                                className="inline-block w-0.5 h-4 bg-pink-400 ml-0.5"
                                animate={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5, repeat: Infinity }}
                            />
                        )}
                    </p>
                </div>
                {isComplete && (
                    <motion.div
                        className="text-center mt-4 text-2xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        💕
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
}