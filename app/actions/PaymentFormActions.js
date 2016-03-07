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

  createTransaction(data){
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

}

export default alt.createActions(PaymentFormActions);
