import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-10 w-10 border-t-5 border-b-4 border-green-500"></div>
    </div>
  );
};

export default LoadingSpinner;