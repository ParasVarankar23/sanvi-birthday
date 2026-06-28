"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CountdownScreen() {
    const targetDate = new Date("2026-11-29T00:00:00").getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (difference % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            ),
            minutes: Math.floor(
                (difference % (1000 * 60 * 60)) /
                (1000 * 60)
            ),
            seconds: Math.floor(
                (difference % (1000 * 60)) / 1000
            ),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const cards = [
        { label: "Days", value: timeLeft.days, emoji: "📅" },
        { label: "Hours", value: timeLeft.hours, emoji: "⏰" },
        { label: "Minutes", value: timeLeft.minutes, emoji: "⏱️" },
        { label: "Seconds", value: timeLeft.seconds, emoji: "⚡" },
    ];

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
            <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-pink-300/20 blur-[100px] md:blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] rounded-full bg-purple-300/20 blur-[100px] md:blur-[140px]" />

            {/* Floating Stars */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute text-base md:text-xl"
                    style={{
                        left: particle.left,
                        top: particle.top,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                        duration: 5,
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
                max-w-[95%] sm:max-w-[90%] md:max-w-4xl lg:max-w-5xl
                rounded-[30px] sm:rounded-[40px] md:rounded-[50px]
                bg-white/20
                backdrop-blur-3xl
                border border-white/30
                shadow-[0_20px_100px_rgba(236,72,153,0.15)]
                mx-auto
                flex flex-col justify-center"
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Inner Content with proper padding - INCREASED PADDING */}
                <div className="
                    px-8 sm:px-10 md:px-14 lg:px-18 xl:px-22
                    py-12 sm:py-14 md:py-18 lg:py-22 xl:py-26
                    w-full
                ">
                    {/* Calendar Section */}
                    <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5">
                        {/* Animated Calendar Icon */}
                        <motion.div
                            className="relative"
                            animate={{
                                y: [-8, 8, -8],
                                rotate: [-5, 5, -5],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="text-7xl sm:text-8xl md:text-9xl">
                                📅
                            </div>
                            <div className="absolute inset-0 rounded-full bg-pink-300/20 blur-2xl -z-10 scale-150" />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-dancing text-pink-600 break-words text-center mt-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Countdown to 25 November 2026
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 text-center px-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Every second brings us closer to your special day ❤️
                        </motion.p>
                    </div>

                    {/* Decorative Divider */}
                    <motion.div
                        className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-pink-300" />
                        <span className="text-pink-400 text-sm sm:text-base">✦</span>
                        <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-pink-300" />
                    </motion.div>

                    {/* Countdown Cards Grid with INCREASED PADDING */}
                    <div className="
                        grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 
                        gap-5 sm:gap-6 md:gap-7 lg:gap-9 
                        mt-8 sm:mt-10 md:mt-12 lg:mt-16 
                        px-3 sm:px-4 md:px-5 lg:px-6
                    ">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.label}
                                className="
                                bg-white/25
                                backdrop-blur-xl
                                border border-white/30
                                rounded-2xl sm:rounded-3xl
                                p-6 sm:p-8 md:p-10
                                shadow-lg
                                min-h-[120px] sm:min-h-[140px] md:min-h-[160px]
                                flex flex-col items-center justify-center
                                transition-all duration-300
                                hover:shadow-xl
                                "
                                whileHover={{
                                    scale: 1.05,
                                    y: -10,
                                }}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: index * 0.15,
                                }}
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 md:mb-5">
                                    {card.emoji}
                                </div>

                                <motion.div
                                    key={card.value}
                                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pink-600"
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {String(card.value).padStart(2, "0")}
                                </motion.div>

                                <div className="mt-2 sm:mt-3 md:mt-4 text-gray-500 tracking-wide text-sm sm:text-base md:text-lg font-medium">
                                    {card.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Text */}
                    <motion.div
                        className="mt-8 sm:mt-12 md:mt-16 lg:mt-20"
                        animate={{
                            opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        <p className="text-pink-500 text-[8px] sm:text-[10px] md:text-xs lg:text-sm tracking-[3px] sm:tracking-[5px] md:tracking-[6px] lg:tracking-[8px] text-center px-4">
                            📅 TIME IS TICKING... DON'T MISS THE MAGIC ✨
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}