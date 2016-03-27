import alt from '../alt';
import {assign} from 'underscore';

class PaymentFormNonceActions {
  constructor() {
    this.generateActions(
      "addClientTokenSuccess",
      "addClientTokenFail"
    )
  }

  getClientToken(setupDropinContainer){
    $.ajax({
      type: 'GET',
      url: '/api/braintree/client_token'
    })
    .done((clientToken) => {
      this.actions.addClientTokenSuccess(clientToken);
      setupDropinContainer(clientToken);
    })
    .fail((data) => {
      this.actions.addClientTokenFail(data);
    });
  }

}

export default alt.createActions(PaymentFormNonceActions);
