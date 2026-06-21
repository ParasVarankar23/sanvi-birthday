import HeroSection from "@/components/HeroSection";
import Countdown from "@/components/Countdown";
import CakeSection from "@/components/CakeSection";
import Gallery from "@/components/Gallery";
import LetterSection from "@/components/LetterSection";
import SpecialCards from "@/components/SpecialCards";
import GiftBox from "@/components/GiftBox";
import MusicPlayer from "@/components/MusicPlayer";
import FireworksSection from "@/components/FireworksSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />

      <Countdown />

      <CakeSection />

      <Gallery />

      <LetterSection />

      <SpecialCards />

      <GiftBox />

      <FireworksSection />

      <MusicPlayer />
    </main>
  );
}