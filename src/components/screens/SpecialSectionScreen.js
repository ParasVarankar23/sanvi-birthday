import { motion } from 'framer-motion';

const qualities = [
    { emoji: '❤️', text: 'Caring' },
    { emoji: '🌸', text: 'Beautiful' },
    { emoji: '✨', text: 'Amazing' },
    { emoji: '😊', text: 'Kind' },
    { emoji: '🌷', text: 'Strong' },
    { emoji: '💖', text: 'Lovely' },
];

export default function SpecialSectionScreen() {
    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="text-center px-6 max-w-md w-full">
                <motion.h2
                    className="text-2xl font-dancing text-pink-600 mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    You Are So Special 🌷
                </motion.h2>

                <div className="grid grid-cols-2 gap-3">
                    {qualities.map((quality, index) => (
                        <motion.div
                            key={quality.text}
                            className="glass-card rounded-2xl p-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="text-3xl mb-1">{quality.emoji}</div>
                            <div className="text-sm text-gray-700 font-medium">{quality.text}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}