import React from 'react'

import { TextButton } from './text-button'
import { useRouter } from 'next/router'

export const Navbar = () => {
  //---------------------
  //   ROUTER
  //---------------------
  const router = useRouter()

  //---------------------
  //   RENDER
  //---------------------

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#fafafa] h-16 md:h-20 lg:h-[90px] drop-shadow-sm flex items-center px-4 md:px-8 lg:px-[50px] justify-between z-10">
      <div className="hidden tablet:block desktop:block ">
        <TextButton onClick={() => router.push('/')} title="Home" />
      </div>
      <div className="flex-grow flex justify-center tablet:flex-grow-0 desktop:flex-grow-0">
        <div className="flex gap-4 md:gap-[20px]">
          <TextButton onClick={() => {}} title="My work" />
          <TextButton onClick={() => router.push('/aboutme')} title="About me" />
        </div>
      </div>
    </div>
  )
}
