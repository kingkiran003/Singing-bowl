export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/Hero_Banner.png"
          alt="Singing Bowl Therapy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-amber-800/30 to-amber-50/90"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-950 mb-6 leading-tight">
          Tibetan Singing Bowl Therapy
          <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-amber-800">
            for Mind, Body & Energy
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-amber-900 mb-10 max-w-3xl mx-auto leading-relaxed">
          Experience deep relaxation, emotional clarity & stress relief through the ancient sound healing tradition.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={scrollToContact}
            className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book a Session
          </button>
          <button
            onClick={scrollToAbout}
            className="bg-white text-amber-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-amber-600"
          >
            Learn More
          </button>
        </div>

        <p className="text-amber-800 text-sm md:text-base font-medium">
          Trusted by individuals, corporate teams & wellness seekers in Coimbatore & beyond.
        </p>
      </div>
    </section>
  );
}
