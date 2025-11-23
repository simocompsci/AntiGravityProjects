import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center gap-2">
                            <img
                                src="https://tripplanner.ai/logo.png"
                                alt="Trip Planner AI"
                                className="h-8 w-auto"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="text-xl font-bold text-slate-900 hidden" style={{ display: 'none' }}>TripPlanner.ai</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                            Community Trips
                        </a>
                        <a href="#" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                            Destinations
                        </a>
                        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/20">
                            Create a new trip
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-slate-900 p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col">
                            <a href="#" className="text-slate-600 hover:text-slate-900 font-medium text-lg">
                                Community Trips
                            </a>
                            <a href="#" className="text-slate-600 hover:text-slate-900 font-medium text-lg">
                                Destinations
                            </a>
                            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full font-medium w-full">
                                Create a new trip
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
