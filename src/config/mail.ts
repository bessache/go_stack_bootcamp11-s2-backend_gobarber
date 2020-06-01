interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'renatobessa@rnbs.com.br',
      name: 'Renato da RnBS',
    },
  },
} as IMailConfig;
