import React from 'react';

function WavyHand() {
    return (
        <div className="flex text-4xl  sm:text-6xl justify-center items-center">
            <span className="w-20 h-20 text-yellow-500 animate-wave">
                👋🏻
            </span>

            <style jsx>{`
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(-15deg);
          }
          40% {
            transform: rotate(10deg);
          }
          60% {
            transform: rotate(-15deg);
          }
          80% {
            transform: rotate(10deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-wave {
          animation: wave 1.5s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
        </div>
    );
}

export default WavyHand;
