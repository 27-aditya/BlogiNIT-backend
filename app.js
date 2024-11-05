const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
    res.status(200).json({message: "The server is running"});
})
