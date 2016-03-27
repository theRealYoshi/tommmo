import React from 'react';
import {Link} from 'react-router';
// import PaymentConfirmStore from '../stores/PaymentConfirmStore';
// import PaymentConfirmActions from '../actions/PaymentConfirmActions';

class PaymentConfirm extends React.Component  {

  render() {
    return (
      <div>
        <h1>Thank you for your payment submission!</h1>
        <p>For more information please visit <Link to="www.yoshihiroluk.co">www.yoshihiroluk.co</Link></p>
      </div>
    );
  }
}

export default PaymentConfirm;
