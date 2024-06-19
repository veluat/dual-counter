import React from 'react';
import {CountDisplay} from "../../components/count-display/CountDisplay";
import {Button} from "../../components/button/Button";
import {ErrorType} from '../../app/App'
import s from './Counter.module.scss'
import {SettingsDisplay} from '../../components/settings-display/SettingsDisplay'

type CounterProps = {
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
};
export const Counter: React.FC<CounterProps> = ({
                                                  count,
                                                  maxValue,
                                                  startValue,
                                                  disabled,
                                                  error,
                                                  counterSet,
                                                  changeStartValue,
                                                  changeMaxValue,
                                                  increaseCount,
                                                  resetCount
                                                }) => {


  return (
    <div className={s.root}>
      <div className={s.container}>
        <SettingsDisplay maxValue={maxValue} startValue={startValue}
                         changeStartValue={changeStartValue}
                         changeMaxValue={changeMaxValue}
                         error={error}
        />
        <div className={s.display_button}>
          <Button name={'Set'}
                  isDisabled={error.startValueError || error.maxValueError || disabled}
                  counterSettings={counterSet}
          />
        </div>
      </div>
      <div className={s.container}>
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
        </div>
      </div>
    </div>
  )
}