import React from 'react';
import s from './Button.module.scss'
type PropsType = {
  name: string
  counterSettings?: () => void
  onBackClick?: () => void
  isDisabled: boolean
}

export const Button = (props: PropsType) => {
  const {name, counterSettings, onBackClick, isDisabled} = props
  const handleClick = () => {
    counterSettings?.()
    if (onBackClick) {
      onBackClick()
    }
  }
  return (
    <button className={s.button}
            disabled={isDisabled}
            onClick={handleClick}>{name}</button>
  )
}