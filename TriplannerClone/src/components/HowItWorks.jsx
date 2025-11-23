import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Sliders, Plane } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <MapPin className="w-8 h-8 text-emerald-500" />,
            title: "Enter your destination",
            description: "Tell us where you want to go and when. We'll handle the rest."
        },
        {
            icon: <Sliders className="w-8 h-8 text-emerald-500" />,
            title: "Customize your plan",
            description: "Adjust your preferences for budget, interests, and pace."
        },
        {
            icon: <Plane className="w-8 h-8 text-emerald-500" />,
            title: "Enjoy your trip",
            description: "Get a day-by-day itinerary optimized for your travel style."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        How it works
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Planning your dream vacation has never been easier.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 shadow-sm relative z-10">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
