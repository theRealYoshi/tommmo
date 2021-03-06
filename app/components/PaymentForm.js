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
    } else if (numStr.length > 4 && numStr.length <= 8){
      return numStr.slice(0,4) + "-" + numStr.slice(4);
    } else if ( numStr.length > 8 && numStr.length <= 12) {
      return numStr.slice(0,4) + "-" + numStr.slice(4,8) + "-" + numStr.slice(8);
    } else {
      return numStr.slice(0,4) + "-" + numStr.slice(4,8) + "-" + numStr.slice(8,12) + "-" + numStr.slice(12);
    }
  }

  _formattedExpirationDate() {
    var numStr = this.state.expirationDate.toString();
    if (numStr.length <= 2){
      return numStr;
    } else {
      return numStr.slice(0,2) + "/" + numStr.slice(2,4);
    }
  }

  _formattedPaymentAmount(){
    var numStr = parseInt(this.state.paymentAmount).toString();
    if (numStr == "0" || numStr == "00" ){
      return "";
    } else if (numStr.length == 1){
      return "$0.0" + numStr;
    } else if (numStr.length == 2){
      return "$0." + numStr;
    } else {
      return "$" + numStr.slice(0,numStr.length - 2) + "." + numStr.slice(numStr.length - 2);
    }
  }

  _handleSubmit(event) {
    event.preventDefault();
    // do validations here or do the validations within the changed stated in react
    var paymentAmount = this.state.paymentAmount;
    var name = this.state.fullName;
    var fullName = this.state.fullName;
    var postalCode = this.state.postalCode;
    var nonce = this.state.nonce;

    if (paymentAmount == ("0" || "")){
      console.log("payment failed");
      PaymentFormActions.formValidationError("Payment Amount Invalid");
    } else if (fullName.length < 5 || fullName.split(" ").length != 2){
      console.log("fullname failed");
      PaymentFormActions.formValidationError("Please Enter a Valid Name");
    } else if (postalCode.length < 5){
      console.log("postal failed");
      PaymentFormActions.formValidationError("Please Enter a Valid Postal Code");
    } else if (!nonce){
      console.log("nonce failed");
      PaymentFormActions.formValidationError("Please Enter a Valid Credit Card");
    } else {
      PaymentFormActions.createTransaction({
        amount: paymentAmount,
        nonce: nonce,
        history: this.props.history
      });
    }
  }

  render() {
    var paymentAmount;
    if (this.state.paymentAmount){
      paymentAmount = this._formattedPaymentAmount();
    } else {
      paymentAmount = "";
    }
    var fullName = this.state.fullName;
    var postalCode = this.state.postalCode;

    return (
        <div className="paymentForm">
          <form className="paymentForm" id="checkout" onSubmit={this._handleSubmit.bind(this)} autoComplete="off">
            <label>Payment Amount:</label>
            <input onChange={PaymentFormActions.updatePaymentAmount}
              value={paymentAmount}/>

            <label>Full Name:</label>
            <input data-braintree-name="cardholder_name" placeholder="John Smith"
              onChange={PaymentFormActions.updateFullName}
              value={fullName}/>

            <label>Postal Code:</label>
            <input data-braintree-name="postal_code" placeholder="94107"
              onChange={PaymentFormActions.updatePostalCode}
              value={postalCode}
              maxLength="5"/>

            <button type="submit" id="submit" value="Pay" onClick={this._handleSubmit.bind(this)}>Pay</button>
          </form>
        </div>
    );
  }
}

export default PaymentForm;
