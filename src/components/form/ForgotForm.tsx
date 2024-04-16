"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "../ui/use-toast"
import Link from "next/link"
import Image from "next/image"
import ArrowLeft from "@/assets/images/ArrowLeft.svg"

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Email mus contain @ character.",
  }),
})

export function ForgotPassword() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div>
      <div className='text-center mb-8'>
        <h1 className='sm:text-3xl text-2xl leading-[38px] font-semibold text-header mb-3'>
          Forgot password?
        </h1>
        <p className='text-paragraph'>
          No worries, we’ll send you reset instructions.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='mb-6'>
                <FormLabel className='text-label font-medium'>Email</FormLabel>
                <FormControl>
                  <Input
                    className='text-input'
                    placeholder='Enter your email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className='w-full font-semibold mb-8' type='submit'>
            Reset password
          </Button>

          <Link
            href='/sign-in'
            className='flex justify-center gap-[13.5px] items-center text-primary font-semibold text-sm hover:underline'
          >
            <Image src={ArrowLeft} alt='Arrow Left' width={7} height={12} />
            <p>Back to log in</p>
          </Link>
        </form>
      </Form>
    </div>
  )
}
