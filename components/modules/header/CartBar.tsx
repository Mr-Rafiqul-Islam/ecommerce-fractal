import React from 'react'
import { motion, m, AnimatePresence } from 'framer-motion'
export default function CartBar({
    openCartBar,
    setOpenCartBar,
  }: {
    openCartBar: boolean;
    setOpenCartBar: (v: boolean) => void;
  }) {
  return (
    <AnimatePresence>

    {openCartBar &&
    (<div className='absolute top-[54px] right-0 h-fit w-[360px] bg-white p-4 shadow-2xl'>
        <div className="flex">

        </div>
    </div>)
    }
    </AnimatePresence>
  )
}
