import {
  describe, it
} from 'mocha';
import chai, { expect } from 'chai';
import chaihttp from 'chai-http';
import app from '../server/server';

chai.use(chaihttp);

const should = require('chai').should();

const currApiPrefix = '/api/v1';

describe('Getting Stock Prices', () => {
  it('should return stock prices', () => {
    chai.request(app)
      .get(`${currApiPrefix}/stock/prices`)
      .end((err, res) => {
        const { status, body } = res;
        should.not.exist(err);
        expect(status).to.equal(200);
        expect(body.prices).to.be.an('array');
      });
  });
});