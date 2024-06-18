import React from 'react';
import s from './App.module.scss'
import {CountDisplay} from "../components/count-display/CountDisplay";
import {Button} from "../components/button/Button";
import {SettingsDisplay} from "../components/settings-display/SettingsDisplay";
import {
  changeMaxValueAC,
  changeStartValueAC,
  counterSettingsAC,
  increaseCountAC,
  resetCountAC,
  StateType
} from "./reducer/counterReducer";
import {AppRootStateType} from "./reducer/store";
import {useDispatch, useSelector} from "react-redux";
export type ErrorType = {
  startValueError: boolean;
  maxValueError: boolean;
};
export function App() {

  const {count, maxValue, startValue, disabled} = useSelector<AppRootStateType, StateType>(state => state.count);
  const dispatch = useDispatch()

  const increaseCount = () => {
    dispatch(increaseCountAC())
  }
  // сброс на 0

  const resetCount = () => {
    dispatch(resetCountAC())
  }
  // выбор стартового и максимального значений

  const changeStartValue = (start: number) => {
    dispatch(changeStartValueAC(start))
  }

  const changeMaxValue = (max: number) => {
    dispatch(changeMaxValueAC(max))
  }
  // сетать новые параментры в счетчик

  const counterSet = () => {
    dispatch(counterSettingsAC())
  }
  const error = {
    startValueError:
      maxValue <= 0 ||
      startValue < 0 ||
      startValue > maxValue ||
      startValue > 10000,
    maxValueError:
      maxValue <= 0 ||
      maxValue < startValue ||
      maxValue > 10000,
  }

  return (
    <div className={s.app}>
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
  );
}