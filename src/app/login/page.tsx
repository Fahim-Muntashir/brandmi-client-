/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import UseInput from "@/components/customForm/UseInput";
import { UseForm } from "@/components/customForm/UseForm";
import Link from "next/link";
import { toast } from "sonner";
import axiosInstance, { ErrorResponse, ResponseOptions } from "@/axios/axios";
import { useRouter } from "next/navigation";
import Google from "@/components/google/Google";

// Zod Schema for Validation
const loginSchema = z.object({
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
});

const LoginForm: React.FC = () => {
  const router = useRouter();
  const handleSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const res = await axiosInstance.post("/auth/login", data);
      const result = res.data as ResponseOptions<any>;
      toast.success(result.message);
      router.push("/");
      router.refresh();
      //   window.location.href = "/";
    } catch (error) {
      const err = error as ErrorResponse;
      toast.error(err.message);
    }
  };

  return (
    <main className="flex flex-1 justify-center items-center  h-screen">
      <div className="w-full max-w-md  p-6 bg-white rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Your Account
        </h2>
        <UseForm
          onSubmit={handleSubmit}
          schema={loginSchema}
          defaultValues={{
            email: "afba009@gmail.com",
            password: "Pass12345!",
          }}
        >
          <UseInput
            name="email"
            label="Email Address"
            placeholder="john.doe@example.com"
          />
          <UseInput name="password" label="Password" placeholder="********" />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </UseForm>
        <div className="text-center mt-4">
          <Google />
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?
            <Link href="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
