"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const photos = [
    {
        id: 1,
        image: "/images/pic1.avif",
        caption: "Our endless laughter ❤️",
    },
    {
        id: 2,
        image: "/images/pic2.avif",
        caption: "Crazy memories ✨",
    },
    {
        id: 3,
        image: "/images/pic3.jpeg",
        caption: "Beautiful moments 🌸",
    },
    {
        id: 4,
        image: "/images/pic4.jpeg",
        caption: "Forever Special 💖",
    },
];

export default function PhotoStoryScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % photos.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

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
            <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-pink-300/20 blur-[100px] md:blur-[140px] rounded-full" />
            <div className="absolute right-0 bottom-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-purple-300/20 blur-[100px] md:blur-[140px] rounded-full" />

            {/* Floating Sparkles */}
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
                    max-w-[95%] sm:max-w-[90%] md:max-w-2xl lg:max-w-3xl
                    rounded-[30px] sm:rounded-[40px] md:rounded-[50px]
                    bg-white/20
                    backdrop-blur-3xl
                    border border-white/30
                    shadow-[0_20px_100px_rgba(236,72,153,0.15)]
                    mx-auto
                    flex items-center justify-center
                "
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Inner Content with proper padding - CENTERED */}
                <div className="
                    px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14
                    py-10 sm:py-12 md:py-14 lg:py-16 xl:py-18
                    w-full
                    flex flex-col items-center justify-center
                ">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            className="w-full flex flex-col items-center justify-center"
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.7 }}
                        >
                            {/* Heading - CENTERED */}
                            <motion.h1
                                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dancing text-pink-600 text-center mb-6 sm:mb-8 md:mb-10"
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                            >
                                Beautiful Memories 💖
                            </motion.h1>

                            {/* Image Card - CENTERED */}
                            <motion.div
                                className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] h-[380px] sm:h-[420px] md:h-[480px] mx-auto rounded-[30px] sm:rounded-[35px] md:rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_80px_rgba(236,72,153,0.2)]"
                                whileHover={{
                                    scale: 1.03,
                                }}
                            >
                                <Image
                                    src={photos[currentIndex].image}
                                    alt="Memory"
                                    fill
                                    priority
                                    className="object-cover"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Caption - CENTERED */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-center"
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                >
                                    <p className="text-white text-xl sm:text-2xl md:text-3xl font-dancing drop-shadow-lg text-center">
                                        {photos[currentIndex].caption}
                                    </p>
                                </motion.div>
                            </motion.div>

                            {/* Progress Dots - CENTERED */}
                            <div className="flex justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-7 md:mt-8">
                                {photos.map((_, index) => (
                                    <motion.button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`rounded-full transition-all duration-300 ${index === currentIndex
                                                ? "bg-pink-500 w-8 sm:w-10 h-2.5 sm:h-3"
                                                : "bg-pink-200 w-2.5 sm:w-3 h-2.5 sm:h-3 hover:bg-pink-300"
                                            }`}
                                        animate={{
                                            scale: index === currentIndex ? 1.2 : 1,
                                        }}
                                        whileHover={{
                                            scale: 1.2,
                                        }}
                                    />
                                ))}
                            </div>

                            {/* Navigation Arrows - CENTERED */}
                            <div className="flex justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-5">
                                <motion.button
                                    onClick={() => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)}
                                    className="text-pink-400 hover:text-pink-600 text-2xl sm:text-3xl transition-colors"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    ◀
                                </motion.button>
                                <motion.button
                                    onClick={() => setCurrentIndex((prev) => (prev + 1) % photos.length)}
                                    className="text-pink-400 hover:text-pink-600 text-2xl sm:text-3xl transition-colors"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    ▶
                                </motion.button>
                            </div>

                            {/* Bottom Message - CENTERED */}
                            <motion.p
                                className="mt-6 sm:mt-7 md:mt-8 text-pink-500 text-[8px] sm:text-[10px] md:text-xs lg:text-sm tracking-[3px] sm:tracking-[5px] md:tracking-[6px] lg:tracking-[8px] text-center"
                                animate={{
                                    opacity: [0.3, 1, 0.3],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                            >
                                ❤️ MEMORIES LAST FOREVER ❤️
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.div>
    );
}