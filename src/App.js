import "./App.css";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import AboutSection from "./components/aboutSection";
import InfoSection from "./components/infoSection";
import CompaniesSection from "./components/companiesSection";
import ServicesSection from "./components/servicesSection";
import ProjectSection from "./components/projectSection";
import ContactSection from "./components/contactSection";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <InfoSection />
        <CompaniesSection />
        <ServicesSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
