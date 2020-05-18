import { Router } from 'express';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import AuthenticationUserService from '@modules/users/services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;
  const usersRepository = new UsersRepository();
  const authenticateUser = new AuthenticationUserService(usersRepository);
  const { user, token } = await authenticateUser.excute({
    email,
    password,
  });
  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
