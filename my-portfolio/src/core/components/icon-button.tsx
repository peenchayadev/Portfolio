import React from 'react'
import classNames from 'classnames'

interface IconButtonProps {
  onClick: (e?: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>) => void
  icon: string
}

export const IconButton = (props: IconButtonProps) => {
  //---------------------
  //   RENDER
  //---------------------
  return (
    <div className="rounded-full w-[45px] h-[45px] border border-slate-500 flex items-center justify-center cursor-pointer">
      <div>
        <i className={classNames(props.icon)} />
      </div>
    </div>
  )
}
