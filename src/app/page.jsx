'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/screens/LoadingScreen';
import WelcomeScreen from '@/components/screens/WelcomeScreen';
import HeroScreen from '@/components/screens/HeroScreen';
import CountdownScreen from '@/components/screens/CountdownScreen';
import PhotoStoryScreen from '@/components/screens/PhotoStoryScreen';
import CakeScreen from '@/components/screens/CakeScreen';
import MemoryTimelineScreen from '@/components/screens/MemoryTimelineScreen';
import LetterScreen from '@/components/screens/LetterScreen';
import SpecialSectionScreen from '@/components/screens/SpecialSectionScreen';
import GalleryCarouselScreen from '@/components/screens/GalleryCarouselScreen';
import QuizScreen from '@/components/screens/QuizScreen';
import GiftBoxScreen from '@/components/screens/GiftBoxScreen';
import FinalScreen from '@/components/screens/FinalScreen';
import BackgroundMusic from '@/components/ui/BackgroundMusic';
import FloatingFlowers from '@/components/ui/FloatingFlowers';
import Sparkles from '@/components/ui/Sparkles';

const SCREENS = [
  { id: 'loading', component: LoadingScreen, duration: 3000 },
  { id: 'welcome', component: WelcomeScreen, duration: 5000 },
  { id: 'hero', component: HeroScreen, duration: 6000 },
  { id: 'countdown', component: CountdownScreen, duration: 6000 },
  { id: 'photostory', component: PhotoStoryScreen, duration: 15000 },
  { id: 'cake', component: CakeScreen, duration: 8000 },
  { id: 'memory', component: MemoryTimelineScreen, duration: 8000 },
  { id: 'letter', component: LetterScreen, duration: 12000 },
  { id: 'special', component: SpecialSectionScreen, duration: 10000 },
  { id: 'gallery', component: GalleryCarouselScreen, duration: 20000 },
  { id: 'quiz', component: QuizScreen, duration: 10000 },
  { id: 'giftbox', component: GiftBoxScreen, duration: 8000 },
  { id: 'final', component: FinalScreen, duration: Infinity },
];

export default function Home() {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  useEffect(() => {
    // Attempt to autoplay music
    const audio = document.querySelector('audio');
    if (audio) {
      audio.play().catch(() => {
        // Autoplay was prevented, user will need to interact
        console.log('Autoplay prevented');
      });
    }
  }, []);

  useEffect(() => {
    const currentScreen = SCREENS[currentScreenIndex];
    if (currentScreen.duration === Infinity) return;

    const timer = setTimeout(() => {
      if (currentScreenIndex < SCREENS.length - 1) {
        setCurrentScreenIndex(currentScreenIndex + 1);
      }
    }, currentScreen.duration);

    return () => clearTimeout(timer);
  }, [currentScreenIndex]);

  const CurrentScreen = SCREENS[currentScreenIndex].component;

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <BackgroundMusic />
      <FloatingFlowers />
      <Sparkles />

      <AnimatePresence mode="wait">
        <CurrentScreen key={currentScreenIndex} />
      </AnimatePresence>
    </main>
  );
}