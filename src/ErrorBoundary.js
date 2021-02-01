import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: '',
            errorInfo: '',
            hasError: false,
        };
    }

    componentDidCatch(error, errorInfo) {
        //logErrorToMyService(error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
      }

    render() {
        if (this.state.errorInfo) {
            return (
            <div>
                <h2>Something went wrong.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componentStack}
                </details>
            </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;