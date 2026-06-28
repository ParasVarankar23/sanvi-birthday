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
            className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-4 py-4 md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Background Glow */}
            <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-pink-300/30 rounded-full blur-[100px] md:blur-[140px]" />
            <div className="absolute right-0 bottom-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-purple-300/30 rounded-full blur-[100px] md:blur-[140px]" />

            {/* Floating Stars */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute text-base md:text-lg"
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
                w-full
                max-w-[95%] sm:max-w-[90%] md:max-w-2xl lg:max-w-3xl
                rounded-[30px] md:rounded-[40px]
                px-6 sm:px-8 md:px-12 lg:px-16
                py-10 sm:py-12 md:py-14
                bg-white/25
                backdrop-blur-2xl
                border border-white/30
                shadow-[0_20px_80px_rgba(236,72,153,0.18)]
                text-center
                mx-auto
                min-h-[400px] sm:min-h-[450px] md:min-h-auto
                flex flex-col justify-center"
            >
                {/* Flower */}
                <motion.div
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
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
                    className="mt-2 sm:mt-3 uppercase tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-pink-400 text-xs sm:text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Welcome
                </motion.p>

                {/* Name */}
                <motion.h1
                    className="
                    mt-4 sm:mt-5
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                    font-bold
                    bg-gradient-to-r
                    from-pink-600
                    via-rose-500
                    to-purple-600
                    bg-clip-text
                    text-transparent
                    break-words"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Hello Kavya 👋
                </motion.h1>

                {/* Divider */}
                <motion.div
                    className="h-1 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-4 sm:mt-5 md:mt-6"
                    initial={{ width: 0 }}
                    animate={{ width: 120 }}
                    transition={{ delay: 0.8 }}
                />

                {/* Text */}
                <motion.div
                    className="mt-6 sm:mt-8 md:mt-10 space-y-3 sm:space-y-4 md:space-y-5 text-gray-700 px-2 sm:px-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
                        This isn't just a website...
                    </p>

                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-pink-600"
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

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 px-2">
                        filled with love, happiness and unforgettable moments ❤️
                    </p>
                </motion.div>

                {/* Emojis */}
                <div className="flex justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 mt-6 sm:mt-8 md:mt-10 flex-wrap px-4">
                    {["💖", "✨", "🌸", "💕", "🎁"].map((emoji, i) => (
                        <motion.div
                            key={i}
                            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl"
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
                    className="mt-6 sm:mt-8 md:mt-10 text-[8px] sm:text-[10px] md:text-xs lg:text-sm tracking-[3px] sm:tracking-[4px] md:tracking-[5px] lg:tracking-[6px] text-pink-500 px-4"
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