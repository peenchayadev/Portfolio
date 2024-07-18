import React from "react"

export const NavBar = () => {
  //---------------------
  //   const
  //---------------------
  const leftUnderline =
    "absolute -bottom-1 left-1/2 w-[0px] transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"
  const rightUnderline =
    "absolute -bottom-1 right-1/2 w-[0px] transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"
  const textStyle =
    "text-xl font-semibold group relative w-max hover:text-indigo-300 cursor-pointer"
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="bg-slate-100 max-w-[1920px] h-[100px] flex items-center px-[150px] justify-between">
      <div className={textStyle}>
        <p className="font-sans">Home</p>
        <span className={leftUnderline}></span>
        <span className={rightUnderline}></span>
      </div>
      <div className="flex gap-[50px]">
        <div className={textStyle}>
          <p>My work</p>
          <span className={leftUnderline}></span>
          <span className={rightUnderline}></span>
        </div>
        <div className={textStyle}>
          <p>About me</p>
          <span className={leftUnderline}></span>
          <span className={rightUnderline}></span>
        </div>
        <div className={textStyle}>
          <p>Contact</p>
          <span className={leftUnderline}></span>
          <span className={rightUnderline}></span>
        </div>
      </div>
    </div>
  )
}
