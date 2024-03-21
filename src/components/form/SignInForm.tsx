"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";
import GoogleButton from "../ui/GoogleButton";
import FacebookButton from "../ui/FacebookButton";

const FormSchema = z.object({
  email: z.string().min(6, {
    message: "Email must contain @ character.",
  }),
  password: z.string().min(8, {
    message:
      "Password must contain at least an alphabet a number and a special character.",
  }),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-[30px] leading-[38px] font-semibold text-gray-900 mb-3">
          Log in to your account
        </h1>
        <p className="text-gray-600">
          Welcome back! Please enter your details.
        </p>
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
                  Password
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-between items-center my-[22px] w-full">
            <div className="flex items-center gap-2">
              <Checkbox id="login" />
              <label
                htmlFor="login"
                className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Keep me logged in
              </label>
            </div>
            <div>
              <Link href="#" className="text-primary font-semibold text-[15px]">
                Forgot password
              </Link>
            </div>
          </div>

          <Button className="w-full font-semibold" type="submit">
            Sign in
          </Button>

          <div className="flex items-center w-full justify-center my-4">
            <Separator />
            <p className="text-gray-400 text-sm mx-1.5">or</p>
            <Separator />
          </div>

          <div className="flex gap-4 mb-8">
            <GoogleButton />
            <FacebookButton />
          </div>

          <div className="flex justify-center gap-1 items-center">
            <p className="text-gray-600 text-sm">Don’t have an account?</p>
            <Link
              href="/sign-up"
              className="text-primary font-semibold text-sm"
            >
              Sign up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignInForm;
