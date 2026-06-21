'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const galleryImages = [
    { emoji: '🌸', text: 'Beautiful Moments' },
    { emoji: '💕', text: 'Forever Together' },
    { emoji: '✨', text: 'Shining Bright' },
    { emoji: '🌺', text: 'Special Times' },
    { emoji: '💖', text: 'Unforgettable' },
];

export default function GalleryCarouselScreen() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50">
            <div className="w-full max-w-md px-6">
                <motion.h2
                    className="text-2xl font-dancing text-pink-600 text-center mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Our Gallery 📷
                </motion.h2>

                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    effect="fade"
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="rounded-3xl shadow-2xl"
                >
                    {galleryImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="glass-card rounded-3xl p-8 h-80 flex flex-col items-center justify-center">
                                <motion.div
                                    className="text-8xl mb-4"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {image.emoji}
                                </motion.div>
                                <p className="text-xl font-dancing text-pink-600">{image.text}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center gap-2 mt-4">
                    {galleryImages.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-pink-500' : 'bg-pink-200'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}