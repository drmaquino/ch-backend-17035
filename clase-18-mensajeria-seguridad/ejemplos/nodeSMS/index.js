import twilio from 'twilio'

const accountSid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
const authToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

const client = twilio(accountSid, authToken)

const options = {
    body: 'Hola soy un SMS desde Node.js!',
    from: '+14156884237',
    to: '+541100000000'
}

try {
    const message = await client.messages.create(options)
    console.log(message)
} catch (error) {
    console.log(error)
}
