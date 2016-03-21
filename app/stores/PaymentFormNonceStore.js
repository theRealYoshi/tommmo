import alt from '../alt';
import PaymentFormNonceActions from '../actions/PaymentFormNonceActions';

class PaymentFormNonceStore {
  constructor() {
    this.bindActions(PaymentFormNonceActions);
    this.clientToken = '';
    this.nonce = '';
  }

  onAddClientTokenSuccess(data){
    this.clientToken = data;
  }

  onAddClientTokenFail(data){
    toastr.error(data.responseText);
  }

  
}

export default alt.createStore(PaymentFormNonceStore);
