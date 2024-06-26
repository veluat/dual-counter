import React from 'react';
import s from './SwitchButtons.module.scss'
import clsx from 'clsx'
import {SwitchButtonsPropsType} from '../../types'

export const SwitchButtons: React.FC<SwitchButtonsPropsType> = ({ currentVariant, changeVariant }) => {

  const classNames = {
    root: s.root,
    buttonWrapper: s.buttonWrapper,
    buttonDualMonitor: clsx(s.button, s.roundedRight, currentVariant === 'integrated counter' && s.disabled),
    buttonIntegrated: clsx(s.button, s.roundedLeft, currentVariant === 'counter' && s.disabled),
  }

  return (
    <div className={classNames.root}>
      <div className={classNames.buttonWrapper}>
        <button className={classNames.buttonDualMonitor}
                onClick={() => changeVariant('counter')}>
          Dual Monitor Counter
        </button>
      </div>
      <div className={classNames.buttonWrapper}>
        <button className={classNames.buttonIntegrated}
                onClick={() => changeVariant('integrated counter')}>
          Integrated Counter
        </button>
      </div>
    </div>
  )
}