'use client';

import CakeScreen from '@/components/screens/CakeScreen';
import CountdownScreen from '@/components/screens/CountdownScreen';
import FinalScreen from '@/components/screens/FinalScreen';
import GalleryCarouselScreen from '@/components/screens/GalleryCarouselScreen';
import GiftBoxScreen from '@/components/screens/GiftBoxScreen';
import HeroScreen from '@/components/screens/HeroScreen';
import LetterScreen from '@/components/screens/LetterScreen';
import LoadingScreen from '@/components/screens/LoadingScreen';
import MemoryTimelineScreen from '@/components/screens/MemoryTimelineScreen';
import PhotoStoryScreen from '@/components/screens/PhotoStoryScreen';
import QuizScreen from '@/components/screens/QuizScreen';
import SpecialSectionScreen from '@/components/screens/SpecialSectionScreen';
import WelcomeScreen from '@/components/screens/WelcomeScreen';
import BackgroundMusic from '@/components/ui/BackgroundMusic';
import FloatingFlowers from '@/components/ui/FloatingFlowers';
import Sparkles from '@/components/ui/Sparkles';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

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
  const musicRef = useRef(null);
  const hasStartedMusic = useRef(false);

  const handleReadAgain = () => {
    hasStartedMusic.current = false;
    musicRef.current?.resetMusic?.();
    setCurrentScreenIndex(0);
  };

  useEffect(() => {
    if (currentScreenIndex === 1 && !hasStartedMusic.current) {
      hasStartedMusic.current = true;
      musicRef.current?.startMusic?.();
    }
  }, [currentScreenIndex]);

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
  const currentScreenId = SCREENS[currentScreenIndex].id;

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <BackgroundMusic ref={musicRef} />
      <FloatingFlowers />
      <Sparkles />

      <AnimatePresence mode="wait">
        <CurrentScreen
          key={currentScreenIndex}
          onReadAgain={currentScreenId === 'final' ? handleReadAgain : undefined}
        />
      </AnimatePresence>
    </main>
  );
}