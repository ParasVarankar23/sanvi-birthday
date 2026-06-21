'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.3;
            audioRef.current.loop = true;

            // Attempt to play
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    console.log('Autoplay was prevented. User interaction required.');
                });
            }
        }
    }, []);

    return (
        <audio ref={audioRef} src="/music/birthday.mp3" preload="auto" />
    );
}