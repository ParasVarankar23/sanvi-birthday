"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setPlaying(!playing);
    };

    return (
        <>
            <audio ref={audioRef} loop>
                <source src="/music/birthday.mp3" type="audio/mpeg" />
            </audio>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed bottom-8 right-8 z-50"
            >
                <button
                    onClick={toggleMusic}
                    className="w-20 h-20 rounded-full bg-pink-500 shadow-2xl flex items-center justify-center text-4xl hover:bg-pink-600 transition"
                >
                    {playing ? "🎵" : "🔇"}
                </button>
            </motion.div>
        </>
    );
}