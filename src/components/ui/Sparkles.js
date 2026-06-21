'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Sparkles() {
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const generateSparkles = () => {
            return Array.from({ length: 30 }, () => ({
                id: Math.random(),
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: 2 + Math.random() * 6,
                duration: 1 + Math.random() * 3,
                delay: Math.random() * 5,
            }));
        };

        setSparkles(generateSparkles());

        const interval = setInterval(() => {
            setSparkles(generateSparkles());
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${sparkle.x}%`,
                        top: `${sparkle.y}%`,
                        width: sparkle.size,
                        height: sparkle.size,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                    }}
                    transition={{
                        duration: sparkle.duration,
                        delay: sparkle.delay,
                        repeat: Infinity,
                    }}
                />
            ))}
        </div>
    );
}