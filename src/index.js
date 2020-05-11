import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counters from './components/countersComponent';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

// const name='Vaishnavi';
// const element = <h1>Hello, {name}</h1>

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Vaishnavi',
//   lastName: 'Masiwal'
// };

// const element = (
//   <h1>
//     Hello, {formatName(user)}
//   </h1>
// );

ReactDOM.render(
  <BrowserRouter>
    <Counters />
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
