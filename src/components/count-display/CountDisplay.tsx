import React from 'react';
import s from './CountDisplay.module.scss'
import clsx from "clsx";
import {ErrorType} from '../../app/App'

type DisplayPropsType = {
  counter: number
  max: number
  error: ErrorType
  disabled: boolean
}

export const CountDisplay: React.FC<DisplayPropsType> = ({counter, max, error, disabled}) => {
  const classNames = {
    root: s.display,
    value: clsx(s.value),
    notification: clsx(s.notification, error && s.error),
    plusSize: clsx(s.font, counter === max && s.plusSize),
    info: s.info
  }

  return (
    <div className={classNames.root}>
      <div className={classNames.value}>
        {error.maxValueError || error.startValueError ?
          <span className={classNames.notification}>Danger! Incorrect value!</span>
          : !disabled && counter !== max ? <span className={classNames.info}>Enter values and press 'set'</span>
            : <span className={classNames.plusSize}>{counter}</span>}
      </div>
    </div>
  )
}