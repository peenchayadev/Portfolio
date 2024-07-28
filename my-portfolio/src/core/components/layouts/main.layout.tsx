import React from 'react'
import { Navbar } from '../navbar'
import { Footer } from '../footer'

interface MainLayoutProps {
  children: React.ReactElement
}

export const MainLayout = (props: MainLayoutProps) => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">{props.children}</div>
      <Footer />
    </div>
  )
}
