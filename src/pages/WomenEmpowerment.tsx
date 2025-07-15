import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Users, BookOpen, Scale } from 'lucide-react';

const WomenEmpowerment = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
<section className=" text-white relative overflow-hidden">
  <img
    src="/lovable-uploads/Banner-1.jpg"
    alt="Banner background"
    className=" inset-0 w-full h-full object-cover "
  />
  {/* Your other hero content (e.g., text, buttons) goes here and will be layered on top */}
</section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Women Empowerment Programs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-8 rounded-lg">
                <Users className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Leadership Training</h3>
                <p className="text-slate-600 leading-relaxed">
                  Developing leadership skills among women to participate actively in 
                  community decision-making and take on leadership roles.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <BookOpen className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Financial Literacy</h3>
                <p className="text-slate-600 leading-relaxed">
                  Teaching financial management, savings, investment, and entrepreneurship 
                  skills to achieve economic independence and security.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <Heart className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Healthcare Access</h3>
                <p className="text-slate-600 leading-relaxed">
                  Ensuring women have access to reproductive health services, 
                  maternal care, and general healthcare facilities.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <Scale className="h-12 w-12 text-pink-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Legal Awareness</h3>
                <p className="text-slate-600 leading-relaxed">
                  Educating women about their legal rights, providing legal aid, 
                  and supporting them in cases of domestic violence and discrimination.
                </p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-pink-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-8">Our Women Empowerment Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">15,000+</div>
                  <div className="text-slate-600">Women Empowered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">800+</div>
                  <div className="text-slate-600">Self-Help Groups</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-pink-600 mb-2">1,200+</div>
                  <div className="text-slate-600">Women Leaders Trained</div>
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

export default WomenEmpowerment;
