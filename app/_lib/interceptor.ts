// lib/api.ts

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { TInterceptorResponse } from "../types";

// نوع پاسخ استاندارد برای همه درخواست‌ها
export type ApiResponse<T = any> = {
  data?: T;
  error?: string;
  status: number;
};
const BASE_URL = "http://localhost:3000";
type InterceptorOptions = RequestInit & {
  queries?: Record<string, string>;
};

/**
 * اینترسپتور اصلی API - فقط برای server-side
 * توکن رو از http-only cookie می‌خونه و هدر Authorization رو اضافه می‌کنه
 */
export async function Interceptor<T>(
  url: string,
  options: InterceptorOptions = {}
): Promise<TInterceptorResponse<T>> {
  // خواندن توکن از کوکی http-only (امن‌ترین روش)
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;
  url = BASE_URL + url;
  if (options.queries) {
    const searchParams = new URLSearchParams();
    const dataList = Object.keys(options.queries);
    dataList.forEach((el) => {
      searchParams.set(el, options?.queries ? options?.queries[el] : "");
    });
    url = url + `?${searchParams.toString()}`;
  }

  // هدرهای پیش‌فرض
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    ...options.headers, // اجازه override بده
  };

  const requestOptions: RequestInit = {
    ...options,
    headers,
    credentials: "include", // برای کوکی‌های http-only
    // cache رو می‌تونی بسته به نیاز تنظیم کنی
    // cache: 'force-cache' | 'no-store' | etc.
  };

  // لاگ ساده در حالت development
  if (process.env.NODE_ENV === "development") {
    console.log(
      `[API] ${options.method || "GET"} ${url} → ${
        accessToken ? "with token" : "no token"
      }`
    );
  }

  try {
    const response = await fetch(url, requestOptions);

    // پاسخ خالی (مثل DELETE موفق یا 204)
    if (
      response.status === 204 ||
      response.headers.get("content-length") === "0"
    ) {
      return { status: response.status };
    }

    // سعی کن JSON بخونی
    let data;
    try {
      data = await response.json();
    } catch {
      data = null;
    }

    // درخواست موفق
    if (response.ok) {
      return { data: data as T, status: response.status };
    }

    // خطای 401: توکن نامعتبر یا منقضی شده → کاربر رو به لاگین ببر
    // if (response.status === 401) {
    //   // پاک کردن کوکی (اختیاری، اگر بخوای)
    //   cookieStore.delete("access_token");

    //   redirect("/login?error=session_expired");
    // }

    console.log(response);
    // سایر خطاها (400, 403, 500 و ...)
    const errorMessage = data?.message || data?.error || "error";

    return {
      error: errorMessage,
      data,
      status: response.status,
    };
  } catch (error) {
    // خطاهای شبکه یا مشکل در fetch
    console.error("[API Network Error]", url, error);

    return {
      status: 500,
    };
  }
}
