import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { Catalog } from "@/components/Catalog";
import { Footer } from "@/components/Footer";

export default function CatalogoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <main className="flex-grow">
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}
