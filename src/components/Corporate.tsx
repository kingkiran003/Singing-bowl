import { TrendingDown, Focus, Heart, Sun, CheckCircle } from 'lucide-react';

export default function Corporate() {
  const benefits = [
    {
      icon: TrendingDown,
      text: "Reduce workplace stress"
    },
    {
      icon: Focus,
      text: "Improve team focus & energy"
    },
    {
      icon: Heart,
      text: "Support emotional balance"
    },
    {
      icon: Sun,
      text: "Foster a positive work environment"
    }
  ];

  const offerings = [
    "Introductory sessions",
    "Ongoing monthly packages",
    "On-site and online options"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-900 to-amber-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Corporate Sound Healing Program
            </h2>
            <p className="text-lg text-amber-100 leading-relaxed mb-6">
              Modern workplaces are stressful. Mental clarity, focus, and emotional resilience are crucial for productivity and team effectiveness.
            </p>
            <p className="text-lg text-amber-100 leading-relaxed mb-8">
              Our customized corporate programs are designed to:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className="h-6 w-6 text-amber-300 flex-shrink-0" />
                    <p className="text-amber-100">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">We offer:</h3>
            <div className="space-y-4 mb-8">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-300 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-amber-100">{offering}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-600 rounded-xl p-6 text-center">
              <p className="text-lg font-medium mb-4">
                Contact us to customize a program for your organization.
              </p>
              <a
                href="tel:+918489227254"
                className="inline-block bg-white text-amber-900 px-8 py-3 rounded-full font-semibold hover:bg-amber-50 transition-all transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
