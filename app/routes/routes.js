module.exports = app => {
    const controller = require('../controllers/controllers.js');

app.post('/api/register', controller.register);
app.post('/api/login', controller.login);
app.get('/api/profile/:id', controller.profile);
app.get('/api/activity', controller.activity);
}