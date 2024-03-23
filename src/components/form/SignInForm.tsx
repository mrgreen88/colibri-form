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

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="sm:text-3xl text-2xl leading-[38px] font-semibold text-header mb-3">
          Log in to your account
        </h1>
        <p className="text-paragraph">
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
                <FormLabel className="text-label font-medium">Email</FormLabel>
                <FormControl>
                  <Input
                    className="text-input"
                    placeholder="Enter your email"
                    {...field}
                  />
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
                <FormLabel className="text-label font-medium mb-2">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-input"
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
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
                className="text-sm font-medium text-label cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Keep me logged in
              </label>
            </div>
            <div>
              <Link
                href="/forgot"
                className="text-primary font-semibold text-[15px] hover:underline"
              >
                Forgot password
              </Link>
            </div>
          </div>

          <Button className="w-full font-semibold" type="submit">
            Sign in
          </Button>

          <div className="flex items-center w-full justify-center my-4">
            <Separator className="bg-separator" />
            <p className="text-input text-sm mx-1.5">or</p>
            <Separator className="bg-separator" />
          </div>

          <div className="flex gap-4 mb-8">
            <GoogleButton>Google</GoogleButton>
            <FacebookButton>Facebook</FacebookButton>
          </div>

          <div className="flex justify-center gap-1 items-center mb-8">
            <p className="text-paragraph text-sm">Don’t have an account?</p>
            <Link
              href="/sign-up"
              className="text-primary font-semibold text-sm hover:underline"
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
