import React from 'react';
import { motion } from 'motion/react';
import { Search, Calendar } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image/Video Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white z-10" />
                <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80"
                    alt="Travel Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-tight">
                        Save Hours Planning<br />
                        <span className="text-emerald-400">Your Next Trip</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
                        Build, personalize, and optimize your itineraries with our free AI trip planner. Designed for vacations, workations, and everyday adventures.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="bg-white p-2 rounded-full shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2"
                >
                    <div className="flex-1 flex items-center px-4 py-3 w-full">
                        <Search className="text-slate-400 w-5 h-5 mr-3" />
                        <input
                            type="text"
                            placeholder="Where to? (e.g., Paris, Hawaii, Japan)"
                            className="w-full outline-none text-slate-700 placeholder:text-slate-400 text-lg"
                        />
                    </div>

                    <div className="hidden md:block w-px h-10 bg-slate-200"></div>

                    <div className="flex-1 flex items-center px-4 py-3 w-full border-t md:border-t-0 border-slate-100">
                        <Calendar className="text-slate-400 w-5 h-5 mr-3" />
                        <input
                            type="text"
                            placeholder="Dates (Optional)"
                            className="w-full outline-none text-slate-700 placeholder:text-slate-400 text-lg"
                        />
                    </div>

                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/30 w-full md:w-auto whitespace-nowrap">
                        Plan my trip
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-12 flex justify-center gap-8"
                >
                    {/* Social Proof / Trusted By Placeholders could go here or in next section */}
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
