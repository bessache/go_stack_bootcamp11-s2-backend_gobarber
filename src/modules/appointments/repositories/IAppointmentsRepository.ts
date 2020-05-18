import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IAppointmentsRepositoriy {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
