import React from "react"
import { NavBar } from "../nav"

interface MainLayoutProps {
  children: React.ReactElement
}

export const MainLayout = (props: MainLayoutProps) => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>{props.children}</div>
    </div>
  )
}
