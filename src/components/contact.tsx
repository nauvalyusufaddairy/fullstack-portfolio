'use client'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { EmailSchema } from '@/lib/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from './ui/input'
import { cn } from '@/lib/utils'
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
    <section className="w-full h-[500px] flex  mb-12 bg-white text-slate-950 shadow-md dark:bg-slate-400/10 dark:text-white px-8 py-6">
      <div className="flex-1  flex flex-col ">
        <h1 className="text-4xl mb-8">Contact me</h1>
        <div className=" w-full h-full flex flex-col">
          <Form {...form}>
            <form onSubmit={form.handleSubmit((a) => console.log('data', a))}>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" dark:text-white ">Email</FormLabel>
                    <div className="w-full flex">
                      <FormControl className="flex flex-col gap-1">
                        <Input
                          placeholder="john.doe@example.com"
                          {...field}
                          className={cn(
                            ' border-[1px] border-gray-950 bg-[#f5f5f5f5] dark:border-gray-500 dark:bg-gray-500 focus:border-teal-500 focus:border-[2px]',
                            ''
                          )}
                        />
                      </FormControl>
                      <div className="w-[50%] mr-4">
                        {form.formState.errors.email && (
                          <div className=" ">
                            <FormMessage className=" rounded-md ml-4 w-fit px-3 py-2 bg-red-500/10 dark:bg-red-500" />
                          </div>
                        )}
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
      <div className="flex-1"></div>
    </section>
  )
}
