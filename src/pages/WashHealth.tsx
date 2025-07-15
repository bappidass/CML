import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Droplets, Heart, Stethoscope, Waves } from 'lucide-react';

const WashHealth = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
<section className=" text-white relative overflow-hidden">
  <img
    src="/lovable-uploads/Banner-7.jpg"
    alt="Banner background"
    className=" inset-0 w-full h-full object-cover "
  />
  {/* Your other hero content (e.g., text, buttons) goes here and will be layered on top */}
</section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our WASH & Health Programs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-8 rounded-lg">
                <Waves className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Clean Water Projects</h3>
                <p className="text-slate-600 leading-relaxed">
                  Installing water pumps, wells, and purification systems to provide 
                  safe drinking water to rural communities and urban slums.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Sanitation Facilities</h3>
                <p className="text-slate-600 leading-relaxed">
                  Building toilets, waste management systems, and promoting hygiene 
                  practices to prevent disease and improve community health.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <Stethoscope className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Health Camps</h3>
                <p className="text-slate-600 leading-relaxed">
                  Regular medical camps providing free health checkups, vaccinations, 
                  and treatment for common diseases in underserved areas.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <Heart className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Hygiene Education</h3>
                <p className="text-slate-600 leading-relaxed">
                  Community awareness programs on personal hygiene, sanitation practices, 
                  and disease prevention through education and behavioral change.
                </p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-8">Our WASH & Health Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">100,000+</div>
                  <div className="text-slate-600">People with Clean Water Access</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-slate-600">Sanitation Facilities Built</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">75,000+</div>
                  <div className="text-slate-600">Health Checkups Conducted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WashHealth;
