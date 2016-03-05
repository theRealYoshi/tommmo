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
    console.log('braintree setup called');
    window.braintree.setup(this.state.clientToken, "custom", {id: "checkout"});
  }

  componentWillUnmount() {
    PaymentFormStore.unlisten(this._onChange);
  }

  _onChange(state){
    this.setState(state);
  }

  _handleSubmit(event) {
    event.preventDefault();
    var client = new window.braintree.api.Client({clientToken: this.state.clientToken});
    // do validations here or do the validations within the changed stated in react
    debugger;
  }

  render() {
    return (
        <div className="paymentForm">
          <form className="paymentForm" id="checkout" onSubmit={this._handleSubmit.bind(this)}>
            <input data-braintree-name="number" placeholder="4111111111111111"/>
            <input data-braintree-name="cvv" placeholder="100"/>

            <input data-braintree-name="expiration_date" placeholder="10/20"/>

            <input data-braintree-name="expiration_month" placeholder="10"/>
            <input data-braintree-name="expiration_year" placeholder="2020"/>

            <input data-braintree-name="postal_code" placeholder="94107"/>
            <input data-braintree-name="cardholder_name" placeholder="John Smith"/>

            <button type="submit" id="submit" value="Pay" onClick={this._handleSubmit.bind(this)}/>
          </form>
          <script src="https://js.braintreegateway.com/js/braintree-2.21.0.min.js"></script>
        </div>
    );
  }
}

export default PaymentForm;
