import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href={"/"} className="" aria-label="Logo">
      <Image src="/assets/images/vercel.svg" alt="Logo" width={100} height={100}/>
    </Link>
  )
}
