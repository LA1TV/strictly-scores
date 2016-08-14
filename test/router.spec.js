import test from 'ava';
import request from 'supertest-as-promised';
import app from '../server';

test('expect 200 from index', async t => {
    t.plan(1);

    const res = await request(app)
        .get('/');

    t.is(res.status, 200);
});

test('expect 404 from unknown url', async t => {
    t.plan(1);

    const res = await request(app)
        .get('/404');

    t.is(res.status, 404);
});
