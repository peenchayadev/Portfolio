import React from "react"

export const ProfilePicture = () => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="w-[300px] h-[300px] rounded-3xl overflow-hidden">
      <img
        src="/images/profilepicture.jpg"
        alt="Profile Picture"
        className="w-full h-full object-cover"
      />
    </div>
  )
}
