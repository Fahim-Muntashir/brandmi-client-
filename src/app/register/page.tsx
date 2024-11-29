/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useTransition } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import UseInput from "@/components/customForm/UseInput";
import { UseForm } from "@/components/customForm/UseForm";
import Link from "next/link";
import { registerAction } from "@/actions/register.action";

// Zod Schema for Validation
const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" }),

    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Password must include uppercase, lowercase, number, and special character",
        }
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const RegisterForm: React.FC = () => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const handleSubmit = (data: z.infer<typeof registerSchema>) => {
    const { confirmPassword, ...remainingData } = data;
    setSuccess("");
    setError("");
    startTransition(() => {
      registerAction(remainingData).then((data) => {
        console.log("data", data);

        setSuccess(data?.success);
        setError(data?.error);
      });
    });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Create Your Account
      </h2>
      <UseForm
        onSubmit={handleSubmit}
        schema={registerSchema}
        defaultValues={{
          name: "Fahim",
          email: "afba009@gmail.com",
          password: "Pass12345!",
          confirmPassword: "Pass12345!",
        }}
      >
        <UseInput name="name" label="First Name" placeholder="John" />
        <UseInput
          name="email"
          label="Email Address"
          placeholder="john.doe@example.com"
        />
        <UseInput name="password" label="Password" placeholder="********" />
        <UseInput
          name="confirmPassword"
          label="Confirm Password"
          placeholder="********"
        />
        <p>{success}</p>
        <p>{error}</p>
        <Button type="submit" className="w-full" disabled={isPending}>
          Register
        </Button>
      </UseForm>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
