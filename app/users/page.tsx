'use client'
import { signOut } from "next-auth/react"


const page = () => {
  return (
    <button onClick={() => signOut()}>
        LogOut
    </button>
  )
}

export default page