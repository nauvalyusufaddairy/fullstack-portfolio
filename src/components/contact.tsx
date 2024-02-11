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
export default function Contact() {
  const form = useForm<zod.infer<typeof EmailSchema>>({
    resolver: zodResolver(EmailSchema),
    defaultValues: {
      email: '',
      message: '',
      name: ''
    },
    mode: 'onTouched'
  })
  return (
    <div className="w-full h-fit pb-6 flex flex-col-reverse md:flex-row mb-12 bg-white/5 rounded-md border-[1px] border-gray-300 text-slate-950 shadow-md dark:bg-slate-400/5 dark:text-white dark:border-none px-8 py-6 overflow-y-auto">
      <div className="flex-1  flex flex-col ">
        <h1 className="text-4xl mb-8">Contact me</h1>
        <div>
          <Form {...form}>
            <form className=" w-full h-full flex flex-col gap-4" onSubmit={form.handleSubmit((a) => console.log('data', a))}>
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
                      <div className="w-[50%] mr-4">
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
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" dark:text-white ">Name</FormLabel>
                    <div className="w-full flex flex-col gap-1">
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className=" bg-gray-200 dark:bg-gray-500 border-[1px] border-gray-500  focus-visible:border-teal-500 focus-visible:ring-0"
                        />
                      </FormControl>
                      <div className="w-[50%] mr-4">
                        {form.formState.errors.name && (
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
                          placeholder="John Doe"
                          {...field}
                          className=" min-h-[150px] bg-gray-200 dark:bg-gray-500 border-[1px] border-gray-500  focus-visible:border-teal-500 focus-visible:ring-0"
                        />
                      </FormControl>
                      <div className="w-[50%] mr-4">
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
              <Button disabled={!form.formState.isValid} className="w-[30%] bg-teal-500 m-auto disabled:cursor-not-allowed" type="submit">
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="flex-1 w-full h-[500px] flex justify-center items-center">
        <PlanetCanvas />
      </div>
    </div>
  )
}
