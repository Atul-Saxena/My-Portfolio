import React, { useState, useEffect } from 'react';

const AnimatedSkills = () => {
    const headlines = [
        "MERN Stack Developer.",
        "Problem Solving Skillset.",
        "Worked with Next JS.",
        "Data Structure with C++.",
    ];

    const [currentHeadline, setCurrentHeadline] = useState(0);
    const [fade, setFade] = useState(true);

    // Cycle through headlines every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade-out transition
            setTimeout(() => {
                setCurrentHeadline((prev) => (prev + 1) % headlines.length); // Change headline
                setFade(true); // Start fade-in transition
            }, 500); // Time to change the headline (matches the fade-out duration)
        }, 2000); // Time between each transition
        return () => clearInterval(interval);
    }, [headlines.length]);

    return (
        <div className="flex justify-center items-center mt-5">
            <h1 className={`text-4xl font-bold text-gray-400 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                {headlines[currentHeadline]}
            </h1>
        </div>
    );
}

export default AnimatedSkills