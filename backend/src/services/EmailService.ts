/* INTERFACES DEFINEM O TIPO QUE A VARIÁVEL IRÁ RECEBER */

/* IDENTIFICADORES:
    : OBRIGATÓRIO
    ?: OPCIONALL
*/

interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
  //OU Array<string>
  // ARRAY DE STRINGS
}

/* DATA TRANSFER OBJECT (DDD) */
interface IMessageDTO {
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

/* IMPLEMENTS ESPECIFICA QUE A CLASSE POSSUA
    DETERMINADOS MÉTODOS OU ATRIBUTOS */
class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
