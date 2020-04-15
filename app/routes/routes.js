module.exports = app => {
    const controller = require('../controllers/controllers.js');

app.post('/api/register', controller.register);
app.post('/api/login', controller.login);
app.get('/api/profile', controller.profile);
app.get('/api/activity', controller.activity);
app.get('/api/editActivity/:id', controller.editActivity);
app.post('/api/addActivity', controller.addActivity);
}