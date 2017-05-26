/**
 * Created by dshin on 5/26/2017.
 */
const todosController = require('../controllers').todos;
const router = express.Router();

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  router.post('/api/todos', todosController.create);
  router.get('/api/todos', todosController.list);
  app.user(router);
};
