"use client";

import { motion } from "framer-motion";

const memories = [
    { year: "2000", text: "Born 🎂", emoji: "👶" },
    { year: "2005", text: "Beautiful Childhood", emoji: "🧒" },
    { year: "2016", text: "School Memories", emoji: "📚" },
    { year: "2021", text: "Special Moments", emoji: "💫" },
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
            className="fixed inset-0 overflow-y-auto bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center px-4 py-4 md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Floating stars */}
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
                        repeat: Infinity,
                        delay: particle.delay,
                    }}
                >
                    ✨
                </motion.div>
            ))}

            {/* Main Card - Centered Vertically and Horizontally */}
            <motion.div
                className="
                    relative z-10
                    w-full
                    max-w-[95%] sm:max-w-[90%] md:max-w-3xl lg:max-w-4xl
                    rounded-[30px] sm:rounded-[40px] md:rounded-[50px]
                    bg-white/20
                    backdrop-blur-3xl
                    border border-white/30
                    shadow-[0_20px_100px_rgba(236,72,153,0.15)]
                    mx-auto
                    my-4 sm:my-6 md:my-8
                "
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Inner Content */}
                <div className="
                    px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14
                    py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18
                    w-full
                ">
                    {/* Title Section */}
                    <motion.div
                        className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent px-2">
                            Our Memory Timeline ❤️
                        </h1>

                        <p className="mt-2 sm:mt-3 md:mt-4 text-gray-600 text-sm sm:text-base md:text-lg px-2">
                            Every year brought beautiful memories ✨
                        </p>
                    </motion.div>

                    {/* Timeline - Mobile First Design */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-[18px] sm:left-[22px] md:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full md:-translate-x-1/2" />

                        <div className="space-y-6 sm:space-y-8 md:space-y-10 relative">
                            {memories.map((memory, index) => (
                                <motion.div
                                    key={memory.year}
                                    className={`
                                        flex items-start
                                        ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                                        flex-row
                                        relative
                                        pl-12 sm:pl-14 md:pl-0
                                    `}
                                    initial={{
                                        opacity: 0,
                                        x: -30,
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
                                    {/* Timeline Circle */}
                                    <div className={`
                                        absolute left-[10px] sm:left-[14px] 
                                        md:left-1/2 
                                        top-1/2 -translate-y-1/2 
                                        md:-translate-x-1/2
                                        w-4 h-4 sm:w-5 sm:h-5 
                                        rounded-full bg-pink-500 
                                        shadow-[0_0_20px_rgba(236,72,153,0.6)]
                                        z-10
                                        border-2 border-white
                                    `} />

                                    {/* Card Container */}
                                    <div className={`
                                        w-full
                                        ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}
                                        md:w-1/2
                                    `}>
                                        <motion.div
                                            whileHover={{
                                                scale: 1.03,
                                                y: -5,
                                            }}
                                            className="
                                                bg-white/30
                                                backdrop-blur-2xl
                                                border border-white/40
                                                rounded-2xl sm:rounded-3xl
                                                p-4 sm:p-5 md:p-6
                                                shadow-[0_10px_40px_rgba(236,72,153,0.12)]
                                                hover:shadow-[0_20px_60px_rgba(236,72,153,0.25)]
                                                transition-all duration-300
                                                cursor-pointer
                                            "
                                        >
                                            <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
                                                {/* Emoji */}
                                                <div className={`
                                                    text-3xl sm:text-4xl md:text-5xl 
                                                    flex-shrink-0
                                                    ${index % 2 === 0 ? "md:order-1" : ""}
                                                `}>
                                                    {memory.emoji}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-600">
                                                        {memory.year}
                                                    </h3>

                                                    <p className="text-gray-700 mt-0.5 sm:mt-1 text-sm sm:text-base md:text-lg break-words">
                                                        {memory.text}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <motion.div
                        className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-14"
                        animate={{
                            opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        <p className="text-pink-500 text-[8px] sm:text-[10px] md:text-xs lg:text-sm tracking-[3px] sm:tracking-[5px] md:tracking-[6px] lg:tracking-[8px] px-4">
                            ❤️ BEAUTIFUL MEMORIES FOREVER ❤️
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}