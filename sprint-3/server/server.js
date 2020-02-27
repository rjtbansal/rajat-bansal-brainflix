const express = require('express');
const cors = require('cors');
const videoRoutes = require('./routes/videoEndpoints');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', videoRoutes);

app.listen(8080, () => console.log('Stalking on port 8080'));


