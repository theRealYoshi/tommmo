(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeActions = function HomeActions() {
  _classCallCheck(this, HomeActions);

  this.generateActions();
};

exports.default = _alt2.default.createActions(HomeActions);

},{"../alt":5,"underscore":"underscore"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function NavbarActions() {
  _classCallCheck(this, NavbarActions);

  this.generateActions();
};

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":5,"underscore":"underscore"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaymentFormActions = function () {
  function PaymentFormActions() {
    _classCallCheck(this, PaymentFormActions);

    this.generateActions('addCreateTransactionSuccess', 'addCreateTransactionFail', 'updateCreditCardNumber', 'updateCVV', 'updateExpirationDate', 'updateFullName', 'updatePaymentAmount', 'updatePostalCode', 'formValidationError', "addPaymentNonce");
  }

  _createClass(PaymentFormActions, [{
    key: 'createTransaction',
    value: function createTransaction(payload, cb) {
      var _this = this;

      $.ajax({
        type: 'POST',
        url: '/api/braintree/transaction',
        data: {
          amount: payload.amount,
          nonce: payload.nonce
        }
      }).done(function (data) {
        _this.actions.addCreateTransactionSuccess(data);
        cb();
        // set success parameters. Redirect?
      }).fail(function (data) {
        console.log("fail");
        _this.actions.addCreateTransactionFail(data);
      });
    }
  }]);

  return PaymentFormActions;
}();

exports.default = _alt2.default.createActions(PaymentFormActions);

},{"../alt":5,"underscore":"underscore"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaymentFormNonceActions = function () {
  function PaymentFormNonceActions() {
    _classCallCheck(this, PaymentFormNonceActions);

    this.generateActions("addClientTokenSuccess", "addClientTokenFail");
  }

  _createClass(PaymentFormNonceActions, [{
    key: 'getClientToken',
    value: function getClientToken(setupDropinContainer) {
      var _this = this;

      $.ajax({
        type: 'GET',
        url: '/api/braintree/client_token'
      }).done(function (clientToken) {
        _this.actions.addClientTokenSuccess(clientToken);
        setupDropinContainer(clientToken);
      }).fail(function (data) {
        _this.actions.addClientTokenFail(data);
        console.log("this did not work");
      });
    }
  }]);

  return PaymentFormNonceActions;
}();

exports.default = _alt2.default.createActions(PaymentFormNonceActions);

},{"../alt":5,"underscore":"underscore"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
        this.props.children,
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer":7,"./Home":8,"./Navbar":9,"react":"react"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        null,
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-8' },
              _react2.default.createElement(
                'p',
                null,
                'Powered by ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Node.js'
                ),
                ' and ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'React'
                ),
                ' with Flux architecture and server-side rendering.'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-4' },
              _react2.default.createElement(
                'ul',
                { className: 'list-inline' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'https://github.com/theRealYoshi/' },
                    'Github'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: 'https://www.linkedin.com/in/yoshihiroluk' },
                    'Linkedin'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _HomeStore = require('../stores/HomeStore');

var _HomeStore2 = _interopRequireDefault(_HomeStore);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

var _PaymentFormNonce = require('./PaymentFormNonce');

var _PaymentFormNonce2 = _interopRequireDefault(_PaymentFormNonce);

var _PaymentForm = require('./PaymentForm');

