import React from 'react'

interface BadgeProps {
  title: string
}

export const Badge = (props: BadgeProps) => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className=" border border-slate-400 w-fit px-[5px] py-[2px] flex items-center rounded-[10px]">
      <div className="textA text-[20px]">{props.title}</div>
    </div>
  )
}
