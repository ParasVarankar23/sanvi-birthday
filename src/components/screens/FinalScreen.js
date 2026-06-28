'use client';
/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import FloatingHearts from '../ui/FloatingHearts';

export default function FinalScreen({ onReadAgain }) {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-linear-to-br from-pink-50 via-white to-purple-50">
            <Confetti
                width={windowSize.width}
                height={windowSize.height}
                colors={['#ff6b9d', '#c084fc', '#f472b6', '#a78bfa', '#fb923c', '#fbbf24']}
                numberOfPieces={100}
                recycle={true}
            />
            <FloatingHearts />

            <motion.div
                className="text-center px-6 max-w-md"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
            >
                <motion.div
                    className="text-7xl mb-6"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    🎉
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl font-dancing text-pink-600 mb-4"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    Happy Birthday Kavya ❤️
                </motion.h1>

                <motion.div
                    className="space-y-2 text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <p className="text-xl font-dancing text-pink-500">Brother & Sister</p>
                    <p className="text-lg">Friends Forever ♾️</p>
                    <p className="text-gray-500">Thank you for all the memories ❤️</p>
                </motion.div>

                <motion.div
                    className="mt-8 text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    Made with ❤️ by Paras
                </motion.div>

                <motion.div
                    className="mt-4 flex justify-center gap-3 text-2xl"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    {['💖', '✨', '🌸', '💕', '🌟', '🌺']}
                </motion.div>

                <motion.button
                    type="button"
                    onClick={onReadAgain}
                    className="
        inline-flex 
        items-center 
        justify-center 
        rounded-full 
        bg-pink-500 
        px-6 sm:px-8 md:px-10 
        py-3 sm:py-3.5 md:py-4 
        text-sm sm:text-base md:text-lg 
        font-semibold 
        text-white 
        shadow-lg shadow-pink-200 
        transition-all 
        hover:bg-pink-600 
        hover:shadow-xl 
        hover:shadow-pink-300
        active:scale-95
        min-w-[140px] sm:min-w-[160px] md:min-w-[180px]
        min-h-[48px] sm:min-h-[54px] md:min-h-[60px]
        w-auto
        cursor-pointer
        select-none
        focus:outline-none
        focus:ring-2
        focus:ring-pink-400
        focus:ring-offset-2
    "
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Read Again
                </motion.button>
            </motion.div>
        </div>
    );
}