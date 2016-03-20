import alt from '../alt';
import {assign} from 'underscore';

class PaymentFormActions {
  constructor() {
    this.generateActions(
      'addCreateTransactionSuccess',
      'addCreateTransactionFail',
      'updateCreditCardNumber',
      'updateCVV',
      'updateExpirationDate',
      'updateFullName',
      'updatePaymentAmount',
      'updatePostalCode',
      'formValidationError',
      "addPaymentNonce"
    );
  }

  createTransaction(payload){
    $.ajax({
      type: 'POST',
      url: '/api/braintree/transaction',
      data: {
              amount: payload.amount,
              nonce: payload.nonce
            }
    })
    .done((data) => {
      console.log("success");
      this.actions.addCreateTransactionSuccess(data);
      // set success parameters. Redirect?
    })
    .fail((data) => {
      console.log("fail");
      this.actions.addCreateTransactionFail(data);
    });
  }

}

export default alt.createActions(PaymentFormActions);
