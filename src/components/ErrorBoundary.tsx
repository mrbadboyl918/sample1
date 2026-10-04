import { Component } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md text-center">
            <h1 className="font-poppins font-bold text-2xl text-gray-900 mb-3">
              Something went wrong
            </h1>
            <p className="text-gray-500 text-sm mb-6">
              The page couldn't load properly. Please try refreshing.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-violet-700 hover:bg-violet-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
