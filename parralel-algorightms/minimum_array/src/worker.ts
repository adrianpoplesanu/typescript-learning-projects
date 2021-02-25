import express from 'express';

const app = express();
const port = 3001;
app.get('/', (req, res) => {
    solve();
    res.send('worker process');
});

function solve() {

}

app.listen(port, function () {
    console.log('App listening on port ${port}!');
});
