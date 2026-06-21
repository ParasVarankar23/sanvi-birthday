"use client";

import { motion } from "framer-motion";

export default function WelcomeScreen() {
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
            {/* Background Glow */}
            <div className="absolute w-[400px] h-[400px] bg-pink-300/30 rounded-full blur-[140px]" />
            <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-purple-300/30 rounded-full blur-[140px]" />

            {/* Floating Stars */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute text-lg"
                    style={{
                        left: particle.left,
                        top: particle.top,
                    }}
                    animate={{
                        y: [0, -15, 0],
                        opacity: [0.3, 1, 0.3],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                >
                    ✨
                </motion.div>
            ))}

            {/* Card */}
            <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
                relative z-10
                w-full max-w-3xl
                rounded-[40px]
                px-8 md:px-16
                py-14
                bg-white/25
                backdrop-blur-2xl
                border border-white/30
                shadow-[0_20px_80px_rgba(236,72,153,0.18)]
                text-center"
            >
                {/* Flower */}
                <motion.div
                    className="text-7xl md:text-8xl"
                    animate={{
                        y: [-10, 10, -10],
                        rotate: [-5, 5, -5],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                    }}
                >
                    🌸
                </motion.div>

                {/* Welcome */}
                <motion.p
                    className="mt-3 uppercase tracking-[8px] text-pink-400 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Welcome
                </motion.p>

                {/* Name */}
                <motion.h1
                    className="
                    mt-5
                    text-5xl md:text-7xl
                    font-bold
                    bg-gradient-to-r
                    from-pink-600
                    via-rose-500
                    to-purple-600
                    bg-clip-text
                    text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Hello Sanvi 👋
                </motion.h1>

                {/* Divider */}
                <motion.div
                    className="h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-6"
                    initial={{ width: 0 }}
                    animate={{ width: 180 }}
                    transition={{ delay: 0.8 }}
                />

                {/* Text */}
                <motion.div
                    className="mt-10 space-y-5 text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p className="text-xl md:text-2xl">
                        This isn't just a website...
                    </p>

                    <motion.p
                        className="text-2xl md:text-3xl italic text-pink-600"
                        animate={{
                            opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        It's a collection of memories ✨
                    </motion.p>

                    <p className="text-lg md:text-xl leading-8">
                        filled with love, happiness and unforgettable moments ❤️
                    </p>
                </motion.div>

                {/* Emojis */}
                <div className="flex justify-center gap-7 mt-10 flex-wrap">
                    {["💖", "✨", "🌸", "💕", "🎁"].map((emoji, i) => (
                        <motion.div
                            key={i}
                            className="text-3xl"
                            animate={{
                                y: [0, -12, 0],
                                rotate: [-10, 10, -10],
                            }}
                            transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity,
                            }}
                        >
                            {emoji}
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Message */}
                <motion.p
                    className="mt-10 text-xs md:text-sm tracking-[6px] text-pink-500"
                    animate={{
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    ✨ A BEAUTIFUL SURPRISE AWAITS YOU ✨
                </motion.p>
            </motion.div>
        </motion.div>
    );
}