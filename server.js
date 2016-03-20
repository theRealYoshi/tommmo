

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


//braintree api
var braintree = require("braintree");
var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "dh6g887kp8mz4qvw",
  publicKey: "x5kzks7rwmj2tjck",
  privateKey: "0a093d8816184f794acfe5eae3c099b3"
});


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

app.post("/api/braintree/paymentNonce", function(req, res){
  debugger;
  console.log(req);
  var nonce = req.body.payment_method_nonce;
  console.log(nonce);
  res.status(200).send("nonce created");
})

app.post("/api/braintree/transaction",function (req, res) {
  var amount = req.body.amount / 100;
  // var nonceFromTheClient = "fake-valid-visa-nonce";
  var nonceFromTheClient = req.body.nonce;
  console.log(nonceFromTheClient);
  gateway.transaction.sale({
    amount: amount,
    paymentMethodNonce: nonceFromTheClient,
    options: {
      submitForSettlement: true,
    }
  }, function (err, result) {
    console.log(result);
    if (!err && result.success){
      res.status(200).send(result.transaction.amount + " was charged");
    } else {
      console.log(result.message);
      res.status(406).send(result.message);
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
