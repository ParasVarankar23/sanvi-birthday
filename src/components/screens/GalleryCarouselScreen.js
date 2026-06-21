"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const galleryImages = [
    {
        image: "/images/photo1.jpeg",
        text: "Beautiful Moments ❤️",
    },
    {
        image: "/images/photo2.jpeg",
        text: "Forever Together 💕",
    },
    {
        image: "/images/photo3.jpeg",
        text: "Shining Bright ✨",
    },
    {
        image: "/images/photo4.jpeg",
        text: "Special Times 🌸",
    },
];

export default function GalleryCarouselScreen() {
    const [activeIndex, setActiveIndex] = useState(0);

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
            <div className="absolute w-[400px] h-[400px] bg-pink-300/20 rounded-full blur-[150px]" />
            <div className="absolute right-0 bottom-0 w-[350px] h-[350px] bg-purple-300/20 rounded-full blur-[150px]" />

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

            {/* Main Card */}
            <motion.div
                className="
        relative z-10
        w-full max-w-3xl
        rounded-[40px]
        bg-white/20
        backdrop-blur-3xl
        border border-white/30
        shadow-[0_20px_80px_rgba(236,72,153,0.15)]
        p-8"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
            >
                {/* Title */}
                <motion.h1
                    className="text-center text-5xl md:text-6xl font-dancing text-pink-600 mb-10"
                    initial={{ y: -20 }}
                    animate={{ y: 0 }}
                >
                    Our Gallery 📸
                </motion.h1>

                {/* Swiper */}
                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    slidesPerView={1}
                    effect="fade"
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    onSlideChange={(swiper) =>
                        setActiveIndex(swiper.activeIndex)
                    }
                    className="rounded-[40px] overflow-hidden"
                >
                    {galleryImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="
                relative
                h-[550px]
                rounded-[40px]
                overflow-hidden
                shadow-[0_20px_80px_rgba(236,72,153,0.25)]"
                                whileHover={{
                                    scale: 1.02,
                                }}
                            >
                                <Image
                                    src={image.image}
                                    alt={image.text}
                                    fill
                                    priority
                                    className="object-cover"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                {/* Caption */}
                                <motion.div
                                    className="absolute bottom-10 left-0 right-0 text-center px-6"
                                    initial={{
                                        y: 30,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                    }}
                                >
                                    <p className="font-dancing text-5xl text-white drop-shadow-xl">
                                        {image.text}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Dots */}
                <div className="flex justify-center gap-3 mt-8">
                    {galleryImages.map((_, index) => (
                        <motion.div
                            key={index}
                            className={`rounded-full transition-all ${index === activeIndex
                                    ? "w-10 h-3 bg-pink-500"
                                    : "w-3 h-3 bg-pink-200"
                                }`}
                            animate={{
                                scale: index === activeIndex ? 1.2 : 1,
                            }}
                        />
                    ))}
                </div>

                {/* Bottom Quote */}
                <motion.div
                    className="text-center mt-10"
                    animate={{
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    <p className="font-dancing text-3xl text-pink-500">
                        "Every picture tells a beautiful story ❤️"
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}