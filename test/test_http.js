'use strict';

require('../server');

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;

chai.use(chaihttp);

describe('notes REST api', function(){
    it('should be able to create a new note', function(done) {
      chai.request('localhost:3000')
        .post('/api/data')
        .send({noteBody: 'hello there '})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('success');
          done();
    });

    it('should get an array of notes', function(done) {
      chai.request('localhost:3000')
      .get('/api/data')
      .end(function(err, res) {
        expect(err).to.eql(null);
        done(); 
      });
    });
  });
});