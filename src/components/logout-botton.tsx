"use client"

import { useClerk } from "@clerk/nextjs"


export const LogoutBotton = () => {
  const { signOut } = useClerk();
  const handleClick = () => {
    signOut({
      redirectUrl: '/'
    })
  }
  

  return (
    <button onClick={handleClick}>Sair</button>
  )
}