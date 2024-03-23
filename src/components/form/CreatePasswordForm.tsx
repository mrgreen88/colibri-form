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

const CreatePasswordForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div className="mb-10">
      <div className="text-center mb-4">
        <h1 className="sm:text-3xl text-2xl leading-[38px] font-semibold text-header mb-8">
          Create a password
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel className="text-label font-medium mb-2">
                  New Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-input"
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-input text-sm">
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
              <FormItem className="mb-6">
                <FormLabel className="text-label font-medium mb-2">
                  Repeat new Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-input"
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
            Get started
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

          <div className="flex justify-center gap-1 items-center">
            <p className="text-paragraph text-sm">Have an account?</p>
            <Link
              href="/sign-in"
              className="text-primary font-semibold text-sm hover:underline"
            >
              Log in
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreatePasswordForm;
