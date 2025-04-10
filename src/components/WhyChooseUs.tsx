
import React from "react";
import { Calendar, Shield, Clock, Award } from "lucide-react";

const WhyChooseUs: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-rentwheels-gray-dark mb-4">
          Why Choose RentWheels
        </h2>
        <p className="text-gray-600">
          We offer the best car rental experience with premium services that ensure customer satisfaction at every step.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <Calendar className="w-10 h-10 text-rentwheels-blue" />,
            title: "Flexible Booking",
            description: "Change or cancel your booking with ease, adapting to your travel plans.",
          },
          {
            icon: <Shield className="w-10 h-10 text-rentwheels-blue" />,
            title: "Safe & Secure",
            description: "All our cars are regularly maintained and sanitized for your safety.",
          },
          {
            icon: <Clock className="w-10 h-10 text-rentwheels-blue" />,
            title: "24/7 Support",
            description: "Our support team is available round the clock to assist you.",
          },
          {
            icon: <Award className="w-10 h-10 text-rentwheels-blue" />,
            title: "Quality Guarantee",
            description: "We ensure that all our vehicles meet the highest quality standards.",
          },
        ].map((item, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-lg card-shadow card-hover"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
            <p className="text-gray-600 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
