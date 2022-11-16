const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use()

//start the server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));