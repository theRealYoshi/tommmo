import React from 'react';
import {Link} from 'react-router';
import PaymentFormNonceStore from '../stores/PaymentFormNonceStore';
import PaymentFormNonceActions from '../actions/PaymentFormNonceActions';
import PaymentFormActions from '../actions/PaymentFormActions';

class PaymentFormNonce extends React.Component  {

  constructor(props) {
    super(props);
    this.state = PaymentFormNonceStore.getState();
    this._onChange = this._onChange.bind(this);

  }

  componentDidMount() {
    PaymentFormNonceStore.listen(this._onChange);
    PaymentFormNonceActions.getClientToken(function(clientToken){
      window.braintree.setup(clientToken, "dropin", {
        container: "payment-form",
        onPaymentMethodReceived: function (obj) {
          console.log(obj.details);
          var nonce = obj.nonce;
          if (nonce){
            PaymentFormActions.addPaymentNonce(obj.nonce);
          }
        },
        onError: function(obj){
          console.log(obj);
        }
      });
    });
  }

  componentWillUnmount() {
    PaymentFormNonceStore.unlisten(this._onChange);
  }

  _onChange(state){
    this.setState(state);
  }

  render() {
    return (
      <div>
        <div className="paymentFormNonce">
          <form id="checkout">
            <div id="payment-form"></div>
            <input type="submit" value="Validate"/>
          </form>
        </div>
        <script src="https://js.braintreegateway.com/js/braintree-2.21.0.min.js"></script>
      </div>
    );
  }
}
export default PaymentFormNonce;
