import twilio from 'twilio'

const accountSid = 'AC429651f99e462fbfa8dcd49223746d53'
const authToken = '6efc617369612cad7b2efdc2a76d029b'

const client = twilio(accountSid, authToken)

const options = {
  body: 'Hola soy un SMS desde Node.js!',
  from: '+16065546193',
  to: '+5491137783394',
}

try {
  const message = await client.messages.create(options)
  console.log(message)
} catch (error) {
  console.log(error)
}
