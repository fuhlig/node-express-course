const express = require('express');
const app = express();

const mockUserData = [
    { name: 'Mark', },
    { name: 'Jill', },
];

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'successfully got users. Noice!',
        users: mockUserData,
    });
});

app.get('/users/:id', (req, res) => {
    console.log(req.params.id);
    res.json({
        success: true,
        message: `get user data`,
        user: req.params.id
    });
});

app.listen(8000, () => {
    console.log(`server is running`);
});
