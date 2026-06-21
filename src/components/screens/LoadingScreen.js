import { motion } from 'framer-motion';

export default function LoadingScreen() {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-100 to-purple-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360, 0]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="text-7xl mb-4"
                >
                    ❤️
                </motion.div>
                <motion.h1
                    className="text-4xl font-bold text-pink-600 font-dancing"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    Loading...
                </motion.h1>
                <div className="mt-6 flex justify-center gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 rounded-full bg-pink-400"
                            animate={{ y: [0, -15, 0] }}
                            transition={{
                                duration: 0.6,
                                delay: i * 0.2,
                                repeat: Infinity,
                            }}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}