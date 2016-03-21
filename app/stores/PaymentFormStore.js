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
  }

  onAddCreateTransactionFail(data){
    toastr.error(data.responseText);
  }

  onAddPaymentNonce(nonce){
    this.nonce = nonce;
    console.log("nonce added");
  }

  onFormValidationError(data){
    toastr.error(data);
  }

  onUpdateCreditCardNumber(event){
    var cc = event.target.value.replace(/[^\d]/g,"");
    if(isNaN(cc) || cc == this.creditCardNumber){
      toastr.error("Please enter numbers only");
    } else {
      this.creditCardNumber = cc;
    }
  }

  onUpdateCVV(event){
    var cvv = event.target.value.replace(/[^\d]/g,"");
    if(isNaN(cvv) || cvv == this.cvv){
      toastr.error("Please enter numbers only");
    } else {
      this.cvv = cvv;
    }
  }

  onUpdateExpirationDate(event){
    var exp = event.target.value.replace(/[^\d]/g,"");
    if(isNaN(exp) || exp == this.expirationDate){
      toastr.error("Please enter numbers only");
    } else {
      this.expirationDate = exp;
    }
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
