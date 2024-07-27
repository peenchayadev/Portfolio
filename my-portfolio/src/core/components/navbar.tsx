import React from 'react'
import { TextButton } from './text-button'

export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-[#fafafa] h-[90px] drop-shadow-sm flex items-center px-[50px] justify-between z-10">
      <div>
        <TextButton onClick={() => {}} title="Home" />
      </div>
      <div className="flex gap-[20px]">
        <TextButton onClick={() => {}} title="My work" />
        <TextButton onClick={() => {}} title="About me" />
      </div>
    </div>
  )
}
