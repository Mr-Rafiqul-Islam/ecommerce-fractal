import Footer from '@/components/modules/footer'
import Header from '@/components/modules/header'
import * as React from 'react'
import MobileBottom from '@/components/custom/MobileBottom'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <MobileBottom/>
      {children}
      <Footer />
    </>
  )
}
