import React from 'react';
import s from './CountDisplay.module.scss'
import clsx from "clsx";

type DisplayPropsType = {
  counter: number
  max: number
  error: boolean
  disabled: boolean
}

export const CountDisplay = (props: DisplayPropsType) => {
  const finallyStyles = clsx(s.text, props.counter === props.max && s.red)
  return (
    <div className={s.display}>
      <div>
          {props.error ?
            <span className={s.error}>Danger! Incorrect value!</span>
            : !props.disabled && props.counter !== props.max ? <span className={s.text_3}>Enter values and press 'set'</span>
              : <span className={finallyStyles}>{props.counter}</span>}
      </div>
    </div>
  )
}