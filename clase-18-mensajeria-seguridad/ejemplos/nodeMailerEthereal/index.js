import { createTransport } from 'nodemailer'

const TEST_USER = 'sylvia.nader73@ethereal.email'
const TEST_PASS = 'Mwy1QDfpurW6cMtEMA'

const TEST_MAIL = 'mariano@gmail.com'

const transporter = createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: TEST_USER,
    pass: TEST_PASS,
  },
})

const mailOptions = {
  from: 'Servidor Node.js',
  to: TEST_MAIL,
  subject: 'Mail de prueba desde Node.js',
  //   html: '<h1 style="color: blue;">Contenido de prueba desde <span style="color: green;">Node.js con Nodemailer</span></h1>',
  text: 'Contenido de prueba desde Node.js con Nodemailer (sin formato)',
}

try {
  const info = await transporter.sendMail(mailOptions)
  console.log(info)
} catch (error) {
  console.log(error)
}
