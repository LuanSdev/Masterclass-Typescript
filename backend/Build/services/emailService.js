"use strict";
/* INTERFACES DEFINEM O TIPO QUE A VARIÁVEL IRÁ RECEBER */
Object.defineProperty(exports, "__esModule", { value: true });
/* IMPLEMENTS ESPECIFICA QUE A CLASSE POSSUA
    DETERMINADOS MÉTODOS OU ATRIBUTOS */
var EmailService = /** @class */ (function () {
    function EmailService() {
    }
    EmailService.prototype.sendMail = function (_a) {
        var to = _a.to, message = _a.message;
        console.log("email enviado para " + to.name + ": " + message.subject);
    };
    return EmailService;
}());
exports.default = EmailService;
