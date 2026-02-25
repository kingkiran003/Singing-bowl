import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyItWorks from './components/WhyItWorks';
import Benefits from './components/Benefits';
import WhoIsItFor from './components/WhoIsItFor';
import WhatToExpect from './components/WhatToExpect';
import Corporate from './components/Corporate';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <WhyItWorks />
      <Benefits />
      <WhoIsItFor />
      <WhatToExpect />
      <Corporate />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
