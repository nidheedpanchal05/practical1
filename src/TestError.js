import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class TestError extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shouldCrash: false};
    }

    makeItCrash() {
        this.setState({shouldCrash: true});
    }
    throwError() {
        
    }

    render() {
        if (this.state.shouldCrash) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return (
        <button className="btn" type="button" onClick={this.makeItCrash.bind(this)}>Crash it</button>
        )
    }
}

function ErrorPage() {
    return (
        <div>
            <p>
                <b>
                    This is an example of error boundaries in React.
                </b>
            </p>
            <ErrorBoundary>
                <TestError/>
            </ErrorBoundary>
        </div>
    );
}


export default ErrorPage;
