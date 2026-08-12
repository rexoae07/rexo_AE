import Hero from '../sections/Hero';
import About from '../sections/About';
import Achievements from '../sections/Achievements';
import Showreel from '../sections/Showreel';
import Process from '../sections/Process';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="divider max-w-6xl mx-auto" />
      <About />
      <div className="divider max-w-6xl mx-auto" />
      <Achievements />
      <div className="divider max-w-6xl mx-auto" />
      <Showreel />
      <div className="divider max-w-6xl mx-auto" />
      <Process />
      <div className="divider max-w-6xl mx-auto" />
      <Contact />
      <Footer />
    </main>
  );
}
