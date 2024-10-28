import { SignOutButton, UserButton } from '@clerk/nextjs'
import React from 'react'

export default function page() {
  return (
    <div>This is a Protected Page <br />
        <UserButton/>
        <SignOutButton/>
    </div>
  )
}