var _PaymentForm2 = _interopRequireDefault(_PaymentForm);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

    _this.state = _HomeStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _HomeStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _HomeStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'header-container' },
          _react2.default.createElement(
            'h1',
            null,
            'Services Available:'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              'Website Development Services - $1000+'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Marketing Analysis Consultancy Services - $1000+'
            ),
            _react2.default.createElement(
              'li',
              null,
              'Digital Marketing Consultancy Services - $500+'
            )
          ),
          _react2.default.createElement(
            'p',
            null,
            '*Prices vary depending on scope and complexity on a per project basis'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'h1',
            null,
            'Contact Information:'
          ),
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              'Email: ',
              _react2.default.createElement(
                'a',
                { href: 'mailto:support@tommmo.com' },
                'support@tommmo.com'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              'Phone Number: 323-375-4476'
            )
          )
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Payment Form'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_PaymentFormNonce2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_PaymentForm2.default, null)
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'btn btn-primary', 'data-toggle': 'modal', 'data-target': '#refundPolicyModal' },
          'Refund Policy'
        ),
        _react2.default.createElement(
          'button',
          { type: 'button', className: 'btn btn-primary', 'data-toggle': 'modal', 'data-target': '#privacyPolicyModal' },
          'Privacy Policy'
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal fade', id: 'refundPolicyModal', tabindex: '-1', role: 'dialog', 'aria-labelledby': 'refundPolicyLabel' },
          _react2.default.createElement(
            'div',
            { className: 'modal-dialog', role: 'document' },
            _react2.default.createElement(
              'div',
              { className: 'modal-content' },
              _react2.default.createElement(
                'div',
                { className: 'modal-header' },
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                  _react2.default.createElement(
                    'span',
                    { 'aria-hidden': 'true' },
                    '×'
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'modal-title', id: 'refundPolicyLabel' },
                  'Refund Policy'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-body' },
                _react2.default.createElement(
                  'p',
                  null,
                  'You can cancel your service at any time. There are no cancellation fees, though no refunds are provided for services previously rendered.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Any project cancelled mid-project will be charged a prorated amount based on the number of hours worked on that specific project.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'For more information regarding the refund policy, please contact us at ',
                  _react2.default.createElement(
                    'a',
                    { href: 'mailto:support@tommmo.com' },
                    'support@tommmo.com'
                  ),
                  ' or at 323-375-4476'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-footer' },
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
                  'Close'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal fade', id: 'privacyPolicyModal', tabindex: '-1', role: 'dialog', 'aria-labelledby': 'privacyPolicyModal' },
          _react2.default.createElement(
            'div',
            { className: 'modal-dialog', role: 'document' },
            _react2.default.createElement(
              'div',
              { className: 'modal-content' },
              _react2.default.createElement(
                'div',
                { className: 'modal-header' },
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                  _react2.default.createElement(
                    'span',
                    { 'aria-hidden': 'true' },
                    '×'
                  )
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'modal-title', id: 'privacyPolicyModal' },
                  'Privacy Policy'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-body' },
                _react2.default.createElement(
                  'p',
                  null,
                  'Last updated: March 21, 2016'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Tommmo Consulting ("us", "we", or "our") operates the www.tommmo.com website (the "Service").'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'We will not use or share your information with anyone except as described in this Privacy Policy.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at www.tommmo.com'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Information Collection And Use'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Log Data'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'We collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computers Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Cookies'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computers hard drive.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'We use ',
                  _react2.default.createElement(
                    'b',
                    null,
                    'cookies'
                  ),
                  ' to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Service Providers'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Security'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Links To Other Sites'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third partys site. We strongly advise you to review the Privacy Policy of every site you visit.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Childrens Privacy'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'Our Service does not address anyone under the age of 13 ("Children").'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Information, please contact us. If we discover that a Children under 13 has provided us with Personal Information, we will delete such information from our servers immediately.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Changes To This Privacy Policy'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'strong',
                    null,
                    'Contact Us'
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  'If you have any questions about this Privacy Policy, please contact us at ',
                  _react2.default.createElement(
                    'a',
                    { href: 'mailto:support@tommmo.com' },
                    'support@tommmo.com'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-footer' },
                _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'btn btn-default', 'data-dismiss': 'modal' },
                  'Close'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"../actions/HomeActions":1,"../stores/HomeStore":14,"./PaymentForm":10,"./PaymentFormNonce":11,"react":"react","react-router":"react-router","underscore":"underscore"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/', className: 'navbar-brand' },
            'DBA: Yoshihiro Luk'
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":2,"../stores/NavbarStore":15,"react":"react","react-router":"react-router"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _PaymentFormStore = require('../stores/PaymentFormStore');

var _PaymentFormStore2 = _interopRequireDefault(_PaymentFormStore);

var _PaymentFormActions = require('../actions/PaymentFormActions');

var _PaymentFormActions2 = _interopRequireDefault(_PaymentFormActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaymentForm = function (_React$Component) {
  _inherits(PaymentForm, _React$Component);

  function PaymentForm(props) {
    _classCallCheck(this, PaymentForm);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PaymentForm).call(this, props));

    _this.state = _PaymentFormStore2.default.getState();
    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  _createClass(PaymentForm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _PaymentFormStore2.default.listen(this._onChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _PaymentFormStore2.default.unlisten(this._onChange);
    }
  }, {
    key: '_onChange',
    value: function _onChange(state) {
      this.setState(state);
    }
  }, {
    key: '_formattedCreditCardNumber',
    value: function _formattedCreditCardNumber() {
      var numStr = this.state.creditCardNumber.toString();
      //regex for different formats and then add 000's until end
      if (numStr.length <= 4) {
        return numStr;
      } else if (numStr.length > 4 && numStr.length <= 8) {
        return numStr.slice(0, 4) + "-" + numStr.slice(4);
      } else if (numStr.length > 8 && numStr.length <= 12) {
        return numStr.slice(0, 4) + "-" + numStr.slice(4, 8) + "-" + numStr.slice(8);
      } else {
        return numStr.slice(0, 4) + "-" + numStr.slice(4, 8) + "-" + numStr.slice(8, 12) + "-" + numStr.slice(12);
      }
    }
  }, {
    key: '_formattedExpirationDate',
    value: function _formattedExpirationDate() {
      var numStr = this.state.expirationDate.toString();
      if (numStr.length <= 2) {
        return numStr;
      } else {
        return numStr.slice(0, 2) + "/" + numStr.slice(2, 4);
      }
    }
  }, {
    key: '_formattedPaymentAmount',
    value: function _formattedPaymentAmount() {
      var numStr = parseInt(this.state.paymentAmount).toString();
      if (numStr == "0" || numStr == "00") {
        return "";
      } else if (numStr.length == 1) {
        return "$0.0" + numStr;
      } else if (numStr.length == 2) {
        return "$0." + numStr;
      } else {
        return "$" + numStr.slice(0, numStr.length - 2) + "." + numStr.slice(numStr.length - 2);
      }
    }
  }, {
    key: '_handleSubmit',
    value: function _handleSubmit(event) {
      event.preventDefault();
      // do validations here or do the validations within the changed stated in react
      var paymentAmount = this.state.paymentAmount;
      var name = this.state.fullName;
      var fullName = this.state.fullName;
      var postalCode = this.state.postalCode;
      var nonce = this.state.nonce;

      if (paymentAmount == ("0" || "")) {
        console.log("payment failed");
        _PaymentFormActions2.default.formValidationError("Payment Amount Invalid");
      } else if (fullName.length < 5 || fullName.split(" ").length != 2) {
        console.log("fullname failed");
        _PaymentFormActions2.default.formValidationError("Please Enter a Valid Name");
      } else if (postalCode.length < 5) {
        console.log("postal failed");
        _PaymentFormActions2.default.formValidationError("Please Enter a Valid Postal Code");
      } else if (!nonce) {
        console.log("nonce failed");
        _PaymentFormActions2.default.formValidationError("Please Enter a Valid Credit Card");
      } else {
        _PaymentFormActions2.default.createTransaction({
          amount: paymentAmount,
          nonce: nonce
        }, function (err, success) {
          // redirect to thank you page
          console.log(err);
          console.log(success);
          console.log("done");
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var paymentAmount;
      if (this.state.paymentAmount) {
        paymentAmount = this._formattedPaymentAmount();
      } else {
        paymentAmount = "";
      }
      var fullName = this.state.fullName;
      var postalCode = this.state.postalCode;

      return _react2.default.createElement(
        'div',
        { className: 'paymentForm' },
        _react2.default.createElement(
          'form',
          { className: 'paymentForm', id: 'checkout', onSubmit: this._handleSubmit.bind(this), autoComplete: 'off' },
          _react2.default.createElement(
            'label',
            null,
            'Payment Amount:'
          ),
          _react2.default.createElement('input', { onChange: _PaymentFormActions2.default.updatePaymentAmount,
            value: paymentAmount }),
          _react2.default.createElement(
            'label',
            null,
            'Full Name:'
          ),
          _react2.default.createElement('input', { 'data-braintree-name': 'cardholder_name', placeholder: 'John Smith',
            onChange: _PaymentFormActions2.default.updateFullName,
            value: fullName }),
          _react2.default.createElement(
            'label',
            null,
            'Postal Code:'
          ),
          _react2.default.createElement('input', { 'data-braintree-name': 'postal_code', placeholder: '94107',
            onChange: _PaymentFormActions2.default.updatePostalCode,
            value: postalCode,
            maxLength: '5' }),
          _react2.default.createElement(
            'button',
            { type: 'submit', id: 'submit', value: 'Pay', onClick: this._handleSubmit.bind(this) },
            'Pay'
          )
        )
      );
    }
  }]);

  return PaymentForm;
}(_react2.default.Component);

exports.default = PaymentForm;

},{"../actions/PaymentFormActions":3,"../stores/PaymentFormStore":17,"react":"react","react-router":"react-router"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _PaymentFormNonceStore = require('../stores/PaymentFormNonceStore');

var _PaymentFormNonceStore2 = _interopRequireDefault(_PaymentFormNonceStore);

var _PaymentFormNonceActions = require('../actions/PaymentFormNonceActions');

var _PaymentFormNonceActions2 = _interopRequireDefault(_PaymentFormNonceActions);

var _PaymentFormActions = require('../actions/PaymentFormActions');

var _PaymentFormActions2 = _interopRequireDefault(_PaymentFormActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaymentFormNonce = function (_React$Component) {
  _inherits(PaymentFormNonce, _React$Component);

  function PaymentFormNonce(props) {
    _classCallCheck(this, PaymentFormNonce);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PaymentFormNonce).call(this, props));

    _this.state = _PaymentFormNonceStore2.default.getState();
    _this._onChange = _this._onChange.bind(_this);
    return _this;
  }

  _createClass(PaymentFormNonce, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _PaymentFormNonceStore2.default.listen(this._onChange);
      _PaymentFormNonceActions2.default.getClientToken(function (clientToken) {
        window.braintree.setup(clientToken, "dropin", {
          container: "payment-form",
          onPaymentMethodReceived: function onPaymentMethodReceived(obj) {
            console.log(obj.details);
            var nonce = obj.nonce;
            if (nonce) {
              _PaymentFormActions2.default.addPaymentNonce(obj.nonce);
            }
          },
          onError: function onError(obj) {
            console.log(obj);
          }
        });
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _PaymentFormNonceStore2.default.unlisten(this._onChange);
    }
  }, {
    key: '_onChange',
    value: function _onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'paymentFormNonce' },
          _react2.default.createElement(
            'form',
            { id: 'checkout' },
            _react2.default.createElement('div', { id: 'payment-form' }),
            _react2.default.createElement('input', { type: 'submit', value: 'Enter Credit Card Information' })
          )
        ),
        _react2.default.createElement('script', { src: 'https://js.braintreegateway.com/js/braintree-2.21.0.min.js' })
      );
    }
  }]);

  return PaymentFormNonce;
}(_react2.default.Component);

exports.default = PaymentFormNonce;

},{"../actions/PaymentFormActions":3,"../actions/PaymentFormNonceActions":4,"../stores/PaymentFormNonceStore":16,"react":"react","react-router":"react-router"}],12:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./routes":13,"history/lib/createBrowserHistory":26,"react":"react","react-dom":"react-dom","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default })
);

},{"./components/App":6,"./components/Home":8,"react":"react","react-router":"react-router"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeStore = function HomeStore() {
  _classCallCheck(this, HomeStore);

  this.bindActions(_HomeActions2.default);
};

exports.default = _alt2.default.createStore(HomeStore);

},{"../actions/HomeActions":1,"../alt":5}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_NavbarActions2.default);
    this.profileImgs = [];
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
    this.shake = false;
    this.emails = [];
  }

  _createClass(NavbarStore, [{
    key: 'onGetGiphySuccess',
    value: function onGetGiphySuccess(payload) {
      this.profileImgs = payload.data;
    }
  }, {
    key: 'onGetGiphyFail',
    value: function onGetGiphyFail(payload) {
      this.shake = true;
      toastr.error(payload.responseText);
    }
  }, {
    key: 'onRemoveShake',
    value: function onRemoveShake() {
      var _this = this;

      setTimeout(function () {
        _this.shake = false;
      }, 1000);
    }
  }, {
    key: 'onKeepInput',
    value: function onKeepInput(email) {
      var emailString = window.localStorage.getItem('allemails');
      if (emailString) {
        window.localStorage.setItem('allemails', emailString + "," + email);
      } else {
        window.localStorage.setItem('allemails', email);
      }
      //this.emails.push(email);
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;
    }
  }, {
    key: 'onReRenderPage',
    value: function onReRenderPage() {
      this.profileImgs = [];
      this.searchQuery = "";
    }
  }, {
    key: 'onClearGifs',
    value: function onClearGifs() {
      this.profileImgs = [];
    }
  }]);

  return NavbarStore;
}();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":2,"../alt":5}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _PaymentFormNonceActions = require('../actions/PaymentFormNonceActions');

