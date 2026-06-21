"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
    {
        src: "/images/photo1.jpeg",
        title: "Beautiful Memories ❤️",
    },
    {
        src: "/images/photo2.jpeg",
        title: "Happy Moments 🌸",
    },
    {
        src: "/images/photo3.jpeg",
        title: "Family Time 💖",
    },
    {
        src: "/images/photo4.jpeg",
        title: "Smiles Forever ✨",
    },
];

export default function Gallery() {
    return (
        <section className="py-24 bg-pink-100 px-6">
            <motion.h2
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold text-center text-pink-600 mb-16"
            >
                📸 Memory Gallery
            </motion.h2>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <div className="relative h-96">
                            <Image
                                src={photo.src}
                                alt={photo.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6 text-center">
                            <h3 className="text-2xl font-bold text-pink-600">
                                {photo.title}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}