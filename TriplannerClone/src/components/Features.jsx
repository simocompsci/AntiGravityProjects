import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Clock, Users, Wallet, Smartphone, Map } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Sparkles className="w-6 h-6 text-white" />,
            title: "Personalized Itineraries",
            description: "AI-crafted plans tailored to your unique interests and travel style.",
            color: "bg-purple-500"
        },
        {
            icon: <Clock className="w-6 h-6 text-white" />,
            title: "Save Time",
            description: "Skip hours of research. Get a complete plan in seconds.",
            color: "bg-blue-500"
        },
        {
            icon: <Users className="w-6 h-6 text-white" />,
            title: "Easy Collaboration",
            description: "Invite friends and family to plan and edit the trip together.",
            color: "bg-orange-500"
        },
        {
            icon: <Wallet className="w-6 h-6 text-white" />,
            title: "Budget Management",
            description: "Track expenses and stay within your budget effortlessly.",
            color: "bg-green-500"
        },
        {
            icon: <Smartphone className="w-6 h-6 text-white" />,
            title: "Offline Access",
            description: "Access your itinerary anywhere, even without internet.",
            color: "bg-pink-500"
        },
        {
            icon: <Map className="w-6 h-6 text-white" />,
            title: "Smart Recommendations",
            description: "Discover hidden gems and local favorites you might miss.",
            color: "bg-indigo-500"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Everything you need for the perfect trip
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Powerful features to help you plan, organize, and enjoy your travels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                        >
                            <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-opacity-20`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
