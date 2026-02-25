import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "Does it hurt?",
      answer: "No — there's no force or pressure. It's a gentle sound-based experience."
    },
    {
      question: "How many sessions do I need?",
      answer: "Many feel benefits after the first session, but ongoing sessions deepen calm and clarity."
    },
    {
      question: "Is it spiritual?",
      answer: "It's rooted in sound tradition, but completely inclusive — anyone can benefit."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-amber-950 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-amber-900 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
