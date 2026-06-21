"use client";

import { motion } from "framer-motion";

const qualities = [
    {
        emoji: "❤️",
        title: "Loving",
        desc: "You fill our lives with love and happiness.",
    },
    {
        emoji: "😊",
        title: "Kind",
        desc: "Your kindness makes everyone smile.",
    },
    {
        emoji: "🌸",
        title: "Beautiful",
        desc: "Beautiful inside and out.",
    },
    {
        emoji: "✨",
        title: "Amazing",
        desc: "You make every moment special.",
    },
    {
        emoji: "💖",
        title: "Caring",
        desc: "You always care for everyone around you.",
    },
    {
        emoji: "🌟",
        title: "Inspiring",
        desc: "Keep shining and following your dreams.",
    },
];

export default function SpecialCards() {
    return (
        <section className="py-24 px-6 bg-pink-50">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-5xl font-bold text-pink-600 mb-16"
            >
                ❤️ Why You're Special
            </motion.h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                {qualities.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100"
                    >
                        <div className="text-6xl mb-5">{item.emoji}</div>

                        <h3 className="text-3xl font-bold text-pink-600 mb-4">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 text-lg">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}