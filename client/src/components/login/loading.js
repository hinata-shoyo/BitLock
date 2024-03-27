import React from 'react';

const LoadingOverlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
        zIndex: 9999, // Ensure it's on top of other elements
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div></div>
    </div>
  );
}

export default LoadingOverlay;
