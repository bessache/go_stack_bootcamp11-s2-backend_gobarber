import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticationUserService from '@modules/users/services/AuthenticateUserService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateUser = container.resolve(AuthenticationUserService);
    const { user, token } = await authenticateUser.excute({
      email,
      password,
    });
    delete user.password;

    return response.json({ user, token });
  }
}
