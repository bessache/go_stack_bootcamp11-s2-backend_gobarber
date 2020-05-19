import { Router } from 'express';
import { container } from 'tsyringe';

import AuthenticationUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const authenticateUser = container.resolve(AuthenticationUserService);
  const { user, token } = await authenticateUser.excute({
    email,
    password,
  });
  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
