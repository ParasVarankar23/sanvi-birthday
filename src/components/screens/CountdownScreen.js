"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownScreen() {
    const targetDate = new Date("2026-06-25T00:00:00").getTime();

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
            className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-4 md:px-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Background Glow */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-pink-300/20 blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-purple-300/20 blur-[140px]" />

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
    w-full max-w-5xl
    min-h-[450px]
    rounded-[50px]
    bg-white/20
    backdrop-blur-3xl
    border border-white/30
    shadow-[0_20px_100px_rgba(236,72,153,0.15)]
    px-8 md:px-16
    py-20
    flex flex-col justify-center
    text-center
  "
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Title */}
                <motion.h1
                    className="text-5xl md:text-7xl font-dancing text-pink-600"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Countdown to 25 June 2026 ⏳
                </motion.h1>

                <motion.p
                    className="mt-5 text-lg md:text-xl text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    Every second brings us closer to your special day ❤️
                </motion.p>

                {/* Countdown Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.label}
                            className="
          bg-white/25
          backdrop-blur-xl
          border border-white/30
          rounded-3xl
          p-10
          shadow-lg
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
                            <div className="text-5xl mb-5">
                                {card.emoji}
                            </div>

                            <motion.div
                                key={card.value}
                                className="text-6xl font-bold text-pink-600"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                            >
                                {String(card.value).padStart(2, "0")}
                            </motion.div>

                            <div className="mt-4 text-gray-500 tracking-wide text-lg">
                                {card.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Text */}
                <motion.div
                    className="mt-20"
                    animate={{
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <p className="text-pink-500 text-sm tracking-[8px]">
                        ✨ TIME IS TICKING... DON'T MISS THE MAGIC ✨
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}