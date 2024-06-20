import React from 'react';
import s from './CountDisplay.module.scss'
import clsx from "clsx";
import {DisplayPropsType} from '../../types'

export const CountDisplay: React.FC<DisplayPropsType> = ({
                                                           counter,
                                                           maxValue,
                                                           error,
                                                           disabled
                                                         }) => {
  const classNames = {
    root: s.root,
    notification: clsx(s.notification, error && s.error),
    plusSize: clsx(counter === maxValue && s.plusSize),
    info: s.info
  }

  return (
    <div className={classNames.root}>
      {error.maxValueError || error.startValueError ?
        <span className={classNames.notification}>Danger! Incorrect value!</span>
        : !disabled && counter !== maxValue ?
          <span className={classNames.info}>Enter values and press 'set'</span>
          : <span className={classNames.plusSize}>{counter}</span>}
    </div>
  )
}