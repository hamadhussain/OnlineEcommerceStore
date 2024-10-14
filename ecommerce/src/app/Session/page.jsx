'use client'
import React from 'react'
import { SessionProvider } from "next-auth/react"

const Sessionn = ({children}) => {
  return (
<SessionProvider>{children}</SessionProvider>
  )
}

export default Sessionn