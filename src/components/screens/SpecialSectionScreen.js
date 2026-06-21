"use client";

import { motion } from "framer-motion";

const qualities = [
    { emoji: "❤️", text: "Caring" },
    { emoji: "🌸", text: "Beautiful" },
    { emoji: "✨", text: "Amazing" },
    { emoji: "😊", text: "Kind" },
    { emoji: "🌷", text: "Strong" },
    { emoji: "💖", text: "Lovely" },
];

export default function SpecialSectionScreen() {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: i * 0.2,
    }));

    return (
        <motion.div
            className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Glow */}
            <div className="absolute w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-[140px]" />
            <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-purple-300/20 rounded-full blur-[140px]" />

            {/* Sparkles */}
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
                        delay: particle.delay,
                        repeat: Infinity,
                    }}
                >
                    ✨
                </motion.div>
            ))}

            {/* Main Card */}
            <motion.div
                className="
          relative z-10
          w-full max-w-4xl
          rounded-[40px]
          bg-white/20
          backdrop-blur-3xl
          border border-white/30
          shadow-[0_20px_80px_rgba(236,72,153,0.15)]
          px-10 py-14
          text-center
        "
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
            >
                {/* Heading */}
                <motion.div
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                >
                    <div className="text-6xl mb-4">💖</div>

                    <h1 className="font-dancing text-6xl text-pink-600">
                        You Are So Special
                    </h1>

                    <p className="mt-4 text-gray-600 text-lg">
                        A few reasons why you are truly amazing ✨
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-14">
                    {qualities.map((quality, index) => (
                        <motion.div
                            key={quality.text}
                            className="
                bg-white/25
                backdrop-blur-xl
                border border-white/30
                rounded-[30px]
                py-10 px-5
                shadow-lg
              "
                            initial={{
                                opacity: 0,
                                scale: 0.7,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                delay: index * 0.15,
                            }}
                            whileHover={{
                                scale: 1.08,
                                y: -8,
                            }}
                        >
                            <motion.div
                                className="text-6xl mb-5"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                }}
                            >
                                {quality.emoji}
                            </motion.div>

                            <h3 className="text-2xl font-semibold text-pink-600">
                                {quality.text}
                            </h3>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom */}
                <motion.div
                    className="mt-14"
                    animate={{
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <p className="font-dancing text-3xl text-pink-500">
                        "You're one of a kind ❤️"
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}