import React from "react";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-container" role="alert">
      <p className="error-number">504</p>
      <pre className="error-message">{error.message}</pre>
      <button onClick={resetErrorBoundary} className="error-button">
        Try Again
      </button>
    </div>
  );
};

export default ErrorFallback;
