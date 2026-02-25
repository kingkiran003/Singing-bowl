import { MessageCircle, Wind, BookOpen, Music, Heart } from 'lucide-react';

export default function WhatToExpect() {
  const steps = [
    {
      icon: MessageCircle,
      text: "A brief discussion about your current state and goals"
    },
    {
      icon: Wind,
      text: "Gentle breathing guidance"
    },
    {
      icon: BookOpen,
      text: "Intro to sound therapy principles"
    },
    {
      icon: Music,
      text: "Harmonious singing bowl immersion"
    },
    {
      icon: Heart,
      text: "Post-session grounding & reflection"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-6">
            What Happens in a Session?
          </h2>
          <p className="text-lg text-amber-900 max-w-3xl mx-auto leading-relaxed">
            Your session takes place in a calm, comfortable environment.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 mb-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center space-x-4 p-5 bg-amber-50 rounded-xl hover:bg-amber-100 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="flex-shrink-0">
                    <Icon className="h-6 w-6 text-amber-700" />
                  </div>
                  <p className="text-amber-900 font-medium">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-amber-50 rounded-2xl p-8 text-center border border-amber-200">
            <p className="text-lg text-amber-950 font-medium">
              Sessions are available for individuals, groups, and corporate teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
