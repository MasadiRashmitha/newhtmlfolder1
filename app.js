const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Add your authentication logic here
    if (username === 'admin' && password === 'admin') {
        // Redirect to main page after successful login
        res.redirect('/index.html');
    } else {
        // Redirect back to login page with error message
        res.redirect('/login.html?error=true');
    }
});

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
