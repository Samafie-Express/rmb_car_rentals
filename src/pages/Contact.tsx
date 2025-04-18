import React, {useEffect} from "react";
import {ArrowLeft, Clock, Mail, MapPin, Phone} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {useForm} from '@formspree/react';
import {Link} from "react-router-dom";

const Contact: React.FC = () => {
    const [state, handleSubmit] = useForm("myzeqnvo");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (state.succeeded) {
        return (
            <div className="">
                <div className="section-padding pt-8 pb-0">
                    <Link to="/">
                        <Button
                            variant="ghost"
                            className="flex items-center gap-2 hover:bg-gray-100"
                        >
                            <ArrowLeft size={18}/> Home
                        </Button>
                    </Link>
                </div>
                <p className="font-semibold px-4">Message sent successfully, we'll contact you soon!</p>
            </div>
        )
    }

    return (
        <>
            <Header/>
            <main className="pt-20">
                {/* Hero Section */}
                <section className="bg-rentwheels-gray-dark text-white py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-2xl mx-auto text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                                Get in Touch
                            </h1>
                            <p className="text-lg opacity-90">
                                Have questions or need assistance? We're here to help you with all your car rental
                                needs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Info + Form */}
                <section className="py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Information */}
                            <div>
                                <h2 className="text-2xl font-bold text-rentwheels-gray-dark mb-6">
                                    Contact Information
                                </h2>
                                <div className="flex flex-col gap-8">
                                    {/* Map */}
                                    <div className="h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
                                        <div className="w-full h-full">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31701.831535303212!2d-1.5907001!3d6.6804639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb97b2b9d686d5%3A0x802d21b2c0598077!2sRMB%20CAR%20RENTAL%20SERVICE!5e0!3m2!1sen!2sgh!4v1744458788610!5m2!1sen!2sgh"
                                                width="600" height="450" allowFullScreen={true} loading="lazy"
                                                className="border-none w-full"
                                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </div>

                                    {/* Contact Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-rentwheels-blue p-3 rounded-lg">
                                                <MapPin className="text-white"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Our Location</h3>
                                                <p className="text-gray-600 mt-1">
                                                    Asokwa new Road Agenes York plaza
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-rentwheels-blue p-3 rounded-lg">
                                                <Phone className="text-white"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Phone Number</h3>
                                                <p className="text-gray-600 mt-1">+233 24 264 8325, <br/> +233 20 023
                                                    8921</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-rentwheels-blue p-3 rounded-lg">
                                                <Mail className="text-white"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Email Address</h3>
                                                <p className="text-gray-600 mt-1">rmbcarrental86@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="bg-rentwheels-blue p-3 rounded-lg">
                                                <Clock className="text-white"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg">Business Hours</h3>
                                                <p className="text-gray-600 mt-1">
                                                    Mon-Fri: 8am - 8pm<br/>
                                                    Sat-Sun: 9am - 6pm
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8 border border-gray-100">
                                <h2 className="text-2xl font-bold text-rentwheels-gray-dark mb-6">
                                    Send Us a Message
                                </h2>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input id="name" name="name" placeholder="Your name" required={true}/>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" name="email" type="email" placeholder="Your email"
                                                   required={true}/>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" name="phone" placeholder="Your phone number" required={true}/>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input id="subject" name="subject" placeholder="How can we help you?"
                                               required={true}/>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us more about your inquiry"
                                            className="min-h-[120px]"
                                            required={true}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={state.submitting}
                                        className="w-full bg-rentwheels-blue hover:bg-rentwheels-blue-dark"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                {/*<section className="py-16 bg-gray-50">*/}
                {/*    <div className="container mx-auto px-4 md:px-6">*/}
                {/*        <div className="max-w-3xl mx-auto">*/}
                {/*            <h2 className="text-2xl md:text-3xl font-bold text-rentwheels-gray-dark text-center mb-12">*/}
                {/*                Frequently Asked Questions*/}
                {/*            </h2>*/}

                {/*            <div className="space-y-6">*/}
                {/*                {[*/}
                {/*                    {*/}
                {/*                        question: "What documents do I need to rent a car?",*/}
                {/*                        answer: "You'll need a valid driver's license, a major credit card in your name, and proof of insurance. International renters may need to provide a passport and international driver's permit."*/}
                {/*                    },*/}
                {/*                    {*/}
                {/*                        question: "Can I modify or cancel my reservation?",*/}
                {/*                        answer: "Yes, you can modify or cancel your reservation online or by contacting our customer service. Cancellations made at least 48 hours before pickup time are typically free of charge."*/}
                {/*                    },*/}
                {/*                    {*/}
                {/*                        question: "Is there a mileage limit on rentals?",*/}
                {/*                        answer: "Most of our standard rentals come with unlimited mileage. However, specialty vehicles and certain promotional rates may have mileage restrictions. The details will be clearly specified in your rental agreement."*/}
                {/*                    },*/}
                {/*                    {*/}
                {/*                        question: "What is your fuel policy?",*/}
                {/*                        answer: "We provide the vehicle with a full tank of fuel and expect it to be returned with a full tank. If the vehicle is not returned with a full tank, a refueling charge will apply."*/}
                {/*                    },*/}
                {/*                ].map((faq, index) => (*/}
                {/*                    <div key={index} className="bg-white rounded-lg p-6 shadow-sm">*/}
                {/*                        <h3 className="text-lg font-bold mb-2">{faq.question}</h3>*/}
                {/*                        <p className="text-gray-600">{faq.answer}</p>*/}
                {/*                    </div>*/}
                {/*                ))}*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
            </main>
            <Footer/>
        </>
    );
};

export default Contact;
