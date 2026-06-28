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
        image: "/images/pic1.avif",
        text: "Beautiful Moments ❤️",
    },
    {
        image: "/images/pic2.avif",
        text: "Forever Together 💕",
    },
    {
        image: "/images/pic3.jpeg",
        text: "Shining Bright ✨",
    },
    {
        image: "/images/pic4.jpeg",
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
            className="fixed inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 px-4 py-4 md:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Background Glow */}
            <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-pink-300/20 rounded-full blur-[100px] md:blur-[150px]" />
            <div className="absolute right-0 bottom-0 w-[200px] md:w-[350px] h-[200px] md:h-[350px] bg-purple-300/20 rounded-full blur-[100px] md:blur-[150px]" />

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
                    max-w-[95%] sm:max-w-[90%] md:max-w-3xl
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
                    px-4 sm:px-6 md:px-8
                    py-8 sm:py-10 md:py-12
                    w-full
                ">
                    {/* Title */}
                    <motion.h1
                        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-dancing text-pink-600 mb-6 sm:mb-8 md:mb-10"
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
                        className="rounded-[25px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden"
                    >
                        {galleryImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    className="
                                        relative
                                        h-[350px] sm:h-[420px] md:h-[500px] lg:h-[550px]
                                        rounded-[25px] sm:rounded-[30px] md:rounded-[40px]
                                        overflow-hidden
                                        shadow-[0_20px_80px_rgba(236,72,153,0.25)]
                                    "
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
                                        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 text-center px-4 sm:px-6"
                                        initial={{
                                            y: 30,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            y: 0,
                                            opacity: 1,
                                        }}
                                    >
                                        <p className="font-dancing text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white drop-shadow-xl">
                                            {image.text}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Dots */}
                    <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-7 md:mt-8">
                        {galleryImages.map((_, index) => (
                            <motion.div
                                key={index}
                                className={`rounded-full transition-all ${index === activeIndex
                                        ? "w-8 sm:w-10 h-2.5 sm:h-3 bg-pink-500"
                                        : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-pink-200"
                                    }`}
                                animate={{
                                    scale: index === activeIndex ? 1.2 : 1,
                                }}
                            />
                        ))}
                    </div>

                    {/* Bottom Quote */}
                    <motion.div
                        className="text-center mt-6 sm:mt-8 md:mt-10"
                        animate={{
                            opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        <p className="font-dancing text-xl sm:text-2xl md:text-3xl text-pink-500 px-4">
                            "Every picture tells a beautiful story ❤️"
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}