import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroScreen() {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-50 to-pink-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center px-6">
                <motion.div
                    className="relative mx-auto mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                >
                    <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-pink-300 shadow-2xl mx-auto">
                        <div className="w-full h-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center text-6xl">
                            🌸
                        </div>
                    </div>
                    <motion.div
                        className="absolute -bottom-2 -right-2 text-3xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        💖
                    </motion.div>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl font-dancing text-pink-600 mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Happy Birthday Sanvi ❤️
                </motion.h1>

                <motion.p
                    className="text-gray-600 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    25 June 2009 • Forever Special
                </motion.p>

                <motion.div
                    className="mt-6 flex justify-center gap-4 text-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                >
                    {['🎂', '🎈', '🎁', '🎉'].map((emoji, i) => (
                        <motion.span
                            key={i}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                        >
                            {emoji}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}