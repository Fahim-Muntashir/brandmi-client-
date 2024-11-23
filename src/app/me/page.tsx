/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance, { ErrorResponse, ResponseOptions } from "@/axios/axios";
import { cookies } from "next/headers";
const page = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;
  const refreshToken = cookieStore.get("refreshToken")?.value || null;
  let data;
  try {
    const res = await axiosInstance.get("/user/me", {
      headers: {
        // Forward cookies manually
        Cookie: `accessToken=${accessToken}; refreshToken=${refreshToken}`,
      },
    });
    const result = res.data as ResponseOptions<any>;
    data = result.data;
    //   window.location.href = "/";
  } catch (error) {
    const err = error as ErrorResponse;
    data = err.message;
  }
  return <div>{JSON.stringify(data)}</div>;
};
export default page;
