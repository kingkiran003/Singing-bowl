export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-6">
              What is Tibetan Singing Bowl Therapy?
            </h2>
            <p className="text-lg text-amber-900 leading-relaxed mb-6">
              Singing Bowl Therapy is a centuries-old sound healing practice using precisely tuned metal bowls that create soothing vibrations and harmonic tones. These sound waves gently influence the nervous system, helping your body release tension, calm the mind, and restore balance at physical, emotional, and energetic levels.
            </p>
            <p className="text-lg text-amber-900 leading-relaxed font-medium">
              Unlike conventional therapies, it works without force or pressure — simply through the power of sound and vibration.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/singingbowl_image2.jpg"
                alt="Singing Bowl"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-200/40 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-amber-300/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
