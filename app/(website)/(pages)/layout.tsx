import MobileButton from '@/components/custom/MobileButton'
import Footer from '@/components/modules/footer'
import Header from '@/components/modules/header'
import * as React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <MobileButton/>
      {children}
      <Footer />
    </>
  )
}
