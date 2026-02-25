import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "After just one session, my sleep improved and my mind feels calmer.",
      author: "S. Rajesh",
      location: "Coimbatore"
    },
    {
      text: "The sound therapy helped our team unwind and re-focus.",
      author: "Advanced Clothing Concepts",
      location: "Corporate Client"
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-amber-600" />
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-lg text-amber-900 mb-6 leading-relaxed italic relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-amber-200 pt-4">
                <p className="font-semibold text-amber-950">
                  {testimonial.author}
                </p>
                <p className="text-sm text-amber-700">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
