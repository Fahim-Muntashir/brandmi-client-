"use client";
import { DefaultValues, useForm } from "react-hook-form";
import React from "react";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType } from "zod";

interface FormProps<T extends ZodType> {
  onSubmit: (data: T["_output"]) => void;
  children: React.ReactNode;
  schema: T;
  defaultValues?: DefaultValues<T["_output"]>;
}

export function UseForm<T extends ZodType>({
  onSubmit,
  children,
  schema,
  defaultValues,
}: FormProps<T>) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {children}
      </form>
    </Form>
  );
}
