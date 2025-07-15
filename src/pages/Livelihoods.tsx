import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, TrendingUp, HandHeart, Building2 } from 'lucide-react';

const Livelihoods = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Livelihood Programs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-8 rounded-lg">
                <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Skill Training</h3>
                <p className="text-slate-600 leading-relaxed">
                  Comprehensive vocational training programs in various trades including tailoring, 
                  carpentry, electronics, and computer skills to enhance employability.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <HandHeart className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Microfinance</h3>
                <p className="text-slate-600 leading-relaxed">
                  Small loans and financial services to help individuals start or expand their 
                  businesses, creating sustainable income sources for families.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Women's Self-Help Groups</h3>
                <p className="text-slate-600 leading-relaxed">
                  Empowering women through collective savings, skill development, and 
                  entrepreneurship opportunities to achieve financial independence.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <Building2 className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Rural Entrepreneurship</h3>
                <p className="text-slate-600 leading-relaxed">
                  Supporting rural entrepreneurs with business development services, 
                  market linkages, and technology adoption for sustainable growth.
                </p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-8">Our Livelihood Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">25,000+</div>
                  <div className="text-slate-600">People Trained</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">5,000+</div>
                  <div className="text-slate-600">Jobs Created</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">₹2Cr+</div>
                  <div className="text-slate-600">Loans Disbursed</div>
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

export default Livelihoods;
