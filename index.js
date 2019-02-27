const express = require('express');
const morgan = require('morgan');

async function main() {
    const app = express();

    app.use(morgan('combined'));
    
    app.get('/', (req, res, next) => {
        res.send('Hello world!');
    });
    
    await app.listen(3000);
    console.log('Listening on port 3000');
}

main();