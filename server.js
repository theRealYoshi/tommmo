// Babel ES6/JSX Compiler
require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
require('dotenv').load();

//braintree api
var braintree = require("braintree");
if (process.env.BRAINTREE_IN_PRODUCTION === "production"){
  //get production gateway
  var braintreeEnvironment = braintree.Environment.Production;
  var gateway = braintree.connect({
    environment:  braintreeEnvironment,
    merchantId:   process.env.BRAINTREE_PRODUCTION_MERCHANT_ID,
    publicKey:    process.env.BRAINTREE_PRODUCTION_PUBLIC_KEY,
    privateKey:   process.env.BRAINTREE_PRODUCTION_PRIVATE_KEY
  })
} else {
  var braintreeEnvironment = braintree.Environment.Sandbox;
  var gateway = braintree.connect({
    environment:  braintreeEnvironment,
    merchantId:   process.env.BRAINTREE_SANDBOX_MERCHANT_ID,
    publicKey:    process.env.BRAINTREE_SANDBOX_PUBLIC_KEY,
    privateKey:   process.env.BRAINTREE_SANDBOX_PRIVATE_KEY
  })
}


var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/api/braintree/client_token", function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send(response.clientToken);
  });
});

app.post("/api/braintree/transaction",function (req, res) {
  var amount = req.body.amount / 100;
  var nonceFromTheClient = req.body.nonce;
  console.log(req.body);
  gateway.transaction.sale({
    amount: amount,
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true,
    }
  }, function (err, result) {
    if (!err && result.success){
      console.log("payment submitted");
      res.status(200).send({message: result.transaction.amount + " was charged"});
    } else {
      console.log(err);
      res.status(406).send({message: result.message});
    }
  });
});

app.use(function(req, res) {
  Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
      var page = swig.renderFile('views/index.html', { html: html });
      res.status(200).send(page);
    } else {
      res.status(404).send('Page Not Found')
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
