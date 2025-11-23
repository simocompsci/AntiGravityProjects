import React from 'react';

const TrustedBy = () => {
    const companies = [
        { name: 'TechCrunch', logo: 'https://placehold.co/150x50?text=TechCrunch' },
        { name: 'Forbes', logo: 'https://placehold.co/150x50?text=Forbes' },
        { name: 'TravelWeekly', logo: 'https://placehold.co/150x50?text=TravelWeekly' },
        { name: 'Skift', logo: 'https://placehold.co/150x50?text=Skift' },
        { name: 'PhocusWire', logo: 'https://placehold.co/150x50?text=PhocusWire' },
    ];

    return (
        <div className="py-12 bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider mb-8">
                    Trusted by travelers from
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company, index) => (
                        <img
                            key={index}
                            src={company.logo}
                            alt={company.name}
                            className="h-8 md:h-10 w-auto object-contain hover:opacity-100 transition-opacity"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
