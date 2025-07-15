import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 text-sm bg-slate-50 -mx-4 px-4">
          <div className="flex items-center space-x-6 text-slate-600">
            <span>📧 contact@cml.org</span>
            <span>📞 +91-1800-123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-slate-600">India</span>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              DONATE NOW
            </Button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/733d9b8d-c8bf-43b6-8f79-d9166edf7581.png"
              alt="Centre for Microfinance & Livelihood - An Initiative of TATA TRUSTS"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-green-600 font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    WHO WE ARE
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border shadow-lg">
                    <div className="grid gap-3 p-6 w-80">
                      <div className="space-y-2">
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          About Us
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Our Mission
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Our Vision
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Leadership Team
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Board of Directors
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Annual Reports
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-green-600 font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    WHAT WE DO
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border shadow-lg">
                    <div className="grid grid-cols-3 gap-6 p-6 w-[800px]">
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-3">
                          Our Work
                        </h3>
                        <div className="space-y-2">
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            Education
                          </a>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            Livelihoods
                          </a>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            WASH & Health
                          </a>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            Women Empowerment
                          </a>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            Community Development
                          </a>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-3">
                          Our Reach
                        </h3>
                        <div className="space-y-2">
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            Program Locations
                          </a>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            Beneficiaries
                          </a>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            Partners
                          </a>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            Volunteers
                          </a>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800 mb-3">
                          Sustainability
                        </h3>
                        <div className="space-y-2">
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            Impact
                          </a>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            Stories of Change
                          </a>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            Our Approach
                          </a>
                          <a
                            href="#"
                            className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                          >
                            SDG Goals
                          </a>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-green-600 font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    PRESS RELEASE
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border shadow-lg">
                    <div className="grid gap-3 p-6 w-80">
                      <div className="space-y-2">
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Latest News
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Success Stories
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Media Coverage
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Photo Gallery
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Video Gallery
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Blog
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-green-600 font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    PUBLICATIONS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border shadow-lg">
                    <div className="grid gap-3 p-6 w-80">
                      <div className="space-y-2">
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Donate Now
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Monthly Giving
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Corporate Partnership
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Fundraise for Us
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Gift a Meal
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Legacy Giving
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-green-600 font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    TENDER
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border shadow-lg">
                    <div className="grid gap-3 p-6 w-80">
                      <div className="space-y-2">
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Volunteer
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Internships
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Careers
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Ambassador Program
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Events
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Join Our Team
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a
                    href="#"
                    className="text-slate-700 hover:text-green-600 font-medium px-4 py-2"
                  >
                    IMPACT REPORTS
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-slate-700 hover:text-green-600 font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    CONTACT
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border shadow-lg">
                    <div className="grid gap-3 p-6 w-80">
                      <div className="space-y-2">
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Volunteer
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Internships
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Careers
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Ambassador Program
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Events
                        </a>
                        <a
                          href="#"
                          className="block px-3 py-2 text-sm text-slate-700 hover:text-green-600 hover:bg-slate-50 rounded"
                        >
                          Join Our Team
                        </a>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* <div className="flex items-center space-x-4 ml-6">
              <Button className="bg-green-600">
                LOG IN
              </Button>
            </div> */}
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-slate-700 hover:text-green-600 font-medium"
              >
                WHO WE ARE
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-green-600 font-medium"
              >
                WHAT WE DO
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-green-600 font-medium"
              >
                NEWS & STORIES
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-green-600 font-medium"
              >
                HOW TO HELP
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-green-600 font-medium"
              >
                GET INVOLVED
              </a>
              <a
                href="#"
                className="text-slate-700 hover:text-green-600 font-medium"
              >
                IMPACT REPORTS
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 w-fit">
                LOG IN
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
