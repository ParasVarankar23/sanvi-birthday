"use client";

import { motion } from "framer-motion";

const memories = [
    { year: "2009", text: "Born 🌸", emoji: "👶" },
    { year: "2014", text: "Beautiful Childhood", emoji: "🧒" },
    { year: "2018", text: "School Memories", emoji: "📚" },
    { year: "2022", text: "Special Moments", emoji: "💫" },
    { year: "2026", text: "Happy Birthday ❤️", emoji: "🎉" },
];

export default function MemoryTimelineScreen() {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: i * 0.3,
    }));

    return (
        <motion.div
            className="fixed inset-0 overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Floating stars */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute text-lg"
                    style={{
                        left: particle.left,
                        top: particle.top,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                >
                    ✨
                </motion.div>
            ))}

            <div className="relative max-w-4xl w-full">

                {/* Title */}
                <motion.div
                    className="text-center mb-14"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                        Our Memory Timeline ❤️
                    </h1>

                    <p className="mt-4 text-gray-600 text-lg">
                        Every year brought beautiful memories ✨
                    </p>
                </motion.div>

                {/* Center Line */}
                <div className="absolute left-1/2 top-40 bottom-0 w-1 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full -translate-x-1/2" />

                <div className="space-y-10 relative">
                    {memories.map((memory, index) => (
                        <motion.div
                            key={memory.year}
                            className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"
                                }`}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -100 : 100,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                delay: index * 0.3,
                                duration: 0.8,
                            }}
                        >
                            <div className="relative w-[320px]">

                                {/* Circle */}
                                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-pink-500 shadow-[0_0_20px_#ec4899]" />

                                {/* Card */}
                                <motion.div
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    className="
                    bg-white/25
                    backdrop-blur-2xl
                    border border-white/30
                    rounded-3xl
                    p-6
                    shadow-[0_10px_40px_rgba(236,72,153,0.15)]
                  "
                                >
                                    <div className="flex items-center gap-5">

                                        <div className="text-5xl">
                                            {memory.emoji}
                                        </div>

                                        <div>
                                            <h3 className="text-2xl font-bold text-pink-600">
                                                {memory.year}
                                            </h3>

                                            <p className="text-gray-700 mt-1 text-lg">
                                                {memory.text}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Text */}
                <motion.div
                    className="text-center mt-14"
                    animate={{
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <p className="tracking-[8px] text-pink-500 text-sm">
                        ❤️ BEAUTIFUL MEMORIES FOREVER ❤️
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
}