const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
    res.status(200).json({message: "The server is running"});
})

app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
