"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "../ui/separator";
import GoogleButton from "../ui/GoogleButton";
import FacebookButton from "../ui/FacebookButton";
import Link from "next/link";

const FormSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(50),
    email: z.string().min(6, {
      message: "Email must contain @ character.",
    }),
    password: z.string().min(8, {
      message:
        "Password must contain at least an alphabet a number and a special character.",
    }),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

const SignUpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="mb-10">
      <div className="text-center mb-8">
        <h1 className="text-[30px] leading-[38px] font-semibold text-gray-900 mb-3">
          Get started
        </h1>
        <p className="text-gray-600">Create your account now</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-gray-700 font-medium">
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-gray-700 font-medium mb-2">
                  New Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-gray-500 text-sm">
                  Password must contains uppercase letter, lowercase letter and
                  numbers
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="text-gray-700 font-medium mb-2">
                  Repeat new Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Repeat your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full font-semibold" type="submit">
            Create account
          </Button>

          <div className="flex items-center w-full justify-center my-4">
            <Separator />
            <p className="text-gray-400 text-sm mx-1.5">or</p>
            <Separator />
          </div>

          <div className="flex gap-4 mb-8">
            <GoogleButton>Google</GoogleButton>
            <FacebookButton />
          </div>

          <div className="flex justify-center gap-1 items-center">
            <p className="text-gray-600 text-sm">Have an account?</p>
            <Link
              href="/sign-in"
              className="text-primary font-semibold text-sm hover:underline"
            >
              Sign in
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignUpForm;
