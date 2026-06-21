"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GiftBox() {
    const [opened, setOpened] = useState(false);

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-pink-100 to-pink-200">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-pink-600 mb-12"
                >
                    🎁 A Special Surprise
                </motion.h2>

                {!opened && (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                        onClick={() => setOpened(true)}
                    >
                        <div className="text-9xl">🎁</div>

                        <p className="mt-6 text-2xl text-pink-700 font-semibold">
                            Click the Gift Box
                        </p>
                    </motion.div>
                )}

                <AnimatePresence>
                    {opened && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white/70 backdrop-blur-lg rounded-[40px] shadow-2xl p-12"
                        >
                            <div className="text-7xl mb-6">🎉🎂💖</div>

                            <h1 className="text-5xl font-bold text-pink-600 mb-8">
                                Happy 17th Birthday ❤️
                            </h1>

                            <p className="text-xl text-gray-700 leading-9">
                                Dear Sister,
                                <br />
                                You are the greatest gift in our family.
                                <br />
                                May your life always be filled with happiness,
                                success, laughter, and endless love.
                                <br />
                                Thank you for being so special.
                            </p>

                            <div className="mt-10 text-3xl text-pink-500">
                                With Love ❤️
                                <br />
                                <span className="font-bold">Paras</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}