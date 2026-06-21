'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const flowers = ['🌸', '🌷', '🌹', '🌺', '🌸', '🌷', '🌹', '🌺'];

export default function FloatingFlowers() {
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        const newPositions = flowers.map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            duration: 15 + Math.random() * 20,
            delay: Math.random() * 10,
            size: 20 + Math.random() * 30,
            rotation: Math.random() * 360,
        }));
        setPositions(newPositions);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {positions.map((pos, index) => (
                <motion.div
                    key={index}
                    className="absolute"
                    initial={{
                        x: `${pos.x}vw`,
                        y: '110vh',
                        rotate: pos.rotation,
                        scale: 0
                    }}
                    animate={{
                        y: '-20vh',
                        x: `${pos.x + (Math.random() - 0.5) * 20}vw`,
                        rotate: pos.rotation + 360,
                        scale: 1
                    }}
                    transition={{
                        duration: pos.duration,
                        delay: pos.delay,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    style={{
                        fontSize: pos.size,
                        opacity: 0.6
                    }}
                >
                    {flowers[index % flowers.length]}
                </motion.div>
            ))}
        </div>
    );
}