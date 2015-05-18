'use strict';

require('../server');

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);

describe('notes REST api', function(){
  it('GET request', function(done) {
      chai.request('localhost:3000')
      .get('/api/quotes')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(typeof res.body).to.eql('object');
        expect(Array.isArray(res.body)).to.be.eql(true);
        done();
      });
    });

    it('POST request', function(done) {
      var testQuote = new Quote({name: "Mr. A"});
      chai.request('localhost:3000')
      .post('/api/data')
      .send(testQuote)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(typeof res.body).to.eql('object');
        done();
      });
    });

    it('PUT request', function(done) {
      var testQuote = new Quote({name: "Mr. A"});
      chai.request('localhost:3000')
      .put('/api/data')
      .send(testQuote)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(typeof res.body).to.eql('object');
        done();
      });
    });

    it('PATCH request', function(done) {
      var testQuote = new Quote({name: "Mr. A"});
      chai.request('localhost:3000')
      .patch('/api/data')
      .send(testQuote)
      .end(function(err, res) {
        expect(err).to.eql(null);
        done();
      }); 
    });

    it('DELETE request', function(done) {
      var testQuote = new Quote({name: "Mr. A"});
      chai.request('localhost:3000')
      .del('/api/data')
      .end(function(err, res) {
        expect(err).to.eql(null);
        done();
      });  
    });
});