import request from 'supertest';
import app from '../server';

describe('express routing', () => {
    it('expect 200 from index', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end(done);
    });
});
