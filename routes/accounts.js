var express = require('express');
var router = express.Router();

/* GET accounts listing. */
router.get('/', function (req, res, next) {
  
  var request = require("request");
  var options = {
    method: 'GET',
    url: 'https://site1.sibsapimarket.com:8444/sibs/apimarket-sb/v1/available-aspsp',
    headers:
    {
      accept: 'application/json',
      'tpp-certificate': '1',
      signature: '1',
      'tpp-request-id': '1',
      'tpp-transaction-id': '1',
      'x-ibm-client-id': '270069f1-6ec0-49a3-b265-2ee746ecb882'
    }
  };
  request(options, function (error, response, body) {
    if (error) return console.error('Failed: %s', error.message);
    console.log('Success: ', body);
  }); 
  res.send('respond with get accounts');
});
router.post('/', function (req, res) {
  res.send('respond with post accounts');
});
router.put('/', function (req, res) {
  res.send('respond with put accounts');
});
router.delete('/', function (req, res) {
  res.send('respond with delete accounts');
});
module.exports = router;
