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
          <PaymentForm history={this.props.history}/>
        </div>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#refundPolicyModal">
          Refund Policy
        </button>
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#privacyPolicyModal">
          Privacy Policy
        </button>
        <div className="modal fade" id="refundPolicyModal" tabindex="-1" role="dialog" aria-labelledby="refundPolicyLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="refundPolicyLabel">Refund Policy</h4>
              </div>
              <div className="modal-body">
                <p>You can cancel your service at any time. There are no cancellation fees, though no refunds are provided for services previously rendered.</p>
                <p>Any project cancelled mid-project will be charged a prorated amount based on the number of hours worked on that specific project.</p>
                <p>For more information regarding the refund policy, please contact us at <a href="mailto:support@tommmo.com">support@tommmo.com</a> or at 323-375-4476</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="privacyPolicyModal" tabindex="-1" role="dialog" aria-labelledby="privacyPolicyModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="privacyPolicyModal">Privacy Policy</h4>
              </div>
              <div className="modal-body">
                <p>Last updated: March 21, 2016</p>
                <p>Tommmo Consulting ("us", "we", or "our") operates the www.tommmo.com website (the "Service").</p>
                <p>This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.</p>
                <p>We will not use or share your information with anyone except as described in this Privacy Policy.</p>
                <p>We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at www.tommmo.com</p>
                <p><strong>Information Collection And Use</strong></p>
                <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you.</p>
                <p><strong>Log Data</strong></p>
                <p>We collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computers Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
                <p><strong>Cookies</strong></p>
                <p>Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computers hard drive.</p>
                <p>We use <b>cookies</b> to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</p>
                <p><strong>Service Providers</strong></p>
                <p>We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</p>
                <p>These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                <p><strong>Security</strong></p>
                <p>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</p>
                <p><strong>Links To Other Sites</strong></p>
                <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third partys site. We strongly advise you to review the Privacy Policy of every site you visit.</p>
                <p>We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                <p><strong>Childrens Privacy</strong></p>
                <p>Our Service does not address anyone under the age of 13 ("Children").</p>
                <p>We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Information, please contact us. If we discover that a Children under 13 has provided us with Personal Information, we will delete such information from our servers immediately.</p>
                <p><strong>Changes To This Privacy Policy</strong></p>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
                <p><strong>Contact Us</strong></p>
                <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@tommmo.com">support@tommmo.com</a></p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
