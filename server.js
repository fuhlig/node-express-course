const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

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

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const mockUsername = 'billyTheKid';
    const mockPassword = 'superSecret';

    console.log(req);
    

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success: true,
            message: 'username & password match!',
            token: 'encrypted token goes here',
        });
    } else {
        res.json({
            success: false,
            message: 'username & password do NOT match!',
        });
    }
});

app.listen(8000, () => {
    console.log(`server is running`);
});
