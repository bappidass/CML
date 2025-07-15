import React from 'react';
import { GraduationCap, Heart, Droplets, Users, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OurWorkSection = () => {
  const navigate = useNavigate();
  
  const programs = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education",
      description: "Providing quality education and learning resources to underprivileged children",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=400&q=80",
      programs: ["Mid-Day Meals", "Digital Learning", "Teacher Training", "Infrastructure Development"],
      route: "/education"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Livelihoods",
      description: "Empowering communities through skill development and sustainable income generation",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=400&q=80",
      programs: ["Skill Training", "Microfinance", "Women's Self-Help Groups", "Rural Entrepreneurship"],
      route: "/livelihoods"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "WASH & Health",
      description: "Ensuring access to clean water, sanitation, and healthcare services",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
      programs: ["Clean Water Projects", "Sanitation Facilities", "Health Camps", "Hygiene Education"],
      route: "/wash-health"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Women Empowerment",
      description: "Supporting women's rights, education, and economic independence",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      programs: ["Leadership Training", "Financial Literacy", "Healthcare Access", "Legal Awareness"],
      route: "/women-empowerment"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Community Development",
      description: "Building resilient communities through integrated development programs",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80",
      programs: ["Infrastructure", "Disaster Relief", "Environmental Conservation", "Social Awareness"],
      route: "/community-development"
    }
  ];

  const handleProgramClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">How We Make a Difference</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our comprehensive approach addresses multiple dimensions of development, creating sustainable change in communities across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => handleProgramClick(program.route)}>
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${program.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center mb-2">
                      <div className="text-green-400 mr-2">
                        {program.icon}
                      </div>
                      <h3 className="text-xl font-bold">{program.title}</h3>
                    </div>
                    <p className="text-sm opacity-90">{program.description}</p>
                  </div>
                </div>
                
                {/* Hover overlay with programs */}
                <div className="absolute inset-0 bg-green-600 bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6">
                  <div className="text-white text-center">
                    <div className="mb-4">{program.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                    <ul className="space-y-2 text-sm">
                      {program.programs.map((item, idx) => (
                        <li key={idx} className="flex items-center justify-center">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-yellow-400 font-semibold">
                      Click to learn more →
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
