import twilio from 'twilio'

const accountSid = 'AC429651f99e462fbfa8dcd49223746d53'
const authToken = '6efc617369612cad7b2efdc2a76d029b'

const client = twilio(accountSid, authToken)

const options = {
  body: 'Hola soy un WSP desde Node.js!',
  mediaUrl: [
    'https://www.investingmoney.biz/public/img/art/xl/18012019161021Twilio-IoT.jpg',
  ],
  from: 'whatsapp:+14155238886',
  to: 'whatsapp:+5491137783394',
}

try {
  const message = await client.messages.create(options)
  console.log(message)
} catch (error) {
  console.log(error)
}
