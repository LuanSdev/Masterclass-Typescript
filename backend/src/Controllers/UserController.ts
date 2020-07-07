import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [{ name: 'luan', email: 'luang193@gmal.com' }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'user',
        email: 'user@gmail.com',
      },
      message: {
        subject: 'Bem vindo ao sistema',
        body: 'Seja bem vindo!',
      },
    });

    res.send();
  },
};
