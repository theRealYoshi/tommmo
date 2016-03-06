import alt from '../alt';
import PaymentFormActions from '../actions/PaymentFormActions';

class PaymentFormStore {
  constructor() {
    this.bindActions(PaymentFormActions);
    this.clientToken = '';
    this.creditCardNumber = '';
    this.cvv = '';
    this.expirationDate = '';
    this.paymentAmount = '';
    this.postalCode = '';
  }

  onAddClientTokenSuccess(data){
    this.clientToken = data;
  }

  onAddClientTokenFail(data){
    toastr.error(data.responseText);
  }

  onUpdateCreditCardNumber(event){
    var cc = event.target.value.replace(/[^\d]/g,"");
    if(isNaN(cc)){
      toastr.error("Please enter numbers only");
    } else {
      this.creditCardNumber = cc;
    }
  }

  onUpdateCVV(event){
    var cvv = event.target.value.replace(/[^\d]/g,"");
    if(isNaN(cvv)){
      toastr.error("Please enter numbers only");
    } else {
      this.cvv = cvv;
    }
  }

  onUpdateExpirationDate(event){
    var exp = event.target.value.replace(/[^\d]/g,"");
    if(isNaN(exp)){
      toastr.error("Please enter numbers only");
    } else {
      this.expirationDate = exp;
    }
  }

  onUpdatePaymentAmount(event){
    var payment = parseInt(event.target.value.replace(/[^\d]/g,"")).toString();
    console.log("this is the store");
    console.log(payment);
    if(isNaN(payment)){
      toastr.error("Please enter numbers only");
    } else {
      this.paymentAmount = payment;
    }
  }

  onUpdatePostalCode(event){
    var pc = event.target.value.replace(/[^\d]/g,"");
    if(isNaN(pc)){
      toastr.error("Please enter numbers only");
    } else {
      this.postalCode = pc;
    }
  }
}

export default alt.createStore(PaymentFormStore);
