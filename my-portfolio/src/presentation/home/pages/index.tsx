import React from 'react'

import { MainLayout } from '@/core/components/layouts/main.layout'

export const HomePage = () => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <MainLayout>
      <div className="relative min-h-screen">
        <img src="/images/landing.png" alt="landing" className="w-full object-cover h-full" />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-8 lg:p-16">
          <div className="textbuttonHome text-black text-2xl md:text-3xl lg:text-4xl animate-fadeIn1">Hi there,</div>
          <div className="textbuttonHome text-black text-4xl md:text-5xl lg:text-6xl mt-4 md:mt-8 animate-fadeIn2">I'm Peenchayakorn</div>
          <div className="textbuttonHome text-black text-xl md:text-2xl lg:text-3xl mt-4 md:mt-8 animate-fadeIn3">
            College of Industrial Technology EnET C , KMUTNB
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default HomePage
