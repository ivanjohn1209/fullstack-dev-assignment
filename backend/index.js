const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const allowedOrigins = ['http://localhost:3000', 'https://visionary-squirrel-7b9fd7.netlify.app'];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
};

app.use(cors(corsOptions));

app.use((err, req, res, next) => {
    if (err.message === 'Not allowed by CORS') {
        res.status(403).send({ error: 'CORS error: This origin is not allowed.' });
    } else {
        next(err);
    }
});
app.use(express.json());

app.use('/api/domain', require('./routes/domain.route'));
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
