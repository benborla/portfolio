"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "6d6362e7-28c0-43b7-9cca-38965123642b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully! I'll get back to you as soon as possible.");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-[600px] w-full">
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2 text-left">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Your name"
              className="w-full rounded-sm"
            />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              required
              placeholder="your.email@example.com"
              className="w-full rounded-sm"
            />
          </div>
        </div>

        <div className="space-y-2 text-left">
          <Label htmlFor="subject">Subject</Label>
          <Input
            type="text"
            name="subject"
            id="subject"
            required
            placeholder="What's this about?"
            className="w-full rounded-sm"
          />
        </div>

        <div className="space-y-2 text-left">
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="message"
            id="message"
            required
            placeholder="Your message..."
            className="w-full min-h-[120px] rounded-sm"
          />
        </div>

        <AnimatedSubscribeButton
          type="submit"
          subscribeStatus={isLoading}
          className="w-full sm:w-auto"
        >
          <span className="group inline-flex items-center">
            Send Message{" "}
          </span>
          <span className="group inline-flex items-center">
            <Loader2 className="mr-2 size-4 animate-spin" />
            Sending...
          </span>
        </AnimatedSubscribeButton>
      </form>

      {result && (
        <div className={`mt-4 p-3 rounded-md text-sm ${
          result === "Form Submitted Successfully"
            ? "bg-green-50 text-green-800 border border-green-200"
            : result === "Sending..."
            ? "bg-blue-50 text-blue-800 border border-blue-200"
            : "bg-red-50 text-red-800 border border-red-200"
        }`}>
          {result}
        </div>
      )}
    </div>
  );
}
