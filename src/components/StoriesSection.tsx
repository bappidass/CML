
import React from 'react';
import { Button } from '@/components/ui/button';
import { Quote } from 'lucide-react';

const StoriesSection = () => {
  const stories = [
    {
      name: "Priya Sharma",
      age: "12 years old",
      location: "Rural Maharashtra",
      story: "Thanks to the mid-day meal program, I never have to worry about being hungry at school. Now I can focus on my studies and dream of becoming a doctor.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
      impact: "Improved attendance by 85%"
    },
    {
      name: "Rajesh Kumar",
      age: "Father of 3",
      location: "Uttar Pradesh",
      story: "The skill development program helped me start my own small business. Now I can provide for my family and send all my children to school.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
      impact: "300% increase in family income"
    },
    {
      name: "Sunita Devi",
      age: "Community Leader",
      location: "Rajasthan",
      story: "Through women's empowerment programs, I learned to read and write. Today, I help other women in my village access government schemes and support.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c9682ab0?auto=format&fit=crop&w=300&q=80",
      impact: "Empowered 200+ women"
    }
  ];

  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Stories of Transformation</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed through our programs. Every story represents hope, resilience, and the power of community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <div key={index} className="bg-white text-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{story.name}</h3>
                    <p className="text-sm text-slate-600">{story.age} • {story.location}</p>
                  </div>
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-green-500 opacity-50" />
                  <p className="text-slate-700 italic pl-6 leading-relaxed">
                    "{story.story}"
                  </p>
                </div>
                
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm font-semibold text-green-700">
                    Impact: {story.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Read More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
