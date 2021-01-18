import './App.css';
import React, { useEffect, useState } from 'react';

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
  const [users, setUsers]=useState([]);

  useEffect(()=>{
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => setUsers(response.data.results));
  }, []);

  return (
    <div className="App">
      <div>Hello tests !!!</div>
      <Button label='Click me' />
    </div>
  );
} 

export default App;
