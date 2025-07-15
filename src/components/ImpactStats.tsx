
import React from 'react';
import { Users, School, MapPin, Award, Utensils } from 'lucide-react';

const ImpactStats = () => {
  const stats = [
    {
      icon: <Utensils className="h-8 w-8" />,
      number: "2.5M+",
      label: "Meals Served Daily",
      description: "Nutritious meals provided to children across the country"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "1.8M+",
      label: "Children Benefited",
      description: "Lives transformed through our education and nutrition programs"
    },
    {
      icon: <School className="h-8 w-8" />,
      number: "19,000+",
      label: "Schools Reached",
      description: "Educational institutions partnering with us nationwide"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      number: "12",
      label: "States & UTs",
      description: "Geographical presence across India"
    },
    {
      icon: <Award className="h-8 w-8" />,
      number: "25+",
      label: "Years of Impact",
      description: "Decades of dedicated service to the community"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Our Impact in Numbers</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every number represents lives touched, dreams nurtured, and communities transformed through collective action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-slate-800">{stat.number}</div>
                <div className="text-lg font-semibold text-green-600">{stat.label}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
