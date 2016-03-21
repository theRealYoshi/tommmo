import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';
import PaymentFormNonce from './PaymentFormNonce';
import PaymentForm from './PaymentForm';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <div className="header-container">
          <h1>Services Available:</h1>
          <ul>
            <li>Website Development Services - $1000+</li>
            <li>Marketing Analysis Consultancy Services - $1000+</li>
            <li>Digital Marketing Consultancy Services - $500+</li>
          </ul>
          <p>*Prices vary depending on scope and complexity on a per project basis</p>
        </div>
        <div className='row'>
          <h1>Contact Information:</h1>
          <ul>
            <li>Email: <a href="mailto:support@tommmo.com">support@tommmo.com</a></li>
            <li>Phone Number: 323-375-4476</li>
          </ul>
        </div>
        <h1>Payment Form</h1>
        <div className='row'>
          <PaymentFormNonce />
        </div>
        <div className='row'>
          <PaymentForm />
        </div>
        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#refundPolicyModal">
          Refund Policy
        </button>
        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#privacyPolicyModal">
          Privacy Policy
        </button>
        <div className="modal fade" id="refundPolicyModal" tabindex="-1" role="dialog" aria-labelledby="refundPolicyLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="refundPolicyLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="privacyPolicyModal" tabindex="-1" role="dialog" aria-labelledby="privacyPolicyModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="privacyPolicyModal">Modal title</h4>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
