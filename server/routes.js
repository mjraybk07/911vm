// All the Server side routes live in this one file!

const controllers = require('./controllers.js');
const Certification = require('./controllers/certification.controllers.js');
const Person = require('./controllers/person.controllers.js');
const Signature = require('./controllers/signature.controllers.js');

module.exports = function(app) {

  app.get('/helloworld', controllers.helloWorld);

  // Certification Routes
  app.post('/api/certification', Certification.create)
  app.get('/api/certification', Certification.get)
  app.get('/api/certification/:id', Certification.show)
  app.put('/api/certification/:id', Certification.update)
  app.delete('/api/certification/:id', Certification.remove)

  // Person Routes
  app.get('/api/person', Person.get);
  app.post('/api/person', Person.create);
  app.get('/api/person/:id', Person.show);
  app.put('/api/person/:id', Person.update);
  app.delete('/api/person/:id', Person.remove);
  app.post('/api/person/:id/certification', Person.addCertification);
  app.get('/api/person/:id/certification', Person.getCertifications);

  // Signature Routes
  app.get('/api/signature', Signature.getAll); // get all signatures for all users ???
  // app.post('/api/signature', Signature.create);  // create a single signature - params: volunteerId, adminId, certificationId, date
  // app.get('/api/signature/:id', Signature.get);  // get a single signature record
  // app.put('/api/signature/:id', Signature.update); // update a signature - params : volunteerId, adminId, certificationId, date
  // app.delete('/api/signature/:id', Signature.remove);
 

};
