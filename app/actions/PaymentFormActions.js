import alt from '../alt';
import {assign} from 'underscore';

class PaymentFormActions {
  constructor() {
    this.generateActions(
      'addClientTokenSuccess',
      'addClientTokenFail',
      'updateCreditCardNumber',
      'updateCVV',
      'updateExpirationDate',
      'updateFullName',
      'updatePaymentAmount',
      'updatePostalCode',
      'formValidationError'
    );
  }

  getClientToken(){
    $.ajax({
      type: 'GET',
      url: '/api/braintree/client_token'
    })
    .done((data) => {
      this.actions.addClientTokenSuccess(data);
    })
    .fail((data) => {
      this.actions.addClientTokenFail(data);
    });
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
      console.log(data);
    })
    .fail((data) => {
      console.log("fail");
    });
  }

}

export default alt.createActions(PaymentFormActions);
