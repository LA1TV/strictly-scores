import express from 'express';
let app = express();
let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('*', (req, res) => {
    res.status(404);
    res.send('Not Found');
});

app.listen(port, () => {
    console.log('⚙ Server running on port %d', port);
});

export default app;
