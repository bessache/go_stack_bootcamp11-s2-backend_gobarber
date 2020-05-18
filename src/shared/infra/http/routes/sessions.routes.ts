import { Router } from 'express';

import AuthenticationUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const authenticateUser = new AuthenticationUserService();
  const { user, token } = await authenticateUser.excute({
    email,
    password,
  });
  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
