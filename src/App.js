import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';


class Button extends React.Component {
  state = { color: 'blue' }

  static efaultProps = {
    label: 'OK'
  }

  render() {
    return <button>{this.props.label}</button>
  }
}

function User({ firstName, lastName, email, phone }) {
  return (
    <div>
      <h2>{firstName} {lastName}</h2>
      <p>{email} {phone}</p>
    </div>
  )
}
User.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string
  })

}


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => setUsers(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <div>Hello tests !!!</div>
      <Button label='Click me' />

      {users.map((user) =>
        <User key={user.login.uuid}

          firstName={user.name.first}
          lastName={user.name.last}
          email={user.email}
          phone={user.phone}

        />
      )}
    </div>
  );
}

export default App;
