import React from "react"

import { ProfilePicture } from "../components/profile-picture"
import { MainLayout } from "@/core/components/layouts/main.layout"

export const HomePage = () => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <MainLayout>
      <div className="mx-auto max-w-[1440px] h-[1036px] py-[100px]">
        <div className="flex gap-[200px]">
          <div>
            <ProfilePicture />
          </div>
          <div>
            <p className="text-5xl text-indigo-500">
              Peenchayakorn Tanakornpornsawas
            </p>
            <p className="mt-[20px] text-xl">
              I am studying as an undergraduate in EnET C at KMUTNB. I have
              completed several projects such as web applications. I used to
              work on frontend
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
