import { User, Users, CheckCircle } from 'lucide-react';

export default function Pricing() {
  const individualPricing = [
    {
      name: "Intro Session",
      duration: "60 min",
      price: "₹1,500"
    },
    {
      name: "Standard Session",
      duration: "90 min",
      price: "₹2,000",
      popular: true
    },
    {
      name: "Premium Session",
      duration: "120 min",
      price: "₹2,800"
    }
  ];

  const corporatePricing = [
    {
      name: "Intro Session",
      duration: "per group",
      price: "₹15,000"
    },
    {
      name: "Standard Session",
      duration: "90 min",
      price: "₹18,000"
    },
    {
      name: "Premium Session",
      duration: "2 hrs",
      price: "₹25,000"
    },
    {
      name: "Monthly Wellness Package",
      duration: "ongoing support",
      price: "₹52,000",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-950 mb-6">
            Session Pricing
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                <User className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-amber-950">Individuals</h3>
            </div>

            <div className="space-y-4">
              {individualPricing.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-amber-50 rounded-xl p-6 hover:bg-amber-100 transition-all ${
                    plan.popular ? 'ring-2 ring-amber-600 relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-amber-950 mb-1">
                        {plan.name}
                      </h4>
                      <p className="text-amber-700">{plan.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-amber-900">{plan.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center mb-6">
              <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center mr-4">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-amber-950">Group / Corporate</h3>
            </div>

            <div className="space-y-4">
              {corporatePricing.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-amber-50 rounded-xl p-6 hover:bg-amber-100 transition-all ${
                    plan.popular ? 'ring-2 ring-amber-600 relative' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Best Value
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-amber-950 mb-1">
                        {plan.name}
                      </h4>
                      <p className="text-amber-700">{plan.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-amber-900">{plan.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
