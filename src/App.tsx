import React from 'react';
import s from './App.module.scss'
import {CountDisplay} from "./components/count-display/CountDisplay";
import {Button} from "./components/button/Button";
import {SettingsDisplay} from "./components/settings-display/SettingsDisplay";
import {
  changeMaxValueAC,
  changeStartValueAC,
  counterSettingsAC,
  increaseCountAC,
  resetCountAC,
  StateType
} from "./bll/counterReducer";
import {AppRootStateType} from "./bll/store";
import {useDispatch, useSelector} from "react-redux";

export function App() {

  const state = useSelector<AppRootStateType, StateType>(state => state.count)
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

  const error = state.maxValue <= 0 || state.startValue < 0 || state.maxValue < state.startValue || state.maxValue > 10000 || state.startValue > 10000;

  return (
      <div className={s.App}>
        <div className={s.container}>
          <SettingsDisplay maxValue={state.maxValue} startValue={state.startValue}
                           changeStartValue={changeStartValue}
                           changeMaxValue={changeMaxValue}
                           error={error}
          />
          <div className={s.display_button}>
            <Button name={'Set'}
                    isDisabled={error || state.disabled}
                    counterSettings={counterSet}
            />
          </div>
        </div>
        <div className={s.container}>
          <CountDisplay counter={state.count}
                        max={state.maxValue}
                        disabled={state.disabled}
                        error={error}/>
          <div className={s.display_button}>
            <Button name={'Inc'}
                    isDisabled={state.count === state.maxValue || !state.disabled}
                    counterSettings={increaseCount}/>
            <Button name={'Reset'}
                    isDisabled={state.count === state.startValue || !state.disabled}
                    counterSettings={resetCount}/>
          </div>
        </div>
      </div>
  );
}