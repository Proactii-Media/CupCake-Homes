import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";
import HomeSection from "@/sections/Home";
import ReviewsSection from "@/sections/Reviews";
import StaysSection from "@/sections/Stays";

export default function Home() {
  return (
    <div className="bg-[#FAF9F6] text-[#2C2C2C]">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <StaysSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
