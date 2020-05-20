import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const CreateAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
    const appointment = await CreateAppointment.execute({
      date: new Date(),
      provider_id: '1234567',
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('1234567');
  });

  const appointmentDate = new Date(2020, 4, 10, 11);

  it('should not be able to create two appointment on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const CreateAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
    await CreateAppointment.execute({
      date: appointmentDate,
      provider_id: '1234567',
    });
    expect(
      CreateAppointment.execute({
        date: appointmentDate,
        provider_id: '1234567',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
