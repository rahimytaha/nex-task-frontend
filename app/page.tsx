import { cookies } from "next/headers"


const page = async() => {
  const cookieStore = await cookies()
  return (
    <div>{cookieStore.get("access_token")?.value}</div>
  )
}

export default page