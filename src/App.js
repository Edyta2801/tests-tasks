import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import ErrorBoundary from './ErrorBoundary.js'
import Button from './components/Button';



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
  const
   [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((response) => setUsers(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <ErrorBoundary>
        <div>Hello tests !!!</div>
        <Button 
        label='Click me'
        />

        {/* {users.map((user) =>
          <User key={user.login.uuid}

            firstName={user.name.first}
            lastName={user.name.last}
            email={user.email}
            phone={user.phone}

          />
        )} */}
      </ErrorBoundary>
    </div>
  );
}

export default App;
