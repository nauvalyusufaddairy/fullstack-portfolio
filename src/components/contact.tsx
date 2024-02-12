'use client'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { EmailSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import PlanetCanvas from '@/canvas/planet-canvas'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import sendEmail from '@/actions/send-email'
import { useState, useTransition } from 'react'
import FormError from './form-error'
import FormSucces from './form-success'
export default function Contact() {
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')
  const [isPending, setTransition] = useTransition()
  const handleSubmit = (values: zod.infer<typeof EmailSchema>) => {
    setSuccess('')
    setError('')

    setTransition(async () => {
      const result = await sendEmail(values)
      if (result?.succes) {
        setSuccess('Email sent')
      } else {
        console.log('lahhh', result)
        setError('Something went wrong')
      }
    })
  }
  const form = useForm<zod.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: '',
      message: '',
      subject: ''
    },
    mode: 'onTouched'
  })
  return (
    <div className="w-full h-fit flex flex-col-reverse md:flex-row mb-12 bg-white/5 rounded-md border-[1px] border-gray-300 text-slate-950 shadow-md dark:bg-slate-400/5 dark:text-white dark:border-none  overflow-y-auto relative">
      <div className="md:w-[500px] w-[385px] z-10 flex flex-col justify-center absolute h-[500px] px-6 pt-4 ">
        <h1 className="text-4xl mb-8">Contact me</h1>
        <div>
          <Form {...form}>
            <form className=" w-full h-full flex flex-col gap-3" onSubmit={form.handleSubmit((a) => handleSubmit(a))}>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" dark:text-white ">Email</FormLabel>
                    <div className="w-full flex flex-col gap-1">
                      <FormControl>
                        <Input
                          placeholder="john.doe@example.com"
                          {...field}
                          className=" bg-gray-200 dark:bg-gray-500 border-[1px] border-gray-500  focus-visible:border-teal-500 focus-visible:ring-0"
                        />
                      </FormControl>
                      <div className="mr-4">
                        {form.formState.errors.email && (
                          <div className=" ">
                            <FormMessage className=" rounded-md  w-fit  text-red-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                name="subject"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" dark:text-white ">Subject</FormLabel>
                    <div className="w-full flex flex-col gap-1">
                      <FormControl>
                        <Input
                          placeholder="Interview Invitation"
                          {...field}
                          className=" bg-gray-200 dark:bg-gray-500 border-[1px] border-gray-500  focus-visible:border-teal-500 focus-visible:ring-0"
                        />
                      </FormControl>
                      <div className=" mr-4">
                        {form.formState.errors.subject && (
                          <div className=" ">
                            <FormMessage className=" rounded-md  w-fit  text-red-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                name="message"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" dark:text-white ">Message</FormLabel>
                    <div className="w-full flex flex-col gap-1">
                      <FormControl>
                        <Textarea
                          placeholder="Text me a meaningful message"
                          {...field}
                          className=" min-h-[100px] bg-gray-200 dark:bg-gray-500 border-[1px] border-gray-500  focus-visible:border-teal-500 focus-visible:ring-0"
                        />
                      </FormControl>
                      <div className="mr-4">
                        {form.formState.errors.message && (
                          <div className=" ">
                            <FormMessage className=" rounded-md  w-fit  text-red-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <div className=" w-full flex justify-center">
                {' '}
                <Button disabled={!form.formState.isValid || isPending} className="w-[30%] bg-teal-500" type="submit">
                  {isPending ? 'Sending ...' : 'Send'}
                </Button>
                <FormError message={error} />
                <FormSucces message={success} />
              </div>

              <div className="w-[30%] flex justify-center items-center"> </div>
            </form>
          </Form>
        </div>
      </div>
      <div className="w-full flex-1 h-[500px] flex justify-left items-center hover:cursor-pointer">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="w-full h-[500px] flex justify-left items-center hover:cursor-pointer">
              <PlanetCanvas />
            </TooltipTrigger>
            <TooltipContent>
              <p> Drag the globe to animate</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
