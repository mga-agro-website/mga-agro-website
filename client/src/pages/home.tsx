import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import RiceCollection from "@/components/RiceCollection";
import ProcessTimeline from "@/components/ProcessTimeline";
import FactoryGallery from "@/components/FactoryGallery";
import AnimatedCounters from "@/components/AnimatedCounters";
import ExportMap from "@/components/ExportMap";
import PackagingShowcase from "@/components/PackagingShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-royal-black">
      <Navigation />
      <main>
        <HeroSection />
        <TrustBar />
        <RiceCollection />
        <ProcessTimeline />
        <FactoryGallery />
        <AnimatedCounters />
        <ExportMap />
        <PackagingShowcase />
      </main>
      <Footer />
    </div>
  );
}
