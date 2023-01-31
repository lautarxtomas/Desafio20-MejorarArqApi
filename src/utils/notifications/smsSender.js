import twilio from 'twilio'

// en twilio activar en geo locations todos los países

const acctSid = 'AC3f0c57931788e6a151ded3acb1a2331f' // buscar ACC SID en twilio
const authToken = 'f1c2ef1260f9e0c5bf6bc0f4be091161' // buscar TOKEN en twilio

const twilioClient = twilio(acctSid, authToken)

export const from = '+13204410712' // buscar abajo de acc sid y token
export const to = process.argv[2] || '+5493547668602'
export const body = process.argv[3] || 'Account created successfully'

export const sendSMS = async (to, from, body) => {
    const info = await twilioClient.messages.create({ body, from, to })

    console.log(info)
    return info
}
