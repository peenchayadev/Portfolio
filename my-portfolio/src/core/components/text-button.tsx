import React from 'react'
import classNames from 'classnames'

export interface TextButtonProps {
  onClick: (e?: React.MouseEvent<HTMLDivElement, MouseEvent> | React.KeyboardEvent<HTMLDivElement>) => void
  title: string
  disabled?: boolean
  icon?: string
}

export const TextButton = (props: TextButtonProps) => {
  return (
    <div
      onClick={props.onClick}
      onKeyDown={props.onClick}
      className={classNames('flex items-center w-fit transition-all duration-300 cursor-pointer select-none textbuttonL', {
        'hover:text-purple-500': !props.disabled,
      })}
    >
      {props.icon && <i className={classNames(props.icon)} />}
      {props.title}
    </div>
  )
}
