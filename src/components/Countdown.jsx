"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
    const targetDate = new Date("June 25, 2026 00:00:00").getTime();

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor(
                (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            ),
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

    return (
        <section className="py-20 px-6 bg-pink-100">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-pink-600 mb-12">
                ⏳ Countdown To Your Birthday
            </h2>

            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
                    <h3 className="text-5xl font-bold text-pink-500">
                        {timeLeft.days}
                    </h3>
                    <p className="text-gray-600 mt-2">Days</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
                    <h3 className="text-5xl font-bold text-pink-500">
                        {timeLeft.hours}
                    </h3>
                    <p className="text-gray-600 mt-2">Hours</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
                    <h3 className="text-5xl font-bold text-pink-500">
                        {timeLeft.minutes}
                    </h3>
                    <p className="text-gray-600 mt-2">Minutes</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
                    <h3 className="text-5xl font-bold text-pink-500">
                        {timeLeft.seconds}
                    </h3>
                    <p className="text-gray-600 mt-2">Seconds</p>
                </div>
            </div>
        </section>
    );
}