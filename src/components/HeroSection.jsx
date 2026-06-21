"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 flex items-center justify-center px-6">
            {/* Floating Hearts */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 text-pink-400 text-4xl animate-bounce">
                    ❤️
                </div>
                <div className="absolute top-40 right-20 text-pink-500 text-3xl animate-pulse">
                    💖
                </div>
                <div className="absolute bottom-32 left-20 text-pink-300 text-5xl animate-bounce">
                    💕
                </div>
                <div className="absolute bottom-20 right-10 text-pink-400 text-4xl animate-pulse">
                    💗
                </div>
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center z-10"
            >
                {/* Birthday Badge */}
                <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md px-5 py-2 rounded-full shadow-lg mb-8">
                    <Heart className="text-pink-500 w-5 h-5 fill-pink-500" />
                    <span className="text-pink-700 font-medium">
                        25 June 2009 • 25 June 2026
                    </span>
                </div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-extrabold text-pink-600"
                >
                    Happy Birthday
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-4xl md:text-6xl font-bold text-pink-800 mt-4"
                >
                    My Dear Sister ❤️
                </motion.h2>

                {/* Message */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-lg md:text-2xl text-pink-700 max-w-3xl mx-auto leading-relaxed"
                >
                    To the most beautiful soul and the best sister in the world,
                    thank you for filling our lives with happiness and love.
                    Wishing you endless joy, success, and all your dreams come true.
                    ✨🎂🎉
                </motion.p>

                {/* Age */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="mt-10"
                >
                    <div className="inline-block bg-white/40 backdrop-blur-xl rounded-3xl px-10 py-6 shadow-2xl">
                        <h3 className="text-6xl font-bold text-pink-600">17</h3>
                        <p className="text-pink-700 text-lg mt-2">
                            Years of Love & Happiness 🎀
                        </p>
                    </div>
                </motion.div>

                {/* Scroll Down */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="mt-16"
                >
                    <p className="text-pink-700 text-lg animate-bounce">
                        Scroll Down ↓
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}