import { Brain, Waves, Heart, Sparkles } from 'lucide-react';

export default function WhyItWorks() {
  const reasons = [
    {
      icon: Brain,
      text: "The nervous system slows down, reducing stress hormones"
    },
    {
      icon: Waves,
      text: "Brain waves shift toward alpha and theta states — the states of calm, intuition, and relaxation"
    },
    {
      icon: Heart,
      text: "Energy pathways begin to resonate more harmoniously"
    },
    {
      icon: Sparkles,
      text: "Emotional blockages soften and release naturally"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-6">
            Why Sound Healing Works
          </h2>
          <p className="text-lg text-amber-900 max-w-3xl mx-auto leading-relaxed">
            Sound affects every cell and nerve in your body. When the harmonic tones from singing bowls vibrate through your system:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className="flex items-start space-x-4 p-6 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-amber-900 leading-relaxed pt-2">
                  {reason.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 text-center">
          <p className="text-lg text-amber-950 font-medium">
            This leads to improved relaxation, better focus, reduced anxiety, and an overall sense of inner peace.
          </p>
        </div>
      </div>
    </section>
  );
}
