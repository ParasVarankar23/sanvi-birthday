"use client";

import { motion } from "framer-motion";

export default function HeroScreen() {
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
            <div className="absolute w-[400px] h-[400px] bg-pink-300/30 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-300/30 blur-[150px] rounded-full" />

            {/* Floating Stars */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute text-xl"
                    style={{
                        left: particle.left,
                        top: particle.top,
                    }}
                    animate={{
                        y: [0, -20, 0],
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

            {/* Main Card */}
            <motion.div
                className="
        relative
        z-10
        w-full
        max-w-2xl
        rounded-[40px]
        px-10
        py-14
        bg-white/20
        backdrop-blur-2xl
        border border-white/30
        shadow-[0_20px_80px_rgba(236,72,153,0.15)]
        text-center"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Profile */}
                <motion.div
                    className="relative mx-auto w-fit"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                    }}
                >
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full bg-pink-300 blur-3xl opacity-40" />

                    {/* Ring */}
                    <motion.div
                        className="w-48 h-48 rounded-full border-4 border-pink-300 p-2 shadow-2xl"
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center text-8xl">
                            🌸
                        </div>
                    </motion.div>

                    {/* Heart */}
                    <motion.div
                        className="absolute -bottom-2 -right-2 text-5xl"
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                    >
                        💖
                    </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="
          mt-10
          text-5xl md:text-7xl
          font-dancing
          bg-gradient-to-r
          from-pink-600
          via-rose-500
          to-purple-600
          bg-clip-text
          text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Happy Birthday Sanvi ❤️
                </motion.h1>

                {/* Date */}
                <motion.p
                    className="mt-5 text-xl text-gray-600 tracking-wide"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    ✨ 25 June 2009 • Forever Special ✨
                </motion.p>

                {/* Quote */}
                <motion.p
                    className="mt-8 text-lg md:text-xl italic text-pink-500"
                    animate={{
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    "A beautiful soul deserves a beautiful celebration."
                </motion.p>

                {/* Emojis */}
                <div className="flex justify-center gap-8 mt-10 flex-wrap">
                    {["🎂", "🎈", "🎁", "🎉", "💐"].map((emoji, i) => (
                        <motion.div
                            key={i}
                            className="text-5xl"
                            animate={{
                                y: [0, -15, 0],
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

                {/* Bottom Text */}
                <motion.p
                    className="mt-12 text-sm tracking-[8px] text-pink-500"
                    animate={{
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    ❤️ MADE WITH LOVE ❤️
                </motion.p>
            </motion.div>
        </motion.div>
    );
}