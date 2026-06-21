import { motion } from 'framer-motion';

const memories = [
    { year: '2009', text: 'Born 🌸', emoji: '👶' },
    { year: '2014', text: 'Childhood 📸', emoji: '🧒' },
    { year: '2018', text: 'School ✨', emoji: '📚' },
    { year: '2022', text: 'Memories 💕', emoji: '💫' },
    { year: '2026', text: 'Happy Birthday ❤️', emoji: '🎉' },
];

export default function MemoryTimelineScreen() {
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
                    Our Memory Timeline ❤️
                </motion.h2>

                <div className="space-y-3">
                    {memories.map((memory, index) => (
                        <motion.div
                            key={memory.year}
                            className="glass-card rounded-2xl p-3 flex items-center justify-between"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <span className="text-2xl">{memory.emoji}</span>
                            <span className="text-lg font-medium text-gray-700">{memory.text}</span>
                            <span className="text-sm text-pink-400 font-semibold">{memory.year}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}