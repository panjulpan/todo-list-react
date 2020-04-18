module.exports = app => {
    const controller = require('../controllers/controllers.js');

//Register
app.post('/api/register', controller.register);

//Login
app.post('/api/login', controller.login);

//Logout
app.get('/api/logout', controller.logout)

//Activity
app.get('/api/activity', controller.activity);

//Add Activity
app.post('/api/addActivity', controller.addActivity);

//Edit Activity
app.get('/api/editActivity/:id', controller.editActivity);

//Update Activity
app.post('/api/updateActivity/:id', controller.updateActivity);

//Delete Activity
app.delete('/api/deleteActivity/:id', controller.deleteActivity);

//Profil
app.get('/api/profile', controller.profile);

//Edit Profil
app.get('/api/editProfile/:id', controller.getEdit);

//Update Profile
app.post('/api/updateProfile/:id', controller.updateProfile);

//Admin
app.get('/api/admin', controller.admin);

//Add Admin
app.post('/api/addAdmin', controller.addAdmin);

//Delete Admin
app.delete('/api/deleteAdm/:id', controller.deleteAdm);
}