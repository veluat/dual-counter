import React from 'react';
import {CountDisplay} from "../../common/components";
import {Button} from "../../common/components";
import s from './Counter.module.scss'
import {SettingsDisplay} from '../../common/components'
import {CounterPropsType} from '../../common/types'

export const Counter: React.FC<CounterPropsType> = ({
                                                      triggerCounterSet,
                                                      changeStartValue,
                                                      changeMaxValue,
                                                      increaseCount,
                                                      resetCount,
                                                      ...countState
                                                    }) => {


  return (
    <div className={s.root}>
      <div className={s.container}>
        <SettingsDisplay {...countState}
                         changeStartValue={changeStartValue}
                         changeMaxValue={changeMaxValue}
        />
        <div className={s.display_button}>
          <Button name={'set'}
                  isDisabled={countState.error.startValueError || countState.error.maxValueError || countState.disabled}
                  triggerCounterSet={triggerCounterSet}
          />
        </div>
      </div>
      <div className={s.container}>
        <CountDisplay counter={countState.count} disabled={countState.disabled} error={countState.error}
                      maxValue={countState.maxValue}/>
        <div className={s.display_button}>
          <Button {...countState}
                  name={'inc'}
                  isDisabled={countState.count === countState.maxValue || !countState.disabled}
                  triggerCounterSet={increaseCount}/>
          <Button {...countState}
                  name={'reset'}
                  isDisabled={countState.count === countState.startValue || !countState.disabled}
                  triggerCounterSet={resetCount}/>
        </div>
      </div>
    </div>
  )
}