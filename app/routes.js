import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import PaymentConfirm from './components/PaymentConfirm';


export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/paymentConfirm' component={PaymentConfirm} />
  </Route>
);
