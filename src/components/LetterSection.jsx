"use client";

import { motion } from "framer-motion";

export default function LetterSection() {
    return (
        <section className="py-24 px-6 bg-gradient-to-b from-pink-100 to-pink-200">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl rounded-[40px] shadow-2xl p-10 md:p-16"
            >
                <h2 className="text-5xl text-center font-bold text-pink-600 mb-10">
                    💌 A Letter For You
                </h2>

                <div className="text-gray-700 text-lg md:text-xl leading-10">
                    <p>Dear Sister ❤️,</p>

                    <p className="mt-8">
                        Happy 17th Birthday! 🎂🎉
                    </p>

                    <p className="mt-6">
                        Thank you for always bringing happiness, laughter, and love into our lives.
                        You are not only my sister but also my best friend and my greatest blessing.
                    </p>

                    <p className="mt-6">
                        May your life be filled with endless joy, success, good health, and beautiful memories.
                        May all your dreams come true and may you always keep smiling.
                    </p>

                    <p className="mt-6">
                        No matter how much time passes, you'll always be special to me.
                        Thank you for being the wonderful person that you are.
                    </p>

                    <p className="mt-8">
                        Wishing you a day full of love, laughter, cake, and happiness. 💖✨
                    </p>

                    <div className="mt-12 text-right">
                        <h3 className="text-3xl font-bold text-pink-600">
                            With Love ❤️
                        </h3>

                        <p className="text-xl text-pink-500 mt-2">
                            Your Brother,
                        </p>

                        <p className="text-2xl font-semibold text-pink-700">
                            Paras
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}