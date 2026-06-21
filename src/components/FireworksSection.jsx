"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function FireworksSection() {
    const [showConfetti, setShowConfetti] = useState(true);
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 15000);

        return () => {
            window.removeEventListener("resize", handleResize);
            clearTimeout(timer);
        };
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200 overflow-hidden px-6">
            {showConfetti && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    recycle={true}
                    numberOfPieces={250}
                />
            )}

            {/* Floating Hearts */}
            <div className="absolute top-20 left-16 text-5xl animate-bounce">
                💖
            </div>

            <div className="absolute top-40 right-20 text-4xl animate-pulse">
                💕
            </div>

            <div className="absolute bottom-32 left-24 text-6xl animate-bounce">
                ❤️
            </div>

            <div className="absolute bottom-24 right-16 text-5xl animate-pulse">
                💗
            </div>

            <div className="bg-white/60 backdrop-blur-xl rounded-[40px] shadow-2xl p-12 max-w-4xl text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-pink-600 mb-8">
                    🎉 Happy Birthday Sister ❤️
                </h1>

                <p className="text-xl md:text-2xl text-gray-700 leading-10">
                    May your life always be filled with love, happiness, success,
                    beautiful memories, and endless smiles.
                </p>

                <div className="mt-12">
                    <div className="text-7xl mb-6">
                        🎂🎁🎈✨💖
                    </div>

                    <h2 className="text-3xl font-bold text-pink-500">
                        Made with ❤️ by Paras
                    </h2>

                    <p className="mt-4 text-lg text-pink-700">
                        25 June 2009 • Forever Special ✨
                    </p>
                </div>
            </div>
        </section>
    );
}