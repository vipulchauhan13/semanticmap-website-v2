'use client';

import React from 'react';

const Terms = () => {
    return (
        <div className="w-full h-screen">
            <iframe
                src="/terms.pdf"
                className="w-full h-full border-none"
            />
        </div>
    );
};

export default Terms;
