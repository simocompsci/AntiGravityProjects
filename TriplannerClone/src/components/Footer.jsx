import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <a href="/" className="flex items-center gap-2 mb-6">
                            <img
                                src="https://tripplanner.ai/logo.png"
                                alt="Trip Planner AI"
                                className="h-8 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'block';
                                }}
                            />
                            <span className="text-xl font-bold text-slate-900 hidden" style={{ display: 'none' }}>TripPlanner.ai</span>
                        </a>
                        <p className="text-slate-500 mb-6">
                            Your personal AI travel assistant. Plan, customize, and enjoy your perfect trip in minutes.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-600 hover:text-emerald-500 transition-colors">Features</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-emerald-500 transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-emerald-500 transition-colors">App</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-emerald-500 transition-colors">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-600 hover:text-emerald-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-emerald-500 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-emerald-500 transition-colors">Blog</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-emerald-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-slate-600 hover:text-emerald-500 transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-emerald-500 transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-slate-600 hover:text-emerald-500 transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} TripPlanner AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Globe size={16} />
                        <span>English (US)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
