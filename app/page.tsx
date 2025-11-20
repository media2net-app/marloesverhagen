import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HeroFeatures from './components/HeroFeatures';
import Services from './components/Services';
import TargetGroup from './components/TargetGroup';
import USP from './components/USP';
import About from './components/About';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HeroFeatures />
      <section id="diensten">
        <Services />
      </section>
      <section id="doelgroep">
        <TargetGroup />
      </section>
      <USP />
      <section id="over-mij">
        <About />
      </section>
      <Footer />
    </main>
  );
}
