'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const BackgroundMusic = forwardRef(function BackgroundMusic(_, ref) {
    const audioRef = useRef(null);

    const startMusic = async () => {
        if (!audioRef.current) return;

        audioRef.current.volume = 0.3;
        audioRef.current.loop = true;

        try {
            await audioRef.current.play();
        } catch {
            console.log('Autoplay was prevented. User interaction required.');
        }
    };

    const resetMusic = () => {
        if (!audioRef.current) return;

        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    };

    useImperativeHandle(ref, () => ({
        startMusic,
        resetMusic,
    }));

    useEffect(() => {
        const root = globalThis;

        const handleFirstInteraction = () => {
            startMusic();
            root.removeEventListener('pointerdown', handleFirstInteraction);
            root.removeEventListener('touchstart', handleFirstInteraction);
            root.removeEventListener('keydown', handleFirstInteraction);
        };

        root.addEventListener('pointerdown', handleFirstInteraction, { once: true });
        root.addEventListener('touchstart', handleFirstInteraction, { once: true });
        root.addEventListener('keydown', handleFirstInteraction, { once: true });

        return () => {
            root.removeEventListener('pointerdown', handleFirstInteraction);
            root.removeEventListener('touchstart', handleFirstInteraction);
            root.removeEventListener('keydown', handleFirstInteraction);
        };
    }, []);

    return (
        <audio ref={audioRef} src="/music/birthday.mp3" preload="auto">
            <track kind="captions" label="English" srcLang="en" src="/music/birthday-captions.vtt" default />
        </audio>
    );
});

export default BackgroundMusic;