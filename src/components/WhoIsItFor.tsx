import { Briefcase, Heart, Flower, Moon, Users, Sparkles } from 'lucide-react';

export default function WhoIsItFor() {
  const audiences = [
    {
      icon: Briefcase,
      title: "Professionals",
      description: "with high stress or mental overload"
    },
    {
      icon: Heart,
      title: "Seekers",
      description: "seeking emotional balance & clarity"
    },
    {
      icon: Flower,
      title: "Meditation Enthusiasts",
      description: "deepening their practice"
    },
    {
      icon: Moon,
      title: "Individuals",
      description: "struggling with anxiety or sleep issues"
    },
    {
      icon: Users,
      title: "Corporate Teams",
      description: "seeking wellness & productivity"
    },
    {
      icon: Sparkles,
      title: "Anyone",
      description: "looking for a gentle path to inner peace"
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-6">
            Who Can Benefit
          </h2>
          <p className="text-lg text-amber-900 max-w-2xl mx-auto">
            Singing Bowl Therapy is suitable for:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-amber-950 mb-2">
                  {audience.title}
                </h3>
                <p className="text-amber-800">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
