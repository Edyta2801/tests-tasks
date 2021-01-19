import React from 'react';

export default class Button extends React.Component {
    state = { color: 'blue', counter: 0 }

    static efaultProps = {
        label: 'OK'
    }

    handleClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        if (this.state.counter === 5) {
            throw new Error('Za duża liczba');
        }
        return <button onClick={this.handleClick}>{this.props.label}
            <span> {this.state.counter}</span>
        </button>;
    }
}
