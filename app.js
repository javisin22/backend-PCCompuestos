const express = require('express');
const app = express();
const port = 3001;

const users = require('./routes/userRoutes');
const products = require('./routes/productRoutes');

app.use('/', users);
app.use('/', products);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
