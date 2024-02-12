'use server'
import * as zod from 'zod'
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { EmailSchema } from '@/lib/schemas'

export default async function sendEmail(values: zod.infer<typeof EmailSchema>) {
  const data = await EmailSchema.parseAsync(values)
  const { email, message, subject } = data

  const sesClient = new SESClient({
    region: 'us-east-1',
    credentials: {
      accessKeyId: process.env.AACCESS_KEY_ID!,
      secretAccessKey: process.env.AACCESS_KEY_SECRET!
    }
  })

  const params = {
    Destination: {
      ToAddresses: ['nauvalyusufad@gmail.com']
    },
    Message: {
      Body: {
        Text: {
          Data: message + `\n \n sended from` + ' ' + email
        }
      },
      Subject: {
        Data: subject
      }
    },
    Source: 'no-reply@nauvalyusufaddairy.com' // Replace with your sender email address
  }
  try {
    const command = new SendEmailCommand(params)
    const result = await sesClient.send(command)
    const res = result
    return { succes: JSON.stringify(res) }
  } catch (error) {
    return { e: JSON.stringify(error) }
  }
}
