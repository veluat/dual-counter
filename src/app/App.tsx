import React from 'react';
import s from './App.module.scss'
import {
  changeEditModeAC,
  changeMaxValueAC,
  changeStartValueAC,
  counterSettingsAC,
  increaseCountAC,
  resetCountAC,
  StateType
} from "./reducer/counterReducer";
import {AppRootStateType} from "./reducer/store";
import {useDispatch, useSelector} from "react-redux";
import {SwitchButtons} from '../components/switch-buttons/SwitchButtons'
import {IntegratedCounter} from '../feature/integrated-counter/IntegratedCounter'
import {Counter} from '../feature/counter/Counter'

export type ErrorType = {
  startValueError: boolean;
  maxValueError: boolean;
};
export type VariantType = 'counter' | 'integrated counter'

export function App() {

  const {
    count,
    maxValue,
    startValue,
    disabled,
    isEditMode
  } = useSelector<AppRootStateType, StateType>(state => state.count);
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

  const setEditMode = (isEditMode: boolean) => {
    dispatch(changeEditModeAC(isEditMode))
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
  const [counterVariant, setCounterVariant] = React.useState<VariantType>('counter')
  const changeVariant = (variant: VariantType) => {
    setCounterVariant(variant)
  }
  return (

    <div className={s.root}>
      <SwitchButtons currentVariant={counterVariant} changeVariant={changeVariant}/>
      {counterVariant === 'counter' &&
        (<Counter count={count}
                  maxValue={maxValue}
                  startValue={startValue}
                  disabled={disabled}
                  error={error}
                  counterSet={counterSet}
                  changeStartValue={changeStartValue}
                  changeMaxValue={changeMaxValue}
                  increaseCount={increaseCount}
                  resetCount={resetCount}/>)}

      {counterVariant === 'integrated counter' &&
        (<IntegratedCounter count={count}
                            maxValue={maxValue}
                            startValue={startValue}
                            disabled={disabled}
                            error={error}
                            counterSet={counterSet}
                            changeStartValue={changeStartValue}
                            changeMaxValue={changeMaxValue}
                            increaseCount={increaseCount}
                            resetCount={resetCount}
                            setEditMode={setEditMode}
                            isEditMode={isEditMode}/>)}
    </div>
  )
}