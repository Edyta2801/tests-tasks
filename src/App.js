import './App.css';
import React from 'react';

class Button extends React.Component {
  state = { color: 'blue' }

  static efaultProps = {
    label: 'OK'
  }

  render() {
    return <button>{this.props.label}</button>
  }
}



function App() {
  return (
    <div className="App">
      <div>Hello tests !!!</div>
      <Button label='Click me' />
    </div>
  );
}

export default App;
