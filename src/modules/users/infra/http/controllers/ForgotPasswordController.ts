import { container } from 'tsyringe';
import { Request, Response } from 'express';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const forgotPassword = container.resolve(SendForgotPasswordEmailService);

    await forgotPassword.execute({ email });

    return response.status(204).json();
  }
}
