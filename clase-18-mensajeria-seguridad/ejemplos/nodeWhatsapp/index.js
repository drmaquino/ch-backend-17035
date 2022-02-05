import twilio from 'twilio'

const accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

const client = twilio(accountSid, authToken)

const options = {
    body: 'Hola soy un WSP desde Node.js!',
    mediaUrl: [ 'https://www.investingmoney.biz/public/img/art/xl/18012019161021Twilio-IoT.jpg' ],
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+5491100000000'
}

try {
    const message = await client.messages.create(options)
    console.log(message)
} catch (error) {
    console.log(error)
}
