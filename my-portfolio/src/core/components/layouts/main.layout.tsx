import React from 'react'
import { Navbar } from '../navbar'

interface MainLayoutProps {
  children: React.ReactElement
}

export const MainLayout = (props: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">{props.children}</div>
    </div>
  )
}
