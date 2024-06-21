import React from 'react';
import {Button, CountDisplay, SettingsDisplay} from '../../common/components';
import s from './IntegratedCounter.module.scss'
import {CounterSettingsPropsType} from '../../common/types'

export const IntegratedCounter: React.FC<CounterSettingsPropsType> = ({
                                                                        triggerCounterSet,
                                                                        changeStartValue,
                                                                        changeMaxValue,
                                                                        increaseCount,
                                                                        resetCount,
                                                                        ...countState
                                                                      }) => {
  const counterSettingsHandler = () => {
    triggerCounterSet()
    countState.setEditMode(!countState.isEditMode)
  }

  return (
    <div className={s.root}>
      {
        countState.isEditMode ?
          (<div className={s.container}>
            <SettingsDisplay
              maxValue={countState.maxValue}
              startValue={countState.startValue}
              changeStartValue={changeStartValue}
              changeMaxValue={changeMaxValue}
              error={countState.error}
            />
            <div className={s.display_button}>
              <Button
                name={'set'}
                isDisabled={countState.error.startValueError || countState.error.maxValueError}
                triggerCounterSet={counterSettingsHandler}
              />
            </div>
          </div>)
          : (<div className={s.container}>
            <CountDisplay counter={countState.count} disabled={countState.disabled} error={countState.error}
                          maxValue={countState.maxValue}/>
            <div className={s.display_button}>
              <Button name={'inc'}
                      isDisabled={countState.count === countState.maxValue || !countState.disabled}
                      triggerCounterSet={increaseCount}/>
              <Button name={'reset'}
                      isDisabled={countState.count === countState.startValue || !countState.disabled}
                      triggerCounterSet={resetCount}/>
              <Button
                name={'set'}
                isDisabled={false}
                triggerCounterSet={() => countState.setEditMode(!countState.isEditMode)}
              />
            </div>
          </div>)
      }
    </div>
  )
}