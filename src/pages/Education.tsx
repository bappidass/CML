import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GraduationCap, BookOpen, Users, Building } from 'lucide-react';

const Education = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
<section className=" text-white relative overflow-hidden">
  <img
    src="/lovable-uploads/Banner-4.jpg"
    alt="Banner background"
    className=" inset-0 w-full h-full object-cover "
  />
  {/* Your other hero content (e.g., text, buttons) goes here and will be layered on top */}
</section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Education Programs</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-50 p-8 rounded-lg">
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Mid-Day Meals</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nutritious meals provided to school children to improve attendance and learning outcomes. 
                  Our program ensures that no child goes hungry while pursuing education.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Digital Learning</h3>
                <p className="text-slate-600 leading-relaxed">
                  Modern technology integration in classrooms to enhance learning experiences. 
                  We provide tablets, computers, and internet access to bridge the digital divide.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <GraduationCap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Teacher Training</h3>
                <p className="text-slate-600 leading-relaxed">
                  Comprehensive training programs for educators to improve teaching methodologies 
                  and student engagement in rural and urban schools.
                </p>
              </div>
              
              <div className="bg-slate-50 p-8 rounded-lg">
                <Building className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Infrastructure Development</h3>
                <p className="text-slate-600 leading-relaxed">
                  Building and renovating school facilities, libraries, and laboratories 
                  to create conducive learning environments for students.
                </p>
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-center mb-8">Our Education Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
                  <div className="text-slate-600">Children Educated</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-slate-600">Schools Supported</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                  <div className="text-slate-600">Attendance Rate</div>
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

export default Education;
