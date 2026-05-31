const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>Mərhaba! Azure Container Apps uğurla işləyir! 🚀</h1>');
});

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda aktivdir.`);
});
