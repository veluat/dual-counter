import React, {ChangeEvent} from 'react';
import s from './SettingsDisplay.module.scss'
import clsx from 'clsx'
import {SettingsDisplayPropsType} from '../../types'

export const SettingsDisplay: React.FC<SettingsDisplayPropsType> = ({
                                                                      startValue,
                                                                      maxValue,
                                                                      changeStartValue,
                                                                      changeMaxValue,
                                                                      error,
                                                                    }) => {

  const selectMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    changeMaxValue(+e.currentTarget.value)
  }
  const selectStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    changeStartValue(+e.currentTarget.value)
  }
  const classNames = {
    root: s.display,
    wrapperStart: clsx(s.wrapper, {[s.error]: error && error.startValueError,}),
    wrapperMax: clsx(s.wrapper, {[s.error]: error && error.maxValueError,}),
    input: clsx(s.input, error && s.error)
  }
  return (
    <div className={classNames.root}>
      <div className={classNames.wrapperMax}>
        max value:
        <input
          className={classNames.input}
          type="number"
          min={1}
          max={100000}
          onChange={selectMaxValue}
          step="1"
          value={maxValue}/>
      </div>
      <div className={classNames.wrapperStart}>
        start value:
        <input className={classNames.input}
               type="number"
               min={-1}
               max={100000}
               onChange={selectStartValue}
               step="1"
               value={startValue}/>
      </div>
    </div>
  )
}