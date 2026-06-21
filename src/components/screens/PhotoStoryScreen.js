"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const photos = [
    {
        id: 1,
        image: "/images/photo1.jpeg",
        caption: "Our endless laughter ❤️",
    },
    {
        id: 2,
        image: "/images/photo2.jpeg",
        caption: "Crazy memories ✨",
    },
    {
        id: 3,
        image: "/images/photo3.jpeg",
        caption: "Beautiful moments 🌸",
    },
    {
        id: 4,
        image: "/images/photo4.jpeg",
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
        <div className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">

            {/* Background Glow */}
            <div className="absolute w-[400px] h-[400px] bg-pink-300/20 blur-[140px] rounded-full"></div>
            <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-purple-300/20 blur-[140px] rounded-full"></div>

            {/* Floating Sparkles */}
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
                        duration: 4,
                        delay: particle.delay,
                        repeat: Infinity,
                    }}
                >
                    ✨
                </motion.div>
            ))}

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    className="text-center px-6"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Heading */}
                    <motion.h1
                        className="text-5xl md:text-6xl font-dancing text-pink-600 mb-10"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                    >
                        Beautiful Memories 💖
                    </motion.h1>

                    {/* Image Card */}
                    <motion.div
                        className="relative w-80 md:w-[380px] h-[480px] mx-auto rounded-[40px] overflow-hidden border-4 border-white shadow-[0_20px_80px_rgba(236,72,153,0.2)]"
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

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                        {/* Caption */}
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 p-8"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <p className="text-white text-3xl font-dancing drop-shadow-lg">
                                {photos[currentIndex].caption}
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Progress Dots */}
                    <div className="flex justify-center gap-3 mt-8">
                        {photos.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`rounded-full ${index === currentIndex
                                    ? "bg-pink-500 w-10 h-3"
                                    : "bg-pink-200 w-3 h-3"
                                    }`}
                                animate={{
                                    scale: index === currentIndex ? 1.2 : 1,
                                }}
                            />
                        ))}
                    </div>

                    {/* Bottom Message */}
                    <motion.p
                        className="mt-8 text-pink-500 tracking-[8px] text-sm"
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
    );
}