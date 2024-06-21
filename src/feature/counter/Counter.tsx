import React, {useState} from 'react';
import {Button, CountDisplay, SettingsDisplay} from "../../common/components";
import s from './Counter.module.scss'
import {CounterPropsType} from '../../common/types'

export const Counter: React.FC<CounterPropsType> = ({
                                                      triggerCounterSet,
                                                      changeStartValue,
                                                      changeMaxValue,
                                                      increaseCount,
                                                      resetCount,
                                                      ...countState
                                                    }) => {

  const [isSettingsUpdated, setIsSettingsUpdated] = useState(false)

  const handleSettingsChange = () => {
    setIsSettingsUpdated(true)
  }

  const handleClickSet = () => {
    triggerCounterSet()
    setIsSettingsUpdated(false)
  }

  return (
    <div className={s.root}>
      <div className={s.container}>
        <SettingsDisplay {...countState}
                         changeStartValue={changeStartValue}
                         changeMaxValue={changeMaxValue}
                         handleSettingsChange={handleSettingsChange}
        />
        <div className={s.display_button}>
          <Button name={'set'}
                  isDisabled={
                    countState.error.startValueError ||
                    countState.error.maxValueError ||
                    !isSettingsUpdated
                  }
                  triggerCounterSet={handleClickSet}
          />
        </div>
      </div>
      <div className={s.container}>
        <CountDisplay counter={countState.count} disabled={countState.disabled} error={countState.error}
                      maxValue={countState.maxValue}/>
        <div className={s.display_button}>
          <Button {...countState}
                  name={'inc'}
                  isDisabled={
                    countState.count === countState.maxValue ||
                    !countState.disabled ||
                    isSettingsUpdated
                  }
                  triggerCounterSet={increaseCount}/>
          <Button {...countState}
                  name={'reset'}
                  isDisabled={
                    countState.count === countState.startValue ||
                    !countState.disabled ||
                    isSettingsUpdated
                  }
                  triggerCounterSet={resetCount}/>
        </div>
      </div>
    </div>
  )
}