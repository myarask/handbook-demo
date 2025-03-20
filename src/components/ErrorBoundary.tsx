import { Component, ErrorInfo } from "react";
import type {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from "./ErrorBoundary.types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  // Lifecycle method to catch errors in any child components
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  // Lifecycle method to log error details
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Here, you can also log the error to an external service like Sentry, LogRocket, etc.
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any fallback UI here
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
