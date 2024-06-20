import React from 'react';
import s from './Button.module.scss'
import {ButtonPropsType} from '../../types'

export const Button = (props: ButtonPropsType) => {
  const {name, triggerCounterSet, isDisabled} = props;

  return (
    <button className={s.button} disabled={isDisabled} onClick={triggerCounterSet}>
      {name}
    </button>
  )
}