import { domAnimation,LazyMotion,MotionConfig as MotionProvider } from 'framer-motion'
import React from 'react'

export default function FramerMotionProvider({children}: {children: React.ReactNode}) {
  return (
    <MotionProvider reducedMotion='user'>
        <LazyMotion strict features={domAnimation}>{children}</LazyMotion>
    </MotionProvider>
  )
}
