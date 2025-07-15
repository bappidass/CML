
import React from 'react';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/733d9b8d-c8bf-43b6-8f79-d9166edf7581.png" 
                alt="Centre for Microfinance & Livelihood - An Initiative of TATA TRUSTS" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              The Change Catalyst Foundation is a non-profit organization that strives to eliminate poverty and hunger by implementing sustainable development programs across India.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
              <Youtube className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Vision & Mission</a></li>
              <li><a href="#" className="hover:text-white">Leadership Team</a></li>
              <li><a href="#" className="hover:text-white">Board of Directors</a></li>
              <li><a href="#" className="hover:text-white">Annual Reports</a></li>
              <li><a href="#" className="hover:text-white">Transparency</a></li>
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Work</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white">Education Programs</a></li>
              <li><a href="#" className="hover:text-white">Livelihood Support</a></li>
              <li><a href="#" className="hover:text-white">Health & Nutrition</a></li>
              <li><a href="#" className="hover:text-white">Women Empowerment</a></li>
              <li><a href="#" className="hover:text-white">Community Development</a></li>
              <li><a href="#" className="hover:text-white">Emergency Relief</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-slate-300 mb-6">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                    <span>📧 contact@cml.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">+91-1800-123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" />
                <span className="text-sm">123 Development Lane<br />Social Sector Hub<br />New Delhi - 110001</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Subscribe to Newsletter</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-slate-700 text-white rounded-l border-slate-600 focus:outline-none focus:border-green-500"
                />
                <Button className="bg-green-600 hover:bg-green-700 rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Change Catalyst Foundation. All rights reserved. | Charity Registration: 12A & 80G Certified
          </p>
          <div className="flex space-x-6 text-sm text-slate-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