var _PaymentFormNonceActions2 = _interopRequireDefault(_PaymentFormNonceActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaymentFormNonceStore = function () {
  function PaymentFormNonceStore() {
    _classCallCheck(this, PaymentFormNonceStore);

    this.bindActions(_PaymentFormNonceActions2.default);
    this.clientToken = '';
    this.nonce = '';
  }

  _createClass(PaymentFormNonceStore, [{
    key: 'onAddClientTokenSuccess',
    value: function onAddClientTokenSuccess(data) {
      this.clientToken = data;
    }
  }, {
    key: 'onAddClientTokenFail',
    value: function onAddClientTokenFail(data) {
      toastr.error(data.responseText);
    }
  }]);

  return PaymentFormNonceStore;
}();

exports.default = _alt2.default.createStore(PaymentFormNonceStore);

},{"../actions/PaymentFormNonceActions":4,"../alt":5}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _PaymentFormActions = require('../actions/PaymentFormActions');

var _PaymentFormActions2 = _interopRequireDefault(_PaymentFormActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PaymentFormStore = function () {
  function PaymentFormStore() {
    _classCallCheck(this, PaymentFormStore);

    this.bindActions(_PaymentFormActions2.default);
    this.fullName = '';
    this.paymentAmount = '';
    this.postalCode = '';
    this.nonce = '';
  }

  _createClass(PaymentFormStore, [{
    key: 'onAddCreateTransactionSuccess',
    value: function onAddCreateTransactionSuccess(data) {
      // remove the cc info from state;
      this.fullName = '';
      this.paymentAmount = '';
      this.postalCode = '';
    }
  }, {
    key: 'onAddCreateTransactionFail',
    value: function onAddCreateTransactionFail(data) {
      toastr.error(data.responseText);
    }
  }, {
    key: 'onAddPaymentNonce',
    value: function onAddPaymentNonce(nonce) {
      this.nonce = nonce;
      console.log("nonce added");
    }
  }, {
    key: 'onFormValidationError',
    value: function onFormValidationError(data) {
      toastr.error(data);
    }
  }, {
    key: 'onUpdateCreditCardNumber',
    value: function onUpdateCreditCardNumber(event) {
      var cc = event.target.value.replace(/[^\d]/g, "");
      if (isNaN(cc) || cc == this.creditCardNumber) {
        toastr.error("Please enter numbers only");
      } else {
        this.creditCardNumber = cc;
      }
    }
  }, {
    key: 'onUpdateCVV',
    value: function onUpdateCVV(event) {
      var cvv = event.target.value.replace(/[^\d]/g, "");
      if (isNaN(cvv) || cvv == this.cvv) {
        toastr.error("Please enter numbers only");
      } else {
        this.cvv = cvv;
      }
    }
  }, {
    key: 'onUpdateExpirationDate',
    value: function onUpdateExpirationDate(event) {
      var exp = event.target.value.replace(/[^\d]/g, "");
      if (isNaN(exp) || exp == this.expirationDate) {
        toastr.error("Please enter numbers only");
      } else {
        this.expirationDate = exp;
      }
    }
  }, {
    key: 'onUpdateFullName',
    value: function onUpdateFullName(event) {
      var name = event.target.value;
      var notSpace = false;
      if (name.match(/[\W+\d+]/g)) {
        var regExpArr = name.match(/[\W+\d+]/g);
        // if not all spaces
        regExpArr.forEach(function (nonLetter) {
          if (nonLetter != " ") {
            toastr.error("Please enter letters only");
            notSpace = true;
            return;
          }
        });
      }
      if (!notSpace) {
        this.fullName = name;
      }
    }
  }, {
    key: 'onUpdatePaymentAmount',
    value: function onUpdatePaymentAmount(event) {
      var payment = parseInt(event.target.value.replace(/[^\d]/g, "")).toString();
      if (isNaN(payment)) {
        toastr.error("Please enter numbers only");
      } else {
        this.paymentAmount = payment;
      }
    }
  }, {
    key: 'onUpdatePostalCode',
    value: function onUpdatePostalCode(event) {
      var pc = event.target.value.replace(/[^\d]/g, "");
      if (isNaN(pc) || pc == this.postalCode) {
        toastr.error("Please enter numbers only");
      } else {
        this.postalCode = pc;
      }
    }
  }]);

  return PaymentFormStore;
}();

exports.default = _alt2.default.createStore(PaymentFormStore);

},{"../actions/PaymentFormActions":3,"../alt":5}],18:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":19,"./lib/keys.js":20}],19:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],20:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],21:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],22:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],23:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":35,"warning":36}],24:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],25:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],26:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":21,"./DOMStateStorage":23,"./DOMUtils":24,"./ExecutionEnvironment":25,"./createDOMHistory":27,"./parsePath":32,"_process":35,"invariant":34}],27:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":24,"./ExecutionEnvironment":25,"./createHistory":28,"_process":35,"invariant":34}],28:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":21,"./AsyncUtils":22,"./createLocation":29,"./deprecate":30,"./parsePath":32,"./runTransitionHook":33,"deep-equal":18}],29:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":21,"./parsePath":32}],30:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],31:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],32:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":31,"_process":35,"warning":36}],33:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":35,"warning":36}],34:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":35}],35:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],36:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":35}]},{},[12])


//# sourceMappingURL=bundle.js.map
