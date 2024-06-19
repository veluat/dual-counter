import React from 'react';
import {SettingsDisplay} from '../../components/settings-display/SettingsDisplay';
import {Button} from '../../components/button/Button';
import {ErrorType} from '../../app/App'
import s from './IntegratedCounter.module.scss'
import {CountDisplay} from '../../components/count-display/CountDisplay'

type CounterSettingsProps = {
  count: number;
  maxValue: number;
  startValue: number;
  disabled: boolean;
  error: ErrorType;
  counterSet: () => void;
  changeStartValue: (start: number) => void
  changeMaxValue: (max: number) => void
  increaseCount: () => void
  resetCount: () => void
  setEditMode: (isEditMode: boolean) => void
  isEditMode: boolean
};

export const IntegratedCounter: React.FC<CounterSettingsProps> = ({
                                                                    setEditMode,
                                                                    isEditMode,
                                                                    count,
                                                                    maxValue,
                                                                    startValue,
                                                                    disabled,
                                                                    error,
                                                                    counterSet,
                                                                    changeStartValue,
                                                                    changeMaxValue,
                                                                    increaseCount,
                                                                    resetCount,
                                                                  }) => {
  const counterSettingsHandler = () => {
    counterSet()
    setEditMode(!isEditMode)
  }

  return (
    <>
      {isEditMode ?
        (<div className={s.container}>
          <SettingsDisplay
            maxValue={maxValue}
            startValue={startValue}
            changeStartValue={changeStartValue}
            changeMaxValue={changeMaxValue}
            error={error}
          />
          <div className={s.display_button}>
            <Button
              name={'Set'}
              isDisabled={error.startValueError || error.maxValueError}
              counterSettings={counterSettingsHandler}
            />
          </div>
        </div>)
        : (<div className={s.container}>
          <CountDisplay counter={count}
                        max={maxValue}
                        disabled={disabled}
                        error={error}/>
          <div className={s.display_button}>
            <Button name={'Inc'}
                    isDisabled={count === maxValue || !disabled}
                    counterSettings={increaseCount}/>
            <Button name={'Reset'}
                    isDisabled={count === startValue || !disabled}
                    counterSettings={resetCount}/>
            <Button
              name={'Set'}
              isDisabled={false}
              counterSettings={() => setEditMode(!isEditMode)}
            />
          </div>
        </div>)}
    </>
  )
}