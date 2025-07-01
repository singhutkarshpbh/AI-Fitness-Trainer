import { SignedIn } from '@clerk/clerk-react'
import { SignOutButton } from '@clerk/nextjs'
import { SignedOut } from '@clerk/clerk-react'  
import React from 'react'

function Homepage() {
  return (
    <div>
      <SignedOut>
        <SignedIn />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  )
}

export default Homepage
