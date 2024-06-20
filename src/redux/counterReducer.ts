import {InitialStateType} from '../common/types'
import {CounterActions, CounterActionTypes} from './counterActionTypes'

const initialState = {
  count: 0,
  maxValue: 5,
  startValue: 0,
  error: {
    startValueError: false,
    maxValueError: false
  },
  disabled: false,
  isEditMode: true
}

export const counterReducer = (state: InitialStateType = initialState, action: CounterActions): InitialStateType => {
  let startValue = state.startValue;
  let maxValue = state.maxValue;

  let startValueError = false;
  let maxValueError = false;

  if (action.type === CounterActionTypes.CHANGE_START_VALUE) {
    startValue = action.start;
  }

  if (action.type === CounterActionTypes.CHANGE_MAX_VALUE) {
    maxValue = action.max;
  }

  if (maxValue <= 0 || startValue < 0 || startValue > maxValue || startValue > 10000) {
    startValueError = true;
  }
  if (maxValue <= 0 || maxValue < startValue || maxValue > 10000) {
    maxValueError = true;
  }
  switch (action.type) {
    case CounterActionTypes.INCREASE:
      return {
        ...state,
        count: state.count + 1,
        error: {
          startValueError: false,
          maxValueError: false
        }
      }
    case CounterActionTypes.SET_COUNT:
      return {...state, count: action.value}
    case CounterActionTypes.RESET:
      return {...state, count: state.startValue}
    case CounterActionTypes.CHANGE_START_VALUE:
      return {
        ...state,
        startValue: startValue,
        error: {startValueError, maxValueError},
        disabled: startValueError || maxValueError
      };
    case CounterActionTypes.CHANGE_MAX_VALUE:
      return {
        ...state,
        maxValue: maxValue,
        error: {startValueError, maxValueError},
        disabled: startValueError || maxValueError
      };
    case CounterActionTypes.COUNTER_SETTINGS:
      return {...state, count: state.startValue, disabled: true}
    case CounterActionTypes.CHANGE_EDIT_MODE:
      return {...state, isEditMode: !state.isEditMode}
    default:
      return state;
  }
}

