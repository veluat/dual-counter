import {
  ChangeEditModeAction,
  ChangeMaxValueAction,
  ChangeStartValueAction,
  CounterActionTypes,
  IncreaseAction,
  ResetAction,
  TriggerCounterSetAction,
} from './counterActionTypes';
import {useDispatch} from 'react-redux'

export const increaseAC = (): IncreaseAction => ({
  type: CounterActionTypes.INCREASE,
});

export const resetCountAC = (): ResetAction => ({
  type: CounterActionTypes.RESET,
});

export const changeStartValueAC = (start: number): ChangeStartValueAction => ({
  type: CounterActionTypes.CHANGE_START_VALUE,
  start,
});

export const changeMaxValueAC = (max: number): ChangeMaxValueAction => ({
  type: CounterActionTypes.CHANGE_MAX_VALUE,
  max,
});

export const triggerCounterSetAC = (): TriggerCounterSetAction => ({
  type: CounterActionTypes.COUNTER_SETTINGS,
});

export const changeEditModeAC = (isEditMode: boolean): ChangeEditModeAction => ({
  type: CounterActionTypes.CHANGE_EDIT_MODE,
  isEditMode,
});

// Create a custom hook to manage the counter actions

export const useCounterActions = () => {
  const dispatch = useDispatch()

  const increaseCount = () => {
    dispatch(increaseAC())
  }

  const resetCount = () => {
    dispatch(resetCountAC())
  }

  const changeStartValue = (start: number) => {
    dispatch(changeStartValueAC(start))
  }

  const changeMaxValue = (max: number) => {
    dispatch(changeMaxValueAC(max))
  }

  const triggerCounterSet = () => {
    dispatch(triggerCounterSetAC())
  }

  const setEditMode = (isEditMode: boolean) => {
    dispatch(changeEditModeAC(isEditMode))
  }

  return {
    increaseCount,
    resetCount,
    changeStartValue,
    changeMaxValue,
    triggerCounterSet,
    setEditMode
  }
}

