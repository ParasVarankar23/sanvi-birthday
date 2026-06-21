'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingHearts() {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const generateHearts = () => {
            return Array.from({ length: 20 }, () => ({
                id: Math.random(),
                x: Math.random() * 100,
                size: 15 + Math.random() * 30,
                duration: 8 + Math.random() * 15,
                delay: Math.random() * 10,
            }));
        };

        setHearts(generateHearts());

        const interval = setInterval(() => {
            setHearts(generateHearts());
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute text-pink-400"
                    initial={{
                        x: `${heart.x}%`,
                        y: '110vh',
                        opacity: 0.6,
                        scale: 0
                    }}
                    animate={{
                        y: '-20vh',
                        opacity: [0.6, 0.3, 0],
                        scale: [0, 1, 0.5]
                    }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    style={{ fontSize: heart.size }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
}