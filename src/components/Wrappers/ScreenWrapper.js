import React from 'react';

const ScreenWrapper = ({ children }) => {
    return (
        <div style={{ border: '0px solid red', zIndex: 2000, margin: '72px 0 0 0' }}>
            {children}
        </div>
    );
};

export default ScreenWrapper;