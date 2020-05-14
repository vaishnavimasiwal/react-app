import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './navbarComponent';

class PersonList extends Component {
    state = {
        persons: []
      }
    
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    
      render() {
        return (
            <div>
                <Navbar />
                <ul>
                    { this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>
          </div>
        )
      }
 
}
export default PersonList;