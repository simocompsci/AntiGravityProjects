import React from 'react';
import { Search } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to plan your perfect trip?
                </h2>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                    Join thousands of travelers who are saving time and experiencing more.
                </p>

                <div className="bg-white p-2 rounded-full shadow-xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-2">
                    <div className="flex-1 flex items-center px-4 py-3 w-full">
                        <Search className="text-slate-400 w-5 h-5 mr-3" />
                        <input
                            type="text"
                            placeholder="Where do you want to go?"
                            className="w-full outline-none text-slate-700 placeholder:text-slate-400 text-lg"
                        />
                    </div>
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/30 w-full sm:w-auto whitespace-nowrap">
                        Start Planning
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
