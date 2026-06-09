import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { MissionSection } from "@/components/MissionSection";
import { Footer } from "@/components/Footer";

export default function NosotrosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <main className="flex-grow pt-24 pb-12">
        <MissionSection />
      </main>
      <Footer />
    </div>
  );
}
