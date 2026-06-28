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
            className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-4 py-4 md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Background Glow */}
            <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-pink-300/20 rounded-full blur-[100px] md:blur-[140px]" />
            <div className="absolute right-0 bottom-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-purple-300/20 rounded-full blur-[100px] md:blur-[140px]" />

            {/* Sparkles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute text-base md:text-lg"
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
                    w-full
                    max-w-[95%] sm:max-w-[90%] md:max-w-4xl
                    rounded-[30px] sm:rounded-[35px] md:rounded-[40px]
                    bg-white/20
                    backdrop-blur-3xl
                    border border-white/30
                    shadow-[0_20px_80px_rgba(236,72,153,0.15)]
                    mx-auto
                    flex flex-col justify-center
                "
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Inner Content */}
                <div className="
                    px-6 sm:px-8 md:px-10 lg:px-12
                    py-10 sm:py-12 md:py-14 lg:py-16
                    w-full
                ">
                    {/* Heading */}
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="text-center"
                    >
                        <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-4">
                            💖
                        </div>

                        <h1 className="font-dancing text-4xl sm:text-5xl md:text-6xl text-pink-600 px-2">
                            You Are So Special
                        </h1>

                        <p className="mt-2 sm:mt-3 md:mt-4 text-gray-600 text-sm sm:text-base md:text-lg px-2">
                            A few reasons why you are truly amazing ✨
                        </p>
                    </motion.div>

                    {/* Quality Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mt-8 sm:mt-10 md:mt-12 lg:mt-14">
                        {qualities.map((quality, index) => (
                            <motion.div
                                key={quality.text}
                                className="
                                    bg-white/25
                                    backdrop-blur-xl
                                    border border-white/30
                                    rounded-[20px] sm:rounded-[25px] md:rounded-[30px]
                                    py-6 sm:py-8 md:py-10
                                    px-3 sm:px-4 md:px-5
                                    shadow-lg
                                    hover:shadow-xl
                                    transition-all duration-300
                                    cursor-pointer
                                    flex flex-col items-center justify-center
                                    min-h-[100px] sm:min-h-[120px] md:min-h-[140px]
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
                                    className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4 md:mb-5"
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

                                <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-pink-600 text-center">
                                    {quality.text}
                                </h3>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Quote */}
                    <motion.div
                        className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 text-center"
                        animate={{
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        <p className="font-dancing text-2xl sm:text-3xl md:text-3xl text-pink-500 px-4">
                            "You're one of a kind ❤️"
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}