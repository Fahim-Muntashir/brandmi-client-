/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import axiosInstance, { ErrorResponse, ResponseOptions } from "@/axios/axios"
import { registerSchema } from "@/schemas/user.schema"
import axios, { AxiosError } from "axios"
import { z } from "zod"

export const registerAction = async (value: z.infer<typeof registerSchema>) => {

    try {

        const validate = registerSchema.safeParse(value)
        if (!validate.success) {
            return { error: "Failed to validate data" }
        }
        const response = await axiosInstance.post<ResponseOptions<any>>('/user/create-user', value)
        const result = response.data as ResponseOptions<any>
        return {
            success: response.data.message
        }
    } catch (error) {

        const axiosError = error as ErrorResponse
        return { error: axiosError.message }
    }
}