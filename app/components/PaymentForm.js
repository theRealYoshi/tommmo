import React from 'react';
import {Link} from 'react-router';
import PaymentFormStore from '../stores/PaymentFormStore';
import PaymentFormActions from '../actions/PaymentFormActions';

class PaymentForm extends React.Component  {

  constructor(props) {
    super(props);
    this.state = PaymentFormStore.getState();
    this._onChange = this._onChange.bind(this);

  }

  componentDidMount() {
    PaymentFormStore.listen(this._onChange);
    PaymentFormActions.getClientToken();
  }

  componentWillUnmount() {
    PaymentFormStore.unlisten(this._onChange);
  }

  _onChange(state){
    this.setState(state);
  }

  _formattedCreditCardNumber() {
    var numStr = this.state.creditCardNumber.toString();
    //regex for different formats and then add 000's until end
    if (numStr.length <= 4){
      return numStr;
    } else if (numStr.length > 4 && numStr.length < 8){
      return numStr.slice(0,4) + "-" + numStr.slice(4);
    } else if ( numStr.length >= 8 && numStr.length < 12) {
      return numStr.slice(0,4) + "-" + numStr.slice(4,8) + "-" + numStr.slice(8);
    } else {
      return numStr.slice(0,4) + "-" + numStr.slice(4,8) + "-" + numStr.slice(8,12) + "-" + numStr.slice(12);
    }
  }

  _formattedExpirationDate() {
    var numStr = this.state.expirationDate.toString();
    console.log(numStr);
    if (numStr.length <= 2){
      return numStr;
    } else {
      return numStr.slice(0,2) + "/" + numStr.slice(2,4);
    }
  }

  _handleSubmit(event) {
    event.preventDefault();
    var client = new window.braintree.api.Client({clientToken: this.state.clientToken});
    // do validations here or do the validations within the changed stated in react
    client.tokenizeCard({
      number: "4111111111111111",
      expirationDate: "10/20"
    }, function (err, nonce) {
      console.log(nonce);
      // Send nonce to your server
    });
    debugger;
  }

  render() {
    var creditCardNumber, expirationDate;
    if (this.state.creditCardNumber){
      creditCardNumber = this._formattedCreditCardNumber();
    } else {
      creditCardNumber = "";
    }
    var cvv = this.state.cvv;
    if (this.state.expirationDate){
      expirationDate = this._formattedExpirationDate();
    } else {
      expirationDate = "";
    }
    var postalCode = this.state.postalCode;

    return (
        <div className="paymentForm">
          <form className="paymentForm" id="checkout" onSubmit={this._handleSubmit.bind(this)}>
            <input data-braintree-name="number" placeholder="4111-1111-1111-1111"
              onChange={PaymentFormActions.updateCreditCardNumber}
              value={creditCardNumber}
              maxLength="19"/>

            <input data-braintree-name="cvv" placeholder="100"
              onChange={PaymentFormActions.updateCVV}
              value={cvv}
              maxLength="4"/>

            <input data-braintree-name="expiration_date" placeholder="10/20"
              onChange={PaymentFormActions.updateExpirationDate}
              value={expirationDate}
              maxLength="5"/>

            <input data-braintree-name="postal_code" placeholder="94107"
              onChange={PaymentFormActions.updatePostalCode}
              value={postalCode}
              maxLength="5"/>

            <input data-braintree-name="cardholder_name" placeholder="John Smith"/>

            <button type="submit" id="submit" value="Pay" onClick={this._handleSubmit.bind(this)}>Pay</button>
          </form>
          <script src="https://js.braintreegateway.com/js/braintree-2.21.0.min.js"></script>
        </div>
    );
  }
}

export default PaymentForm;
