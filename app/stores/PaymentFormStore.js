import alt from '../alt';
import PaymentFormActions from '../actions/PaymentFormActions';

class PaymentFormStore {
  constructor() {
    this.bindActions(PaymentFormActions);
    this.fullName = '';
    this.paymentAmount = '';
    this.postalCode = '';
    this.nonce = '';
  }

  onAddCreateTransactionSuccess(data){
    // remove the cc info from state;
    this.fullName = '';
    this.paymentAmount = '';
    this.postalCode = '';
    data.history.pushState(null, "/paymentConfirm");
  }

  onAddCreateTransactionFail(data){
    toastr.error(data.message.responseText);
    setTimeout(function(){
      window.location.reload();
    }, 3000);
  }

  onAddPaymentNonce(nonce){
    this.nonce = nonce;
    console.log("nonce added");
  }

  onFormValidationError(data){
    toastr.error(data);
  }

  onUpdateFullName(event){
    var name = event.target.value;
    var notSpace = false;
    if(name.match(/[\W+\d+]/g)){
      var regExpArr = name.match(/[\W+\d+]/g);
      // if not all spaces
      regExpArr.forEach(function(nonLetter){
        if (nonLetter != " "){
          toastr.error("Please enter letters only");
          notSpace = true;
          return;
        }
      })
    }
    if(!notSpace){
      this.fullName = name;
    }
  }

  onUpdatePaymentAmount(event){
    var payment = parseInt(event.target.value.replace(/[^\d]/g,"")).toString();
    if(isNaN(payment)){
      toastr.error("Please enter numbers only");
    } else {
      this.paymentAmount = payment;
    }
  }

  onUpdatePostalCode(event){
    var pc = event.target.value.replace(/[^\d]/g,"");
    if(isNaN(pc) || pc == this.postalCode){
      toastr.error("Please enter numbers only");
    } else {
      this.postalCode = pc;
    }
  }
}

export default alt.createStore(PaymentFormStore);
