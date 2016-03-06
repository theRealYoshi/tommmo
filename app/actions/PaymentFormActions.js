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
      'updatePostalCode'
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

}

export default alt.createActions(PaymentFormActions);
