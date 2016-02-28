import alt from '../alt';
import NavbarActions from '../actions/NavbarActions';

class NavbarStore {
  constructor() {
    this.bindActions(NavbarActions);
    this.profileImgs = [];
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
    this.shake = false;
    this.emails = [];
  }

  onGetGiphySuccess(payload) {
    this.profileImgs = payload.data;
  }

  onGetGiphyFail(payload) {
    this.shake = true;
    toastr.error(payload.responseText);
  }

  onRemoveShake(){
    setTimeout(() => {
      this.shake = false;
    }, 1000);
  }

  onKeepInput(email){
    var emailString = window.localStorage.getItem('allemails');
    if (emailString){
      window.localStorage.setItem('allemails', emailString + "," + email);
    } else {
      window.localStorage.setItem('allemails', email);
    }
    //this.emails.push(email);
  }

  onUpdateAjaxAnimation(className) {
    this.ajaxAnimationClass = className; //fadein or fadeout
  }

  onUpdateSearchQuery(event) {
    this.searchQuery = event.target.value;
  }

  onReRenderPage() {
    this.profileImgs = [];
    this.searchQuery = "";
  }

  onClearGifs() {
    this.profileImgs = [];
  }
}

export default alt.createStore(NavbarStore);
