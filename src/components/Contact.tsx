import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            <div className="p-12 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Experience the Healing Power of Sound?
              </h2>
              <p className="text-xl text-amber-100 mb-8 leading-relaxed">
                Begin your journey to deep relaxation, emotional clarity, and inner peace today.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="tel:+918489227254"
                  className="flex items-center space-x-3 text-amber-100 hover:text-white transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  <span className="text-lg">+91 84892 27254</span>
                </a>
                <a
                  href="mailto:admin@logeonhelios.shop"
                  className="flex items-center space-x-3 text-amber-100 hover:text-white transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="text-lg">admin@logeonhelios.shop</span>
                </a>
                <div className="flex items-center space-x-3 text-amber-100">
                  <MapPin className="h-6 w-6" />
                  <span className="text-lg">Coimbatore & Beyond</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+918489227254"
                  className="inline-block bg-white text-amber-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-all transform hover:scale-105 text-center shadow-lg"
                >
                  Book Now
                </a>
                <a
                  href="mailto:admin@logeonhelios.shop"
                  className="inline-block bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-600 transition-all transform hover:scale-105 text-center border-2 border-white/20"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative h-64 md:h-auto">
              <img
                src="/young-person-enjoying-yoga-retreat_23-2149401400.jpg"
                alt="Wellness Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-amber-900/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
