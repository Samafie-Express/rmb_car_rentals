
import React from "react";
import { Shield, Users, Award, TrendingUp, Clock, Car } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-rentwheels-gray-dark text-white py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                About RentWheels
              </h1>
              <p className="text-lg opacity-90">
                Your trusted partner for premium car rentals since 2010
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-rentwheels-gray-dark mb-4">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2010, RentWheels began with a simple vision: to provide exceptional car rental experiences that combine premium vehicles with outstanding customer service.
                  </p>
                  <p>
                    What started as a small fleet of just 10 vehicles has now grown into one of the most trusted car rental services with operations in over 50 locations nationwide. Our journey has been defined by our commitment to quality, transparency, and customer satisfaction.
                  </p>
                  <p>
                    Today, RentWheels offers an extensive range of vehicles from compact cars to luxury SUVs, ensuring that every customer finds the perfect match for their travel needs. Our dedication to excellence has earned us numerous industry accolades and the loyalty of thousands of satisfied customers.
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Luxury car on display" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-rentwheels-gray-dark flex items-center gap-2 mb-4">
                  <Shield className="text-rentwheels-blue" />
                  Our Mission
                </h2>
                <p className="text-gray-600">
                  To provide our customers with safe, reliable, and comfortable transportation solutions that enhance their travel experiences. We are committed to offering exceptional service, transparent pricing, and a diverse fleet that meets every need and budget.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-rentwheels-gray-dark flex items-center gap-2 mb-4">
                  <TrendingUp className="text-rentwheels-blue" />
                  Our Vision
                </h2>
                <p className="text-gray-600">
                  To be the leading car rental service known for innovation, sustainability, and customer-centric practices. We aim to revolutionize the rental experience through technology integration, environment-friendly fleet options, and personalized services that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-rentwheels-gray-dark">
                Our Core Values
              </h2>
              <p className="text-gray-600 mt-2">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="h-8 w-8 text-rentwheels-blue" />,
                  title: "Customer First",
                  description: "We prioritize our customers' needs and satisfaction above all else, ensuring every interaction exceeds expectations."
                },
                {
                  icon: <Award className="h-8 w-8 text-rentwheels-blue" />,
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our service, from vehicle quality to customer support."
                },
                {
                  icon: <Shield className="h-8 w-8 text-rentwheels-blue" />,
                  title: "Safety",
                  description: "The safety of our customers is paramount. We maintain our vehicles to the highest standards and implement rigorous safety protocols."
                },
                {
                  icon: <Clock className="h-8 w-8 text-rentwheels-blue" />,
                  title: "Reliability",
                  description: "We understand the importance of dependability in transportation and ensure our services are consistently reliable."
                },
                {
                  icon: <Car className="h-8 w-8 text-rentwheels-blue" />,
                  title: "Quality",
                  description: "We offer only premium vehicles that are regularly maintained to provide a comfortable and luxurious experience."
                },
                {
                  icon: <TrendingUp className="h-8 w-8 text-rentwheels-blue" />,
                  title: "Innovation",
                  description: "We continuously adopt new technologies and methods to improve our services and stay ahead in the industry."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="mb-4 bg-blue-50 p-3 inline-flex rounded-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-rentwheels-gray-dark mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-rentwheels-gray-dark">
                Meet Our Leadership Team
              </h2>
              <p className="text-gray-600 mt-2">
                The passionate individuals driving RentWheels forward
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alexandra Reynolds",
                  position: "Chief Executive Officer",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80"
                },
                {
                  name: "Michael Chen",
                  position: "Chief Operations Officer",
                  image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                },
                {
                  name: "Sophia Martinez",
                  position: "Chief Marketing Officer",
                  image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                },
                {
                  name: "David Wilson",
                  position: "Chief Technology Officer",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                },
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-rentwheels-gray-dark">{member.name}</h3>
                    <p className="text-rentwheels-blue">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-rentwheels-gray-dark">
                Our Journey
              </h2>
              <p className="text-gray-600 mt-2">
                Key milestones in our growth and evolution
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-rentwheels-blue"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    year: "2010",
                    title: "RentWheels Founded",
                    description: "Started with a fleet of 10 vehicles and a single location"
                  },
                  {
                    year: "2013",
                    title: "Regional Expansion",
                    description: "Expanded to 5 major cities with a fleet of 50+ vehicles"
                  },
                  {
                    year: "2016",
                    title: "Digital Transformation",
                    description: "Launched our online booking platform and mobile app"
                  },
                  {
                    year: "2019",
                    title: "Green Initiative",
                    description: "Introduced electric and hybrid vehicles to our fleet"
                  },
                  {
                    year: "2022",
                    title: "Nationwide Presence",
                    description: "Reached 50+ locations across the country with 500+ premium vehicles"
                  },
                  {
                    year: "2023",
                    title: "Customer Excellence Award",
                    description: "Recognized as the leading car rental service for customer satisfaction"
                  }
                ].map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline Point */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-rentwheels-blue border-4 border-white"></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 p-6 bg-white rounded-lg shadow-md ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                      <span className="inline-block px-4 py-1 bg-rentwheels-blue text-white rounded-full text-sm font-semibold mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-rentwheels-gray-dark mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
