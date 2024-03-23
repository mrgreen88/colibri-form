"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "../ui/use-toast";
import Link from "next/link";
import Image from "next/image";
import { Checkbox } from "../ui/checkbox";

const FormSchema = z.object({
  code: z.string().min(6, {
    message: "Enter valid code.",
  }),
});

export function SendCodeForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      code: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="sm:text-3xl text-2xl leading-[38px] font-semibold text-header mb-3">
          Enter your code
        </h1>
        <p className="text-paragraph">
          Enter the 6 digit security code from your authenticator app.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel className="text-label font-medium">Code</FormLabel>
                <FormControl>
                  <Input
                    className="text-input"
                    placeholder="Enter your code"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-2">
            <Checkbox id="trust" />
            <label
              htmlFor="trust"
              className="text-sm text-label cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Trust this device
            </label>
          </div>

          <Button className="w-full font-semibold mt-7" type="submit">
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
