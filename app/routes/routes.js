module.exports = app => {
    const controller = require('../controllers/controllers.js');

app.post('/api/register', controller.register);
app.post('/api/login', controller.login);
app.get('/api/profile/:id', controller.profile);
app.get('/api/activity', controller.activity);
app.get('/api/editActivity/:id', controller.editActivity);
app.post('/api/updateActivity/:id', controller.updateActivity);
app.post('/api/addActivity', controller.addActivity);
app.delete('/api/deleteActivity/:id', controller.deleteActivity);
}