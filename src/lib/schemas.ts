import * as zod from 'zod'

export const EmailSchema = zod.object({
  email: zod.string().email(),
  name: zod.string(),
  message: zod.string()
})
