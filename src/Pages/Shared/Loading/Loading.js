import React from 'react';

const Loading = () => {
    return (
        <div>
            <svg className="animate-bounce w-6 h-6 ...">
                <span className='visually-hidden'>...</span>
            </svg>
        </div>
    );
};

export default Loading;