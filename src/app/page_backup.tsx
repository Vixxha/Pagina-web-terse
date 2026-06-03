import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CtaBanner } from "@/components/CtaBanner";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <main className="flex-grow">
        <Hero />
        <MissionSection />
        <FeaturedProducts />
        <CtaBanner />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
