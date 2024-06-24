import React from 'react';

function Dial() {
    return (
        <div className="relative w-48 h-48 rounded-full bg-gray-800">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gray-900" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-purple-200" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gray-800" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-purple-200" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-20 bg-white" />

            <div className="absolute bottom-4 text-center text-sm text-white">
                <span className="w-16">LOW</span>
                <span className="w-16 ml-auto">HIGH</span>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm text-white">
                MEDIUM
            </div>
        </div>
    );
}

export default Dial;