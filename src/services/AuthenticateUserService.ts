import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';

interface Request {
  email: string;
  password: string;
}
interface Response {
  user: User;
  token: string;
}

class AuthenticateUsersService {
  public async excute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('Incorret email/password combination');
    }
    const passwordMatched = await compare(password, user.password);
    if (!passwordMatched) {
      throw new Error('Incorret email/password combination');
    }
    const token = sign({}, '03499283bd3a5c26be0d589075a3f8cb', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}
export default AuthenticateUsersService;
