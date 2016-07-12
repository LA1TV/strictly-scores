import request from 'supertest';
import app from '../server';

describe('router', () => {

    it('expect 200 from index', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    it('expect 404 from unknown route', (done) => {
        request(app)
            .get('/404')
            .expect(404)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

});
