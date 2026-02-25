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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
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
