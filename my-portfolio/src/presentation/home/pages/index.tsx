import React, { ReactNode } from 'react'

import { MainLayout } from '@/core/components/layouts/main.layout'

interface AnimatedTextProps {
  children: ReactNode
  delay: number
  className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children, delay, className }) => (
  <div className={`animate-fadeIn ${className}`} style={{ animationDelay: `${delay}s` }}>
    {children}
  </div>
)

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative h-screen">
        <img src="/images/landing.png" alt="landing" className="w-full object-cover h-full" />
        <div className="absolute inset-0 top-[30vh]">
          <AnimatedText delay={0.5} className="textbuttonHome text-black ml-[120px] text-4xl">
            Hi there,
          </AnimatedText>
          <AnimatedText delay={1} className="textbuttonHome text-black ml-[160px] text-6xl mt-[50px]">
            I'm Peenchayakorn
          </AnimatedText>
          <AnimatedText delay={1.5} className="textbuttonHome text-black ml-[120px] text-3xl mt-[50px]">
            College Of Industrial Technology EnET , KMUTNB
          </AnimatedText>
        </div>
      </div>
    </MainLayout>
  )
}

export default HomePage
