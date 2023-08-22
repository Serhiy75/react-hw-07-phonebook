import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';

export class App extends Component {
 state = {
  contacts: [],
  filter: ''
}
  render() {
    return(
      <div>
        <Phonebook/>
      </div>
    )
  }
}
