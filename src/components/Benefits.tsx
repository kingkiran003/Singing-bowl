import { Smile, Focus, Moon, Sparkles, CheckCircle } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    "Deep relaxation & stress relief",
    "Improved emotional balance",
    "Clarity & enhanced focus",
    "Reduced tension and nervous fatigue",
    "Support for meditation and mindfulness",
    "Harmonized mind–body energy flow",
    "Enhanced sleep quality and mental calm"
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Side_section_image.png"
                alt="Sound Therapy Benefits"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-200/40 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-amber-300/30 rounded-full blur-3xl"></div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-6">
              Benefits of Singing Bowl Therapy
            </h2>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-amber-900">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-100 border-l-4 border-amber-600 p-6 rounded-r-lg">
              <p className="text-amber-950 italic">
                Results vary with every individual, but most experience greater calm and mental clarity after the very first session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
