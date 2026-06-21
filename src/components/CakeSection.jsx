"use client";

import { motion } from "framer-motion";

export default function CakeSection() {
    return (
        <section className="py-24 px-6 bg-pink-50 flex flex-col items-center">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold text-pink-600 mb-12"
            >
                🎂 Birthday Cake
            </motion.h2>

            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
            >
                {/* Candles */}
                <div className="flex justify-center gap-8 mb-2">
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-8 bg-pink-300 rounded"></div>
                        <div className="text-2xl animate-pulse">🔥</div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-4 h-8 bg-pink-300 rounded"></div>
                        <div className="text-2xl animate-pulse">🔥</div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-4 h-8 bg-pink-300 rounded"></div>
                        <div className="text-2xl animate-pulse">🔥</div>
                    </div>
                </div>

                {/* Top Layer */}
                <div className="w-56 h-20 bg-pink-300 rounded-3xl shadow-lg"></div>

                {/* Middle Layer */}
                <div className="w-72 h-24 bg-pink-400 rounded-3xl mt-2 shadow-lg"></div>

                {/* Bottom Layer */}
                <div className="w-96 h-28 bg-pink-500 rounded-3xl mt-2 shadow-xl"></div>
            </motion.div>

            <p className="text-pink-700 text-xl mt-10 text-center max-w-xl">
                Wishing you a day filled with happiness, laughter, and lots of cake! 🎉💖
            </p>
        </section>
    );
}