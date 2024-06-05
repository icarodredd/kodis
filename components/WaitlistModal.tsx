"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email(),
});

export default function WaitlistModal({ setClick }: any) {
  const [done, setDone] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await fetch("https://kodis-nu.vercel.app/api", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "content-type": "application/json",
      },
    });
    setDone(true);
    setTimeout(() => setDone(false), 4000);
  }

  return (
    <>
      <div className="fixed h-screen inset-0 flex justify-center items-center backdrop-blur-md">
        <Card className="w-1/3 max-lg:w-5/6">
          <div className="flex justify-between">
            <CardHeader>
              <CardTitle>Join Waitlist</CardTitle>
              <CardDescription>Enter your best email.</CardDescription>
            </CardHeader>
            <Button onClick={() => setClick(false)} variant="ghost">
              X
            </Button>
          </div>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Type here..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      {done && (
        <Alert className="w-2/3 fixed bottom-0 inset-x h-min">
          <AlertTitle>Done!</AlertTitle>
          <AlertDescription>You are in the waitlist.</AlertDescription>
        </Alert>
      )}
    </>
  );
}
