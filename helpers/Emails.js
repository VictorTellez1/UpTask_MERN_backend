import nodemailer from 'nodemailer'


export const emailRegistro= async (datos) =>{
    const {email,nombre,token}=datos
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      const info=await transport.sendMail({
        from:'"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to:email,
        subject:"UpTask - Comprueba tu cuenta",
        text:"Comprueba tu cuenta en UpTask",
        html:`
            <p>Hola : ${nombre} Comprueba tu uenta en UpTask </p>
            <p>Tu cuenta ya esta casi lista, solo debes comprobarla en el siguiente enalce: </p>
            <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>
            <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
        
        
        `
      })
      //Informacion email
}
export const emailOlvidePassword= async (datos) =>{
  const {email,nombre,token}=datos
  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    const info=await transport.sendMail({
      from:'"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
      to:email,
      subject:"UpTask - Reestablece tu password",
      text:"Comprueba tu cuenta en UpTask",
      html:`
          <p>Hola : ${nombre} Has solicitado restablecer tu password </p>
          <p>Sigue el siguiente enlace para generar un nuevo password: </p>
          <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer password</a>
          <p>Si tu no solicitaste esta cambio, puedes ignorar este mensaje</p>
      
      
      `
    })
    //Informacion email
}