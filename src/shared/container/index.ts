import { container } from 'tsyringe';
import '@modules/users/providers';
import './providers';

import IAppointmentsRepositoriy from '@modules/appointments/repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepositoriy from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUsersTokensRepositoriy from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UsersTokensRepository';

// import IUsersTokensRepositoriy from '@modules/users/repositories/IUsersTokensRepository';
// import UsersTokensRepository from '@modules/users/infra/typeorm/repositories/UsersTokensRepository';

container.registerSingleton<IAppointmentsRepositoriy>(
  'AppointmentsRepository',
  AppointmentsRepository,
);
container.registerSingleton<IUsersRepositoriy>(
  'UsersRepository',
  UsersRepository,
);
container.registerSingleton<IUsersTokensRepositoriy>(
  'UserTokensRepository',
  UserTokensRepository,
);
