'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CountdownScreen() {
    const targetDate = new Date('2026-06-25T00:00:00').getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
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
        { label: 'Days', value: timeLeft.days, emoji: '📅' },
        { label: 'Hours', value: timeLeft.hours, emoji: '⏰' },
        { label: 'Minutes', value: timeLeft.minutes, emoji: '⏱️' },
        { label: 'Seconds', value: timeLeft.seconds, emoji: '⚡' },
    ];

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center px-6 w-full max-w-md">
                <motion.h2
                    className="text-2xl font-dancing text-pink-600 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Countdown to 25 June 2026 ⏳
                </motion.h2>

                <div className="grid grid-cols-2 gap-3">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.label}
                            className="glass-card rounded-2xl p-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-2xl mb-1">{card.emoji}</div>
                            <motion.div
                                key={card.value}
                                className="text-3xl font-bold text-pink-600"
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {String(card.value).padStart(2, '0')}
                            </motion.div>
                            <div className="text-sm text-gray-500 mt-1">{card.label}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="text-sm text-gray-400 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Time is ticking... Don't miss out! ✨
                </motion.p>
            </div>
        </motion.div>
    );
}