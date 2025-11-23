import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
            >
                <span className="text-lg font-semibold text-slate-900">{question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-slate-500" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-600 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Is TripPlanner AI free to use?",
            answer: "Yes, our core trip planning features are completely free. We also offer premium features for power users who want even more customization and offline capabilities."
        },
        {
            question: "How does the AI generate itineraries?",
            answer: "Our AI analyzes millions of data points including travel reviews, location data, and your personal preferences to create a unique, optimized itinerary just for you."
        },
        {
            question: "Can I collaborate with friends?",
            answer: "Absolutely! You can invite friends and family to your trip plan, allowing everyone to suggest activities and vote on the itinerary."
        },
        {
            question: "Does it work for multi-city trips?",
            answer: "Yes, TripPlanner AI excels at complex multi-city itineraries. Just enter all your destinations and dates, and we'll help you organize the logistics."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="space-y-2">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
