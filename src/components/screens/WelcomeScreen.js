import { motion } from 'framer-motion';

export default function WelcomeScreen() {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center px-6 max-w-md">
                <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl mb-6"
                >
                    🌸
                </motion.div>

                <motion.h1
                    className="text-5xl font-dancing text-pink-600 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Hello Sanvi 👋
                </motion.h1>

                <motion.div
                    className="space-y-3 text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <p className="text-lg">This isn't just a website...</p>
                    <motion.p
                        className="text-xl font-light"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        It's a collection of memories,
                    </motion.p>
                    <p className="text-lg">love and happiness ❤️</p>
                </motion.div>

                <motion.div
                    className="mt-8 flex justify-center gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    {['💖', '✨', '🌸', '💕'].map((emoji, i) => (
                        <motion.span
                            key={i}
                            className="text-2xl"
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