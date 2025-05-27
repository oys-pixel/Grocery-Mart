import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./Errorfallback";

const ErrorWrapper = ({ children }) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorWrapper;
