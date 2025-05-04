const express = require('express');
const path = require('path');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nodeapp.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
